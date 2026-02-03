import "./ScenarioBox.css";
import { Button } from "../Button/Button";

export function ScenarioBox({ children, onSelect, isActive }) {
  return (
    <div className={`scenarioBox ${isActive ? "is-active" : ""}`}>
      <Button onClick={onSelect} variant="outline">
        {children}
      </Button>
    </div>
  );
}
