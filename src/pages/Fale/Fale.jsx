import { useState } from 'react';
import './Contact.css';
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";

export default function Fale() {
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        empresa: '',
        descricao: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!formData.nome.trim()) {
            alert("Por favor, insira um nome válido.");
            return;
        }
    
        const phonePattern = /^[0-9]{10,14}$/; 
        if (!phonePattern.test(formData.telefone)) {
            alert("Por favor, insira um número de telefone válido.");
            return;
        }
    
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(formData.email)) {
            alert("Por favor, insira um email válido.");
            return;
        }
    
        if (!formData.empresa.trim()) {
            alert("Por favor, insira uma empresa válida.");
            return;
        }
    
        if (!formData.descricao.trim()) {
            alert("Por favor, insira uma descrição.");
            return;
        }

        console.log(formData);
    
        setFormData({
            nome: '',
            telefone: '',
            email: '',
            empresa: '',
            descricao: ''
        });
    }
    

    return (
        <>
            <Menu />
            <div className="contact-container">
                <h1>Fale sobre seu projeto</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input 
                            type="text"
                            name="nome"
                            placeholder="Nome" 
                            value={formData.nome}
                            onChange={handleInputChange}
                        />
                        <input 
                            type="phone"
                            name="telefone"
                            placeholder="Telefone" 
                            value={formData.telefone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Email" 
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <input 
                            type="text" 
                            name="empresa"
                            placeholder="Empresa" 
                            value={formData.empresa}
                            onChange={handleInputChange}
                        />
                    </div>
                    <textarea 
                        name="descricao"
                        placeholder="Descreva seu projeto aqui..."
                        value={formData.descricao}
                        onChange={handleInputChange}
                    ></textarea>
                    <button type="submit">Enviar Mensagem</button>
                </form>
            </div>
            <Footer />
        </>
    );
}
