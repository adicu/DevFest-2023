import "./App.css";
import Desktop from "./Components/Desktop";
import Taskbar from "./Components/Taskbar";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
