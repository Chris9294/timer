import { useState } from "react";
import { PatternGrid } from "./components/PatternGrid";
import { TimerControls } from "./components/TimerControls";
import { TimerDisplay } from "./components/TimerDisplay";
import { TimerSettingsModal } from "./components/TimerSettingsModal";
import { useClassTimer } from "./hooks/useClassTimer";
import "./styles.css";

export default function App() {
  const timer = useClassTimer();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <main className="app-shell">
      <PatternGrid
        selectedPatternId={timer.selectedPatternId}
        totalItems={timer.totalVisualItems}
        visibleItems={timer.visibleItems}
        isFinished={timer.isFinished}
      />

      <TimerDisplay
        remainingSeconds={timer.remainingSeconds}
        isFinished={timer.isFinished}
      />

      <TimerControls
        isRunning={timer.isRunning}
        totalSeconds={timer.totalSeconds}
        remainingSeconds={timer.remainingSeconds}
        isFinished={timer.isFinished}
        onStart={timer.startTimer}
        onPause={timer.pauseTimer}
        onReset={timer.resetTimer}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      <TimerSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        totalSeconds={timer.totalSeconds}
        setTotalSeconds={timer.setTotalSeconds}
        selectedPatternId={timer.selectedPatternId}
        setSelectedPatternId={timer.setSelectedPatternId}
        isRunning={timer.isRunning}
        soundEnabled={timer.soundEnabled}
        setSoundEnabled={timer.setSoundEnabled}
        disappearanceDelayInSeconds={timer.disappearanceDelayInSeconds}
      />
    </main>
  );
}
