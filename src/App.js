import Banner from "./components/Banner";
import { Formulario } from "./components/Formulario";
import { useState } from "react";
import { Time } from "./components/Time";
import { Footer } from "./components/Rodape/index";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57c278",
      corSegundaria: "#d9f7e9",
    },
    {
      nome: "Front-end",
      corPrimaria: "#82cffa",
      corSegundaria: "#e8f8ff",
    },
    {
      nome: "Back-end",
      corPrimaria: "#a6d157",
      corSegundaria: "#f0f8e2",
    },
    {
      nome: "DevOps",
      corPrimaria: "##e06b69",
      corSegundaria: "#fde7e8",
    },
    {
      nome: "Ux Design",
      corPrimaria: "##db6ebf",
      corSegundaria: "#fae9f5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#ffba05",
      corSegundaria: "#fff5d9",
    },
    {
      nome: "Inovaçao e Gestão",
      corPrimaria: "#ff8a29",
      corSegundaria: "#ffeedf",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicinado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicinado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSegundaria={time.corSegundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
