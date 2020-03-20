import React from 'react'
import Template from '../containers/Template'

export default function Test2() {
  return (
    <Template>
      <h1>Contador (Test 2)</h1>
      <div className="row my-2 justify-content-center">
        <div className="col-6 card p-4">
          <em>
            Se necestia generar un contador numérico:
          </em>
          <ul>
            <li>Los botones <em>+1</em> y <em>-1</em> aumentan o disminuyen el contador respectivamente.</li>
            <li>Los botones <em>+1 (1 seg)</em> y <em>-1 (1seg)</em> hacen lo mismo pero tardan 1 segundo en aplicar el cambio.</li>
            <li>
              Al selecionar <em>Incrementar automaticamente</em> deberá incrementar de a 1 
              cada intervalo de segundos definido por el segundo <em>input</em>.
            </li>
          </ul>
          <em>Preferentemente (puntos extra)</em>
          <ul>
            <li>La modificación del tiempo de espera sea dinámico</li>
            <li>Usar redux</li>
            <li>Usar hooks</li>
          </ul>
        </div>
        <div className="col-6">
          <div className="input-group mb-3">
            <div className="input-group-append">
              <button className="btn btn-outline-primary" type="button" id="button-addon2">
                -1 (1 seg)
              </button>
            </div>
            <div className="input-group-append">
              <button className="btn btn-outline-primary" type="button" id="button-addon2">
                -1
              </button>
            </div>
            <input type="number" className="form-control" value={0}/>
            <div className="input-group-append">
              <button className="btn btn-outline-primary" type="button" id="button-addon2">
                +1
              </button>
            </div>
            <div className="input-group-append">
              <button className="btn btn-outline-primary" type="button" id="button-addon2">
                +1 (1 seg)
              </button>
            </div>
          </div> 
          <div className="d-inline-block">
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" id="autoAdd" />
              <label className="custom-control-label" for="autoAdd">Incrementar automáticamente</label>
            </div>
          </div>
          <div className="d-inline-block mx-2">cada</div>
          <div className="d-inline-block col-4">
            <div className="input-group mb-3">
              <input type="number" className="form-control" value={1}/>
              <div className="input-group-append">
                <span className="input-group-text">seg</span>
              </div>
            </div>
          </div>            
        </div>
      </div>
    </Template>
  )
}
