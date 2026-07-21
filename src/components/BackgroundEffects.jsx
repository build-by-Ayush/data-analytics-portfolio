import ConstellationCanvas from './ConstellationCanvas';

export default function BackgroundEffects() {
  return (
    <>
      {/* Layer 0 — constellation network */}
      <ConstellationCanvas />

      {/* Layer 1 — ambient light wash for glass refraction */}
      <div className="ambient-layer">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
      </div>
    </>
  );
}
