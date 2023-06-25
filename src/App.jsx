import React from "react";
import GlobalStyle from "GlobalStyle";
import Modal from "components/Modal";
import Button from "components/Button";
import Input from "components/Input";
import Select from "components/Select";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <h1>웹 프론트엔드 연습 | Lv. 3 과제</h1>
      <Button />
      <Input />
      <Modal />
      <Select />
    </>
  )
};

export default App;
