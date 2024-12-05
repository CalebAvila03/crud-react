import React, { useState } from 'react';
import Perfiles from './Perfiles';
import FormularioPerfil from './FormularioPerfil';

const ListaDePerfiles = () => {
  const [listaDePerfiles, setListaDePerfiles] = useState([
    {
      foto: require('../img/a11c94ba1ad5d066cf4569e666b001fd.jpg'),
      nombre: 'Gisele Smith',
      cargo: 'Web Developer & UI/UX Designer',
      descripcion: 'Destreza en React, Bootstrap, Diseño de Mockups y Prototipos Web',
    },
    {
      foto: require('../img/a152ae5400dc9f126511af08a881ae77.jpg'),
      nombre: 'Emily Johnson',
      cargo: 'Backend Developer',
      descripcion: 'Experta en Node.js, Express y bases de datos relacionales',
    },
    {
      foto: require('../img/b92e03cc31559f9fd112273c98c0fc99.jpg'),
      nombre: 'Mia Wilson',
      cargo: 'Data Scientist',
      descripcion: 'Especializada en análisis de datos y machine learning con Python',
    },
    {
      foto: require('../img/c266ada468b995a60155cf2642e88dfd.jpg'),
      nombre: 'Amelia Taylor',
      cargo: 'Mobile Developer',
      descripcion: 'Experiencia en desarrollo de aplicaciones móviles con Flutter y React Native',
    },
  ]);
  const [perfilEditar, setPerfilEditar] = useState(null);

  const agregarPerfil = (nuevoPerfil) => {
    setListaDePerfiles([...listaDePerfiles, nuevoPerfil]);
  };

  const eliminarPerfil = (index) => {
    const nuevaLista = listaDePerfiles.filter((_, i) => i !== index);
    setListaDePerfiles(nuevaLista);
  };

  const editarPerfil = (perfilActualizado) => {
    const nuevaLista = listaDePerfiles.map((perfil) =>
      perfil.nombre === perfilActualizado.nombre ? perfilActualizado : perfil
    );
    setListaDePerfiles(nuevaLista);
    setPerfilEditar(null);
  };

  return (
    <div className="container">
      <FormularioPerfil
        perfilEditar={perfilEditar}
        agregarPerfil={agregarPerfil}
        editarPerfil={editarPerfil}
      />
      <div>
        {listaDePerfiles.map((perfil, index) => (
          <div key={index} className="card mb-3">
            <Perfiles perfil={perfil} />
            <div className="card-body">
              <button
                className="btn btn-warning"
                onClick={() => setPerfilEditar(perfil)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger ms-2"
                onClick={() => eliminarPerfil(index)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaDePerfiles;