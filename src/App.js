import "./App.css";
import Login from "./Componates/Login";
import Sign_up from "./Componates/Sign_up";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/sigup" element={<Sign_up/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
