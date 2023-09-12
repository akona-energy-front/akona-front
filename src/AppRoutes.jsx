import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";

const AppRoutes = () => {
    const location = useLocation()
      return (
    
        <Routes location={location} key={location.pathname}>
            <Route path="/home" element={<Home />} /> 
        </Routes>
 );
};

export default AppRoutes;