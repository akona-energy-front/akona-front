import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//ROTAS
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './routes/Login.jsx';
import Sobre from './routes/Sobre.jsx';
import Vantagensp from './routes/Vantagensp.jsx';
import Servicos from './routes/Servicos.jsx';
import Fale from './routes/Fale.jsx';
import Home from './routes/Home.jsx';

const routes = createBrowserRouter([
  { path: "/" , element: <App/>,
   children: [
      {path: "/", element: <Home/>},
      {path:"/vantagens", element: <Vantagensp />},
      {path: "/login", element: <Login/>},
      {path: "/sobre", element: <Sobre/>},
      {path: "/servicos", element: <Servicos/>},
      {path: "/fale", element: <Fale/>}

   ]
  }
]);

//ROTAS


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={routes} />
  </React.StrictMode>,
)