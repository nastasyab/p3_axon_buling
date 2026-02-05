import "./ScenarioPhotoHotspots.css";

export function ScenarioPhotoHotspots({ imageSrc, alt, selected, hotspots }) {
  return (
    <div className="scenarioPhoto" data-driver="scenario-image">
      <img src={imageSrc} alt={alt} className="scenarioPhoto-image" />

      {Object.entries(hotspots).map(([key, pos]) => (
        <span
          key={key}
          className="hotspot"
          data-driver={`hotspot-${key}`}
          style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
        />
      ))}

      {selected ? <div className="scenarioPhoto-selected">Auswahl: {selected}</div> : null}
    </div>
  );
}
