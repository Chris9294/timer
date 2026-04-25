import { useEffect, useMemo, useState } from "react";
import { patterns } from "../data/patterns";

type TimerControlsProps = {
  totalSeconds: number;
  setTotalSeconds: (value: number) => void;
  selectedPatternId: string;
  setSelectedPatternId: (value: string) => void;
  isRunning: boolean;
  soundEnabled: boolean;
  setSoundEnabled: (value: boolean) => void;
  disappearanceDelayInSeconds: number;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function TimerControls({
  totalSeconds,
  setTotalSeconds,
  selectedPatternId,
  setSelectedPatternId,
  isRunning,
  soundEnabled,
  setSoundEnabled,
  disappearanceDelayInSeconds,
  onStart,
  onPause,
  onReset,
}: TimerControlsProps) {
  const [minutes, setMinutes] = useState(Math.floor(totalSeconds / 60));
  const [seconds, setSeconds] = useState(totalSeconds % 60);

  const disappearanceLabel = useMemo(() => {
    if (disappearanceDelayInSeconds <= 1) {
      return "1 motif disparaît chaque seconde.";
    }

    return `1 motif disparaît environ toutes les ${disappearanceDelayInSeconds.toFixed(1)} secondes.`;
  }, [disappearanceDelayInSeconds]);

  useEffect(() => {
    setMinutes(Math.floor(totalSeconds / 60));
    setSeconds(totalSeconds % 60);
  }, [totalSeconds]);

  function updateDuration(nextMinutes: number, nextSeconds: number) {
    const safeMinutes = clamp(nextMinutes, 0, 180);
    const safeSeconds = clamp(nextSeconds, 0, 59);
    setMinutes(safeMinutes);
    setSeconds(safeSeconds);
    setTotalSeconds(safeMinutes * 60 + safeSeconds);
  }

  async function toggleFullscreen() {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      return;
    }

    await document.exitFullscreen();
  }

  return (
    <aside className="controls-panel" aria-label="Réglages du timer">
      <div className="controls-row">
        <label className="field">
          <span>Minutes</span>
          <input
            type="number"
            min={0}
            max={180}
            value={minutes}
            disabled={isRunning}
            onChange={(event) => updateDuration(Number(event.target.value), seconds)}
          />
        </label>

        <label className="field">
          <span>Secondes</span>
          <input
            type="number"
            min={0}
            max={59}
            value={seconds}
            disabled={isRunning}
            onChange={(event) => updateDuration(minutes, Number(event.target.value))}
          />
        </label>

        <label className="field field-pattern">
          <span>Motif</span>
          <select
            value={selectedPatternId}
            disabled={isRunning}
            onChange={(event) => setSelectedPatternId(event.target.value)}
          >
            {patterns.map((pattern) => (
              <option key={pattern.id} value={pattern.id}>
                {pattern.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="controls-row controls-actions">
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
      </div>

      <label className="sound-toggle">
        <input
          type="checkbox"
          checked={soundEnabled}
          onChange={(event) => setSoundEnabled(event.target.checked)}
        />
        <span>Son de fin</span>
      </label>

      <p className="hint">{disappearanceLabel}</p>
    </aside>
  );
}
