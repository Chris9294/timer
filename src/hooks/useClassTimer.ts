import { useEffect, useMemo, useRef, useState } from "react";

const STORAGE_KEY = "timer-classe-settings";
const MAX_VISUAL_ITEMS = 60;

type StoredSettings = {
  totalSeconds?: number;
  patternId?: string;
  soundEnabled?: boolean;
};

function readStoredSettings(): StoredSettings {
  try {
    const rawValue = window.localStorage.getItem(STORAGE_KEY);
    return rawValue ? (JSON.parse(rawValue) as StoredSettings) : {};
  } catch {
    return {};
  }
}

function playEndSound() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return;
  }

  const audioContext = new AudioContextClass();
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(660, audioContext.currentTime);
  oscillator.frequency.setValueAtTime(880, audioContext.currentTime + 0.16);
  oscillator.frequency.setValueAtTime(660, audioContext.currentTime + 0.32);

  gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.18, audioContext.currentTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.55);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.6);

  window.setTimeout(() => {
    void audioContext.close();
  }, 800);
}

export function useClassTimer() {
  const storedSettings = useMemo(readStoredSettings, []);

  const [totalSeconds, setTotalSeconds] = useState(storedSettings.totalSeconds ?? 30);
  const [remainingSeconds, setRemainingSeconds] = useState(storedSettings.totalSeconds ?? 30);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedPatternId, setSelectedPatternId] = useState(storedSettings.patternId ?? "heart");
  const [soundEnabled, setSoundEnabled] = useState(storedSettings.soundEnabled ?? true);
  const endSoundAlreadyPlayedRef = useRef(false);

  const totalVisualItems = useMemo(() => {
    if (totalSeconds <= 0) {
      return 0;
    }

    return Math.min(totalSeconds, MAX_VISUAL_ITEMS);
  }, [totalSeconds]);

  const visibleItems = useMemo(() => {
    if (totalSeconds <= 0 || remainingSeconds <= 0) {
      return 0;
    }

    return Math.ceil((remainingSeconds / totalSeconds) * totalVisualItems);
  }, [remainingSeconds, totalSeconds, totalVisualItems]);

  const disappearanceDelayInSeconds = useMemo(() => {
    if (totalVisualItems <= 0) {
      return 0;
    }

    return totalSeconds / totalVisualItems;
  }, [totalSeconds, totalVisualItems]);

  const isFinished = totalSeconds > 0 && remainingSeconds === 0;
  const progress = totalSeconds > 0 ? 1 - remainingSeconds / totalSeconds : 0;

  useEffect(() => {
    const settings: StoredSettings = {
      totalSeconds,
      patternId: selectedPatternId,
      soundEnabled,
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [selectedPatternId, soundEnabled, totalSeconds]);

  useEffect(() => {
    setRemainingSeconds(totalSeconds);
    endSoundAlreadyPlayedRef.current = false;
  }, [totalSeconds]);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setRemainingSeconds((currentValue) => {
        const nextValue = Math.max(currentValue - 1, 0);

        if (nextValue === 0) {
          setIsRunning(false);
        }

        return nextValue;
      });
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    if (!soundEnabled || !isFinished || endSoundAlreadyPlayedRef.current) {
      return;
    }

    endSoundAlreadyPlayedRef.current = true;
    playEndSound();
  }, [isFinished, soundEnabled]);

  function startTimer() {
    if (totalSeconds <= 0) {
      return;
    }

    endSoundAlreadyPlayedRef.current = false;
    setRemainingSeconds((currentValue) => {
      if (currentValue <= 0 || currentValue === totalSeconds) {
        return totalSeconds;
      }

      return currentValue;
    });
    setIsRunning(true);
  }

  function pauseTimer() {
    setIsRunning(false);
  }

  function resetTimer() {
    endSoundAlreadyPlayedRef.current = false;
    setIsRunning(false);
    setRemainingSeconds(totalSeconds);
  }

  return {
    totalSeconds,
    setTotalSeconds,
    remainingSeconds,
    isRunning,
    selectedPatternId,
    setSelectedPatternId,
    soundEnabled,
    setSoundEnabled,
    totalVisualItems,
    visibleItems,
    disappearanceDelayInSeconds,
    progress,
    isFinished,
    startTimer,
    pauseTimer,
    resetTimer,
  };
}
