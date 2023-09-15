import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Servicos from "./pages/Servicos/Servicos";
import Fale from "./pages/Fale/Fale";
import Vantagensp from "./pages/Vantagensp.jsx/Vantagensp";



const AppRoutes = () => {
    const location = useLocation()
      return (
    
        <Routes location={location} key={location.pathname}>
            <Route path="/home" element={<Home />} /> 
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/fale" element={<Fale />} />
            <Route path="/vantagens" element={<Vantagensp />} />

        </Routes>
 );
};

export default AppRoutes;