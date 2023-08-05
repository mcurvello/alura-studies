import React from "react";
import Button from "../Button";
import style from "./Forms.module.scss";
import { ITarefa } from "../../types/tarefa";
import { v4 as uuidv4 } from "uuid";

class Forms extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
  state = { tarefa: "", tempo: "00:00" };
  adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        tarefa: this.state.tarefa,
        tempo: this.state.tempo,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    this.setState({ tarefa: "", tempo: "00:00" });
  }

  render() {
    return (
      <form
        className={style.novaTarefa}
        onSubmit={this.adicionarTarefa.bind(this)}
      >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione uma nova tarefa</label>
          <input
            type="text"
            id="tarefa"
            name="tarefa"
            value={this.state.tarefa}
            onChange={(e) => this.setState({ tarefa: e.target.value })}
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            id="tempo"
            name="tempo"
            value={this.state.tempo}
            onChange={(e) => this.setState({ tempo: e.target.value })}
            step="1"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button text="Adicionar" type="submit" />
      </form>
    );
  }
}

export default Forms;
