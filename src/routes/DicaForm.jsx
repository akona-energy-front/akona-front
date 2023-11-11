import React, { useState, useEffect } from 'react';

export default function DicaForm({ addDica, editDica, dicaEditada, closeModal }) {
  const [dica, setDica] = useState({ titulo: '', descricao: '', categoria: '' });

  useEffect(() => {
    if (dicaEditada) setDica(dicaEditada);
  }, [dicaEditada]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dicaEditada) editDica(dica);
    else addDica(dica);
    closeModal();
  };

  const handleChange = (e) => {
    setDica({ ...dica, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="titulo" value={dica.titulo} onChange={handleChange} placeholder="Título" />
      <input name="descricao" value={dica.descricao} onChange={handleChange} placeholder="Descrição" />
      <input name="categoria" value={dica.categoria} onChange={handleChange} placeholder="Categoria" />
      <button type="submit">Salvar</button>
    </form>
  );
}
