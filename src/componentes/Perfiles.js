import React from 'react'

const titulo = {color:'blue'}
const Perfiles = ({ perfil }) => {
  return (
    
    <div className="container-sm">
        <div className="row mt-5">
            <div className="col-3">
                <div class="d-flex justify-content-end">
                    <img class="rounded" src={perfil.foto} alt="" style={{ width: '130px', height: '130px'}} />
                </div>
            </div>
            <div className="col-9 mb-2">
                <h1 style={titulo} class="fw-semibold">{perfil.nombre}</h1>
                <h3>{perfil.cargo}</h3>
                <p>{perfil.descripcion}</p>
            </div>
        </div>
    </div>   
  )
}

export default Perfiles