type TimerDisplayProps = {
  remainingSeconds: number;
  isFinished: boolean;
  progress: number;
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

export function TimerDisplay({ remainingSeconds, isFinished, progress }: TimerDisplayProps) {
  return (
    <section className="timer-display" aria-live="polite">
      <div className="timer-progress" aria-hidden="true">
        <div className="timer-progress-bar" style={{ width: `${Math.round(progress * 100)}%` }} />
      </div>

      <div className="timer-time">{formatTime(remainingSeconds)}</div>

      {isFinished && <div className="timer-finished">C'est terminé !</div>}
    </section>
  );
}
