import AppRoutes from './AppRoutes';
import {BrowserRouter} from "react-router-dom"
import GlobalStyle from './GlobalStyles';


const App = () =>{
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
      <AppRoutes/> 
      </BrowserRouter>
    </>
  );
}

export default App;