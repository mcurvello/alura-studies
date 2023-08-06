import React from "react";
import Button from "../Button";
import Watch from "./Watch";
import style from "./Cron.module.scss";
import { ITarefa } from "../../types/tarefa";

interface Props {
  selecionado: ITarefa | undefined;
}

export default function Cron({ selecionado }: Props) {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch />
      </div>
      <Button text="Iniciar" />
    </div>
  );
}
