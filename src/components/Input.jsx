import { useState } from "react";
import { styled } from "styled-components";

const Input = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [test, setTest] = useState("");

  // 가격을 백 단위마다 ,로 구분해주는 함수
  const changeEnteredNum = (e) => {
    const value = e.target.value;

    // 1. 문자열 형태로 입력된 값에서 ,를 제거하고 숫자형으로 반환
    const invertToNumber = Number(value.replaceAll(",", ""));

    // 2. 숫자형으로 반환된 값을 toLocaleString()을 사용하여 3자리마다 ,로 구분
    setPrice(invertToNumber.toLocaleString());
  }


  return (
    <>
      <h2>Input</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const removedComma = price.replaceAll(",", "");
        alert(`name: ${name}, price: ${removedComma}`)
      }}>
        <label>이름</label>
        <StInput
          type="text"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
        />
        <label>가격</label>
        <StInput
          type="text"
          value={price}
          onChange={(e)=>{changeEnteredNum(e)}}
        />
        <button>저장</button>
      </form>
    </>
  );
};

export default Input;

const StInput = styled.input`
  border: 1px solid #5c5c5c;
  width: 200px;
  height: 40px;
  outline: none;
  border-radius: 10px;
  padding: 0 12px 0 12px;
`;