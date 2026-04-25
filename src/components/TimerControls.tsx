type TimerControlsProps = {
  isRunning: boolean;
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

export function TimerControls({
  isRunning,
  onStart,
  onPause,
  onReset,
  onOpenSettings,
}: TimerControlsProps) {
  return (
    <nav className="student-controls" aria-label="Contrôles du timer">
      <button className="button button-start" type="button" onClick={onStart}>
        {isRunning ? "En cours" : "Démarrer"}
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
