import React from "react";
import { Section, Titulo, Colabora } from "./style";
import { Colaborador } from "../Colaborador/index";

export const Time = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <Section style={{ backgroundColor: props.corSegundaria }}>
        <Titulo style={{ borderColor: props.corPrimaria }}>
          {props.nome}{" "}
        </Titulo>
        <Colabora>
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              corDeFundo={props.corPrimaria}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          ))}
        </Colabora>
      </Section>
    )
  );
};
