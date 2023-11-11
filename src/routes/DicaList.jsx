import React, { useState, useEffect } from 'react';
import DicaForm from './DicaForm';
import Modal from './Modal';

export default function Dica() {
  const [dicas, setDicas] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dicaEditada, setDicaEditada] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/dicas')
      .then(response => response.json())
      .then(data => setDicas(data));
  }, [dicas]);

  const addDica = (novaDica) => {
    fetch('http://localhost:3001/dicas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novaDica)
    });
  };

  const editDica = (dicaAtualizada) => {
    fetch(`http://localhost:3001/dicas/${dicaAtualizada.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dicaAtualizada)
    });
  };

  const deleteDica = (id) => {
    fetch(`http://localhost:3001/dicas/${id}`, { method: 'DELETE' })
      .then(() => {
        setDicas(dicas.filter(dica => dica.id !== id));
      })
      .catch(error => console.error('Erro ao deletar a dica:', error));
  };
  

  const openModal = (dica = null) => {
    setDicaEditada(dica);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setDicaEditada(null);
  };

  return (
    <div>
      <button onClick={() => openModal()}>Adicionar Nova Dica</button>
      {modalIsOpen && (
        <Modal onClose={closeModal}>
          <DicaForm 
            addDica={addDica} 
            editDica={editDica} 
            dicaEditada={dicaEditada}
            closeModal={closeModal} 
          />
        </Modal>
      )}
      <ul>
        {dicas.map(dica => (
          <li key={dica.id}>
            <h2>{dica.titulo}</h2>
            <p>{dica.descricao}</p>
            <button onClick={() => openModal(dica)}>Editar</button>
            <button onClick={() => deleteDica(dica.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}