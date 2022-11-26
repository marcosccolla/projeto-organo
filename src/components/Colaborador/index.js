import React from "react";
import { Colabor, Cabecalho, Img, Rodape } from "./style";

export const Colaborador = (props) => {
  return (
    <Colabor>
      <Cabecalho style={{ background: props.corDeFundo }}>
        <Img src={props.imagem} alt={props.nome} />
      </Cabecalho>
      <Rodape>
        <h4>{props.nome} </h4>
        <h5>{props.cargo} </h5>
      </Rodape>
    </Colabor>
  );
};
