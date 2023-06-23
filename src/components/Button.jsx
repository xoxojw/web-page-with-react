import { styled } from "styled-components";

const Button = () => {
  return (
    <ThemeBox>
      <h1>Button</h1>
      <ElementsBox>
        <PrimaryButton
          width="15vh" height="5vh" fontWeight="700"
          onClick={()=>{alert("버튼을 만들어보세요")}}>
          Large Primary Button
        </PrimaryButton>
        <PrimaryButton width="12vh" height="4vh">
          Medium
        </PrimaryButton>
        <PrimaryButton width="9vh" height="3.5vh">
          Small
        </PrimaryButton>
      </ElementsBox>
      <ElementsBox>
        <NegativeButton
          width="15vh" height="5vh" fontWeight="700"
          onClick={()=>{prompt("어렵나요?")}}>
          Large Negative Button
        </NegativeButton>
        <NegativeButton width="12vh" height="4vh">
          Medium
        </NegativeButton>
        <NegativeButton width="9vh" height="3.5vh">
          Small
        </NegativeButton>
      </ElementsBox>
    </ThemeBox>
  );
};

export default Button;

const ThemeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ElementsBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1vh;
`;

const PrimaryButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-weight: ${(props) => props.fontWeight};
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: #55efc4;
  cursor: pointer;
`;

const NegativeButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-weight: ${(props) => props.fontWeight};
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: #fab1a0;
  color: #d63031;
  cursor: pointer;
`;