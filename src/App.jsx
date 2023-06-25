import React from "react";
import GlobalStyle from "GlobalStyle";
import Button from "components/Button";
import Input from "components/Input";
import Modals from "components/Modals";
import Selects from "components/Selects";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <h1>웹 프론트엔드 연습 | Lv. 3 과제</h1>
      <Button />
      <Input />
      <Modals />
      <Selects />
    </>
  )
};

export default App;
