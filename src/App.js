import React, { useState } from "react";
import "./styles/app.css";
import { AddUser, Records } from "./pages";
import { AppProducer } from "./context/AppContext";
import { Button } from "./components";

function App() {
  const [showAddUser, setUser] = useState(false);
  // will add route for both the pages instead of toggling
  return (
    <AppProducer>
      <div className="App">
        {showAddUser ? <AddUser /> : <Records />}
        <Button
          label={showAddUser ? "Show Added Records" : "Add More Records"}
          onClick={() => setUser(!showAddUser)}
          disable={false}
        />
      </div>
    </AppProducer>
  );
}

export default App;
