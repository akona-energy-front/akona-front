import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Servicos from "./pages/Servicos/Servicos";
import Fale from "./pages/Fale/Fale";
import Vantagensp from "./pages/Vantagensp.jsx/Vantagensp";
import Login from "./pages/Login/Login";



const AppRoutes = () => {
    const location = useLocation()
      return (
    
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} /> 
            <Route path="/vantagens" element={<Vantagensp />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/fale" element={<Fale />} />
            <Route path="/login" element={<Login/>} />
            
        </Routes>
 );
};

export default AppRoutes;