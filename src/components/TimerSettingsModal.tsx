import { useEffect, useMemo, useState } from "react";
import { patterns } from "../data/patterns";

type TimerSettingsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  totalSeconds: number;
  setTotalSeconds: (value: number) => void;
  selectedPatternId: string;
  setSelectedPatternId: (value: string) => void;
  isRunning: boolean;
  soundEnabled: boolean;
  setSoundEnabled: (value: boolean) => void;
  disappearanceDelayInSeconds: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function TimerSettingsModal({
  isOpen,
  onClose,
  totalSeconds,
  setTotalSeconds,
  selectedPatternId,
  setSelectedPatternId,
  isRunning,
  soundEnabled,
  setSoundEnabled,
  disappearanceDelayInSeconds,
}: TimerSettingsModalProps) {
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

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  function updateDuration(nextMinutes: number, nextSeconds: number) {
    const safeMinutes = clamp(nextMinutes, 0, 180);
    const safeSeconds = clamp(nextSeconds, 0, 59);

    setMinutes(safeMinutes);
    setSeconds(safeSeconds);
    setTotalSeconds(safeMinutes * 60 + safeSeconds);
  }

  return (
    <div className="settings-backdrop" role="presentation" onMouseDown={onClose}>
      <aside
        className="settings-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="settings-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="settings-header">
          <div>
            <p className="eyebrow">Réglages</p>
            <h1 id="settings-title">Configuration du timer</h1>
          </div>

          <button className="close-button" type="button" onClick={onClose} aria-label="Fermer la configuration">
            ×
          </button>
        </div>

        <div className="settings-content">
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

          <label className="sound-toggle">
            <input
              type="checkbox"
              checked={soundEnabled}
              onChange={(event) => setSoundEnabled(event.target.checked)}
            />
            <span>Son de fin</span>
          </label>

          <p className="hint">{disappearanceLabel}</p>

          {isRunning && (
            <p className="hint warning-hint">
              Le temps et le motif sont verrouillés pendant que le timer est en cours.
            </p>
          )}
        </div>

        <div className="settings-footer">
          <button className="button button-settings" type="button" onClick={onClose}>
            Valider
          </button>
        </div>
      </aside>
    </div>
  );
}
