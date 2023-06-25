import { styled } from "styled-components";

const FirstSelect = () => {
  // 부모 영역을 벗어나서 펼쳐지는 select

  return (
    <>
      <h3>First Select</h3>
    </>
  );
};

export default FirstSelect;

const DropdownWrapper = styled.div`
  width: 200px;
  border: 1px solid #ccc;
`;

const DropdownHeader = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const DropdownList = styled.div`
  border-top: 1px solid #ccc;
  position: absolute;
  width: 200px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;