import { useState } from "react";
import { styled } from "styled-components";

const SecondSelect = () => {
  // 부모 영역을 벗어나서 펼쳐지는 select
  // <select><option></option></select>으로 하지 않음 -> 스타일링 변경 불가능

  const options = ["JavaScript", "Java", "React.js", "Node.js", "Spring"]
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }

  return (
    <>
      <h2>Second Select</h2>
      <DropdownWrapper>
        <DropdownHeader onClick={()=>setIsOpen(!isOpen)}>
          <span>{selectedOption || '선택해주세요'}</span><span>▼</span>
        </DropdownHeader>
        {isOpen && (
          <DropdownList>
            {
              options.map(option => (
                <DropdownItem
                  key={option}
                  onClick={()=>{handleOptionClick(option)}}
                >
                  {option}
                </DropdownItem>
              ))
            }
          </DropdownList>
        )}
      </DropdownWrapper>
    </>
  );
};

export default SecondSelect;

const DropdownWrapper = styled.div`
  width: 200px;
  border: 1px solid #ccc;
`;

const DropdownHeader = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const DropdownList = styled.div`
  border-top: 1px solid #ccc;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;