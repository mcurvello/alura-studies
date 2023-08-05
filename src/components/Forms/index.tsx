import React from "react";
import Button from "../Button";
import style from "./Forms.module.scss";

class Forms extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione uma nova tarefa</label>
          <input
            type="text"
            id="tarefa"
            name="tarefa"
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
            step="1"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button text="Adicionar" />
      </form>
    );
  }
}

export default Forms;
