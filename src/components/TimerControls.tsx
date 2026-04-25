type TimerControlsProps = {
  isRunning: boolean;
  totalSeconds: number;
  remainingSeconds: number;
  isFinished: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  onOpenSettings: () => void;
};

async function toggleFullscreen() {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen();
    return;
  }

  await document.exitFullscreen();
}

function getStartButtonLabel({
  isRunning,
  totalSeconds,
  remainingSeconds,
  isFinished,
}: Pick<TimerControlsProps, "isRunning" | "totalSeconds" | "remainingSeconds" | "isFinished">) {
  if (isRunning) {
    return "En cours";
  }

  if (isFinished) {
    return "Redémarrer";
  }

  if (totalSeconds > 0 && remainingSeconds > 0 && remainingSeconds < totalSeconds) {
    return "Reprendre";
  }

  return "Démarrer";
}

export function TimerControls({
  isRunning,
  totalSeconds,
  remainingSeconds,
  isFinished,
  onStart,
  onPause,
  onReset,
  onOpenSettings,
}: TimerControlsProps) {
  const startButtonLabel = getStartButtonLabel({
    isRunning,
    totalSeconds,
    remainingSeconds,
    isFinished,
  });

  return (
    <nav className="student-controls" aria-label="Contrôles du timer">
      <button
        className="button button-start"
        type="button"
        onClick={onStart}
        disabled={isRunning || totalSeconds <= 0}
      >
        {startButtonLabel}
      </button>

      <button className="button button-pause" type="button" onClick={onPause} disabled={!isRunning}>
        Pause
      </button>

      <button className="button button-reset" type="button" onClick={onReset}>
        Réinitialiser
      </button>

      <button className="button button-light" type="button" onClick={toggleFullscreen}>
        Plein écran
      </button>

      <button className="button button-settings" type="button" onClick={onOpenSettings}>
        Configuration
      </button>
    </nav>
  );
}
