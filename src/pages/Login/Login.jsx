import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import avatar from "../../assets/avatar.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Definindo credenciais de demonstração
    sessionStorage.setItem("username", "usuario123");
    sessionStorage.setItem("password", "senha123");

    const savedUser = sessionStorage.getItem("username");
    const savedPass = sessionStorage.getItem("password");

    if (savedUser && savedPass) {
      setUsername(savedUser);
      setPassword(savedPass);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificação usando sessionStorage
    const storedUsername = sessionStorage.getItem("username");
    const storedPassword = sessionStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      alert("Bem-vindo!");

      // Exemplo de uso de localStorage e Math
      const userId = Math.floor(Math.random() * 1000000); // Gerando um ID de usuário aleatório
      localStorage.setItem("userData", JSON.stringify({ userId, username }));

      // Redireciona para a página /home
      navigate("/");
    } else {
      alert("Esse usuário não existe.");
    }
  };

  return (
    <>
      <Menu />
      <div className="container">
        <div className="loginBox">
        <div className="user-avatar">
          <img src={avatar} alt="Imagem do usuário" />
        </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            <button type="submit" className="button">
              Entrar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
