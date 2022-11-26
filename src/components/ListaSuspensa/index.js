import React from "react";
import { Select, Lista } from "./style";

export const ListaSuspensa = (props) => {
  return (
    <Lista>
      <label>{props.label} </label>

      <Select
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.required}
        valor={props.valor}
      >
        {props.itens.map((item) => (
          <option key={item}>{item} </option>
        ))}
      </Select>
    </Lista>
  );
};
