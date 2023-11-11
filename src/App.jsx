import styles from "./scss/App.module.scss";
import { Outlet } from "react-router-dom";
import Nav from './components/Menu/Menu'
import Footer from './components/Footer/Footer'

export default function App()  {
  return (
    <div>
        <Nav/>
          <Outlet/>
        <Footer/>

    </div>
  )
}