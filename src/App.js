import { useEffect, useState } from "react";
import "./App.css";
import Desktop from "./Components/Desktop";
import Taskbar from "./Components/Taskbar";
import LoadingScreen from "./Components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
          }}
        >
          <Taskbar />
          <Desktop />
        </div>
      )}
    </>
  );
}

export default App;
