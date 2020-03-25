import React from "react";

export default function Question() {
  return (
    <div className="col-6 card p-4">
      <em>Se necestia generar un contador numérico:</em>
      <ul>
        <li>
          Los botones <em>+1</em> y <em>-1</em> aumentan o disminuyen el
          contador respectivamente.
        </li>
        <li>
          Los botones <em>+1 (1 seg)</em> y <em>-1 (1seg)</em> hacen lo mismo
          pero tardan 1 segundo en aplicar el cambio.
        </li>
        <li>
          Al selecionar <em>Incrementar automaticamente</em> deberá incrementar
          de a 1 cada intervalo de segundos definido por el segundo{" "}
          <em>input</em>.
        </li>
      </ul>
      <em>Preferentemente (puntos extra)</em>
      <ul>
        <li>La modificación del tiempo de espera sea dinámico</li>
        <li>Usar redux</li>
        <li>Usar hooks</li>
      </ul>
    </div>
  );
}
