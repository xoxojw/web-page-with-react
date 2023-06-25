import { useState, useRef, useEffect } from "react";
import { ButtonContainer } from "components/Button";
import { styled } from "styled-components";

const SecondModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const clickOutside = (e) => {
    // modalRef.current 가 지칭하고 있는 것 -> <StModalBox ref={modalRef}>
    if (modalRef.current === e.target) {
      closeModal();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    }
  }, [])
  
  return (
    <>
      <h2>Second Modal</h2>
      <ButtonContainer
        bc="#fab1a0"
        color="#d63031"
        size="large"
        outlined={true}
        onClick={openModal}
      >
        Open Modal
      </ButtonContainer>

      {isOpen && (
        <StModalBox ref={modalRef}>
          <StModalContents>
            <p>
              바깥 영역을 누르면 닫히는 모달
            </p>
            <StModalButton onClick={closeModal}>✖️</StModalButton>
          </StModalContents>
        </StModalBox>
      )}
    </>
  );
};

export default SecondModal;

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
  border-radius: 10px;
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
