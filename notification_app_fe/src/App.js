import Log from "./utils/log";

function App() {

  const handleSuccess = () => {
    Log("frontend", "info", "component", "User clicked success");
  };

  const handleError = () => {
    Log("frontend", "error", "component", "Something went wrong");
  };

  const handleApi = () => {
    Log("frontend", "info", "api", "API called");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend Logging Test</h1>

      <button onClick={handleSuccess}>Success Log</button>
      <br /><br />

      <button onClick={handleError}>Error Log</button>
      <br /><br />

      <button onClick={handleApi}>API Log</button>
    </div>
  );
}

export default App;