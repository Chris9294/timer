type TimerDisplayProps = {
  remainingSeconds: number;
  isFinished: boolean;
};

function formatTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function TimerDisplay({ remainingSeconds }: TimerDisplayProps) {
  return (
    <section className="timer-display" aria-live="polite">
      <div className="timer-time">{formatTime(remainingSeconds)}</div>
    </section>
  );
}
