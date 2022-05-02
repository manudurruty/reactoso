import { useState, React } from "react";
import Componente1 from "./components/Componente1.jsx";
import Componente2 from "./components/Component2.jsx";

function App() {
  let [nombre] = useState({
    nombre1: "Benjamin",
    apellido: "Bascary",
    numero1: 1,
    numero2: 2,
  });

  return (
    <div className="App">
      <Componente1 {...nombre} />
      <Componente2 {...nombre} />
    </div>
  );
}

export default App;
