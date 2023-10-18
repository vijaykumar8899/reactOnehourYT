import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisibuilty, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisibuilty && (
        <Alert onClose={() => setAlertVisibility(false)}>Heelo world</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)} children={"My button"} />
    </div>
  );
}

export default App;
