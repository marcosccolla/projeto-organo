import React from "react";
import { Button } from "./styles";

export const Botao = (props) => {
  return <Button type={props.type}>{props.children} </Button>;
};
