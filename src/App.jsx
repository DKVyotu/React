import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Wikipedia_logo_%28svg%29.svg/600px-Wikipedia_logo_%28svg%29.svg.png"
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hola Mundo</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          El conteo es: {count}
        </button>
      </div>
    </>
  );
}

export default App;
