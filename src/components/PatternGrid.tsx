import { patternColors } from "../data/patternColors";
import { getPatternById } from "../data/patterns";
import { FinishCelebration } from "./FinishCelebration";

type PatternGridProps = {
  selectedPatternId: string;
  totalItems: number;
  visibleItems: number;
  isFinished: boolean;
};

export function PatternGrid({ selectedPatternId, totalItems, visibleItems, isFinished }: PatternGridProps) {
  const selectedPattern = getPatternById(selectedPatternId);
  const PatternComponent = selectedPattern.Component;

  if (isFinished) {
    return <FinishCelebration />;
  }

  return (
    <section className="pattern-grid" aria-label="Motifs restants du timer">
      {Array.from({ length: totalItems }).map((_, index) => {
        const isVisible = index < visibleItems;
        const color = patternColors[index % patternColors.length];

        return (
          <div
            key={index}
            className={`pattern-item ${isVisible ? "pattern-item-visible" : "pattern-item-hidden"}`}
            aria-hidden={!isVisible}
          >
            <PatternComponent color={color} size={64} />
          </div>
        );
      })}
    </section>
  );
}
