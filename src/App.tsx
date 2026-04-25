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
      />

      <TimerDisplay
        remainingSeconds={timer.remainingSeconds}
        isFinished={timer.isFinished}
      />

     <TimerControls
  isRunning={isRunning}
  totalSeconds={totalSeconds}
  remainingSeconds={remainingSeconds}
  isFinished={totalSeconds > 0 && remainingSeconds === 0}
  onStart={start}
  onPause={pause}
  onReset={reset}
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
