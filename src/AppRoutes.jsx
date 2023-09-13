import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";

const AppRoutes = () => {
    const location = useLocation()
      return (
    
        <Routes location={location} key={location.pathname}>
            <Route path="/home" element={<Home />} /> 
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
 );
};

export default AppRoutes;