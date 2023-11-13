import styles from "./scss/App.module.scss";
import { Outlet } from "react-router-dom";
import Nav from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import GlobalStyle from "../GlobalStyles";

export default function App()  {
  return (
    <div>
      <GlobalStyle/>
        <Nav/>
          <Outlet/>
        <Footer/>
    </div>
  )
}