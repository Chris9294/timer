import { PatternGrid } from "./components/PatternGrid";
import { TimerControls } from "./components/TimerControls";
import { TimerDisplay } from "./components/TimerDisplay";
import { useClassTimer } from "./hooks/useClassTimer";
import "./styles.css";

export default function App() {
  const timer = useClassTimer();

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Timer visuel de classe</p>
          <h1>Temps calme, activité, atelier...</h1>
        </div>
        <div className="clock-icon" aria-hidden="true">
          ⏰
        </div>
      </header>

      <PatternGrid
        selectedPatternId={timer.selectedPatternId}
        totalItems={timer.totalVisualItems}
        visibleItems={timer.visibleItems}
      />

      <TimerDisplay
        remainingSeconds={timer.remainingSeconds}
        isFinished={timer.isFinished}
        progress={timer.progress}
      />

      <TimerControls
        totalSeconds={timer.totalSeconds}
        setTotalSeconds={timer.setTotalSeconds}
        selectedPatternId={timer.selectedPatternId}
        setSelectedPatternId={timer.setSelectedPatternId}
        isRunning={timer.isRunning}
        soundEnabled={timer.soundEnabled}
        setSoundEnabled={timer.setSoundEnabled}
        disappearanceDelayInSeconds={timer.disappearanceDelayInSeconds}
        onStart={timer.startTimer}
        onPause={timer.pauseTimer}
        onReset={timer.resetTimer}
      />
    </main>
  );
}
