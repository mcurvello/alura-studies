import React, { useState } from "react";
import Forms from "../components/Forms";
import List from "../components/List";
import style from "./App.module.scss";
import Cron from "../components/Cron";
import { ITarefa } from "../types/tarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }

  return (
    <div className={style.AppStyle}>
      <Forms setTarefas={setTarefas} />
      <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cron selecionado={selecionado} />
    </div>
  );
}

export default App;
