import { Route, Routes } from "react-router";
import About from "../pages/About/About";
import Developer from "../pages/Developer/Developer";
import Main from "../pages/Main/Main";
import Translator from "../pages/Translator/Translator";


export default function Routing() {
    return (
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/developer" element={<Developer />}/>
        <Route path="/translator" element={<Translator />}/>
      </Routes>
    );
  }

