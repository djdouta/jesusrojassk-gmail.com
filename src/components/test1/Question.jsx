import React from "react";

export default function Question() {
  return (
    <div className="col-6 card p-4">
      <em>Se necestia generar un administrador de pendientes:</em>
      <ul>
        <li>
          Al precionar el boton <em>Agregar</em> se deberá agregar el contenido
          del <em>input</em> a la lista.
        </li>
        <li>
          Al precionar el boton <em>&times;</em> se deberá quitar el elemento.
        </li>
        <li>Cada taréa deberá tener un id único</li>
      </ul>
      <em>Preferentemente (puntos extra)</em>
      <ul>
        <li>Usar redux</li>
        <li>Usar hooks</li>
      </ul>
    </div>
  );
}
