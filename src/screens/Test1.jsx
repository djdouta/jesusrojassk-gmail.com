import React from 'react'
import Template from '../containers/Template'

export default function Test1() {
  return (
    <Template>
      <h1>Administrador de tareas (Test 1)</h1>
      <div className="row my-2 justify-content-center">
        <div className="col-6 card p-4">
          <em>
            Se necestia generar un administrador de pendientes:
          </em>
          <ul>
            <li>Al precionar el boton <em>Agregar</em> se deberá agregar el contenido del <em>input</em> a la lista.</li>
            <li>Al precionar el boton <em>&times;</em> se deberá quitar el elemento.</li>
            <li>Cada taréa deberá tener un id único</li>
          </ul>
          <em>Preferentemente (puntos extra)</em>
          <ul>
            <li>Usar redux</li>
            <li>Usar hooks</li>
          </ul>
        </div>
        <div className="col-6">
          <div className="input-group mb-3">
            <input type="text" className="form-control" />
            <div className="input-group-append">
              <button className="btn btn-outline-primary" type="button" id="button-addon2">
                Agregar
              </button>
            </div>
          </div> 
          <ul className="list-group">
            <li className="list-group-item">
              1 - Ejemplo 1 
              <button className="float-right btn btn-link text-danger">&times;</button>
            </li>
            <li className="list-group-item">
              3 - Ejemplo 2
              <button className="float-right btn btn-link text-danger">&times;</button>
            </li>
          </ul>
        </div>
      </div>
    </Template>
  )
}
