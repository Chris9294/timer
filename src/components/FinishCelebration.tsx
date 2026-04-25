import { AlarmClockSvg } from "./AlarmClockSvg";

const confettiItems = [
  { id: 1, kind: "star", x: "8%", y: "18%", delay: "0s" },
  { id: 2, kind: "dot", x: "19%", y: "52%", delay: "0.18s" },
  { id: 3, kind: "heart", x: "30%", y: "23%", delay: "0.34s" },
  { id: 4, kind: "dot", x: "72%", y: "21%", delay: "0.12s" },
  { id: 5, kind: "star", x: "88%", y: "44%", delay: "0.28s" },
  { id: 6, kind: "heart", x: "78%", y: "68%", delay: "0.42s" },
  { id: 7, kind: "dot", x: "42%", y: "77%", delay: "0.22s" },
  { id: 8, kind: "star", x: "58%", y: "12%", delay: "0.5s" },
];

export function FinishCelebration() {
  return (
    <section className="finish-stage" aria-live="polite" aria-label="Timer terminé">
      <div className="finish-confetti" aria-hidden="true">
        {confettiItems.map((item) => (
          <span
            key={item.id}
            className={`finish-confetti-item finish-confetti-${item.kind}`}
            style={{ left: item.x, top: item.y, animationDelay: item.delay }}
          />
        ))}
      </div>

      <div className="finish-card">
        <div className="finish-glow" aria-hidden="true" />
        <AlarmClockSvg className="finish-alarm-svg" />
        <div className="finish-message">C&apos;est terminé&nbsp;!</div>
      </div>
    </section>
  );
}
