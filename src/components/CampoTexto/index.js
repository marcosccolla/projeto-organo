import React from "react";
import { Input, Label } from "./styles";

export const CampoTexto = (props) => {
  const placeholderMordificada = `${props.placeholder}...`;

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };
  return (
    <div>
      <Label>{props.label} </Label>
      <Input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderMordificada}
      />
    </div>
  );
};
