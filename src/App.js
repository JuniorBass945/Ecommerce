import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import About from "./Pages/About";
import Others from "./Pages/Others";
import Error from "./Pages/Error";
import Cart from "./Pages/Cart";
import Navegacion from "./Components/Navegacion";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="About" element={<About />} />
          <Route path="Others" element={<Others />} />
          <Route path="*" element={<Error />} />
          <Route path="Cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
