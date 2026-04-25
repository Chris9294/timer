import { patternColors } from "../data/patternColors";
import { getPatternById } from "../data/patterns";

type PatternGridProps = {
  selectedPatternId: string;
  totalItems: number;
  visibleItems: number;
};

export function PatternGrid({ selectedPatternId, totalItems, visibleItems }: PatternGridProps) {
  const selectedPattern = getPatternById(selectedPatternId);
  const PatternComponent = selectedPattern.Component;

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
