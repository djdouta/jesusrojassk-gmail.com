import React from 'react'
import Template from '../containers/Template'

export default function Home() {
  return (
    <Template>
      <h1>Bienvendio</h1>
      <p>
        En la parte superior podrás encontrar distintas secciones y 
        dentro de las cuales tendrás la problematica de cada una.
      </p>
      <h2>Reglas</h2>
      <ul>
        <li>Todo el código es modificable... salvo el enunciado</li>
        <li>Se pueden agregar librerias siempre y cuando se justifiquen</li>
        <li>Se puede mover archivos, segmentar componentes, etc. Pero siempre se valora la practicidad</li>
      </ul>
      <p>
        Suerte! :)
      </p>
    </Template>
  )
}
