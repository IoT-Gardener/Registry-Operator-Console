import { useEffect, useState } from 'react';

interface Props {
  target: string;
}

function diff(target: Date) {
  const ms = target.getTime() - Date.now();
  if (ms <= 0) return { days: 0, hours: 0, mins: 0, secs: 0, done: true };
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    mins: Math.floor((s % 3600) / 60),
    secs: s % 60,
    done: false,
  };
}

export default function Countdown({ target }: Props) {
  const targetDate = new Date(target);
  const [t, setT] = useState(() => diff(targetDate));

  useEffect(() => {
    const id = setInterval(() => setT(diff(targetDate)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (t.done) {
    return (
      <div className="text-neon-danger text-2xl tracking-widest glow-magenta">
        // OPERATION WINDOW OPEN //
      </div>
    );
  }

  const cell = (n: number, label: string) => (
    <div className="flex flex-col items-center">
      <span className="text-4xl md:text-6xl text-neon-cyan glow-cyan tabular-nums">
        {String(n).padStart(2, '0')}
      </span>
      <span className="text-[10px] tracking-[0.3em] text-fg-dim uppercase mt-1">{label}</span>
    </div>
  );

  return (
    <div className="flex gap-6 md:gap-10 justify-center">
      {cell(t.days, 'Days')}
      {cell(t.hours, 'Hrs')}
      {cell(t.mins, 'Min')}
      {cell(t.secs, 'Sec')}
    </div>
  );
}
