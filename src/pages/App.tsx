import React from "react";
import Forms from "../components/Forms";
import List from "../components/List";
import style from "./App.module.scss";
import Cron from "../components/Cron";

function App() {
  return (
    <div className={style.AppStyle}>
      <Forms />
      <List />
      <Cron />
    </div>
  );
}

export default App;
