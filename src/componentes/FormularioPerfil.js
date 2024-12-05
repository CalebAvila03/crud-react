import React, { useState, useEffect } from 'react';

const FormularioPerfil = ({ perfilEditar, agregarPerfil, editarPerfil }) => {
  const [nombre, setNombre] = useState('');
  const [cargo, setCargo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [foto, setFoto] = useState('');

  useEffect(() => {
    if (perfilEditar) {
      setNombre(perfilEditar.nombre);
      setCargo(perfilEditar.cargo);
      setDescripcion(perfilEditar.descripcion);
      setFoto(perfilEditar.foto);
    }
  }, [perfilEditar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (perfilEditar) {
      editarPerfil({ ...perfilEditar, nombre, cargo, descripcion, foto });
    } else {
      agregarPerfil({ nombre, cargo, descripcion, foto });
    }
    setNombre('');
    setCargo('');
    setDescripcion('');
    setFoto('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Cargo"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Foto (URL)"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {perfilEditar ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  );
};

export default FormularioPerfil;
