import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import About from "./components/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
