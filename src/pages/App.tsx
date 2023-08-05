import React, { useState } from "react";
import Forms from "../components/Forms";
import List from "../components/List";
import style from "./App.module.scss";
import Cron from "../components/Cron";
import { ITarefa } from "../types/tarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className={style.AppStyle}>
      <Forms setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <Cron />
    </div>
  );
}

export default App;
