import { useState } from "react";
import { ButtonContainer } from "components/Button";
import { styled } from "styled-components";

const FirstModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
   }
  
  return (
    <>
      <h2>First Modal</h2>
      <ButtonContainer
        bc="#55efc4"
        color="#000"
        size="small"
        onClick={openModal}
      >
        Open Modal
      </ButtonContainer>

      {isOpen && (
        <StModalBox>
          <StModalContents>
            <p>
              닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
              <StModalButton onClick={closeModal}>닫기</StModalButton>
              <StModalButton>확인</StModalButton>
            </p>
          </StModalContents>
        </StModalBox>
      )}
    </>
  );
};

export default FirstModal;

const StModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StModalContents = styled.div`
  width: 50%;
  height: 30%;
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
`;

const StModalButton = styled.button`
  width: 100px;
  height: 40px;
  margin: 5px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  background-color: rgb(85, 239, 196);
  color: #000;
`;
