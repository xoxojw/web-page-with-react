import { styled } from "styled-components";

import FirstSelect from "components/select/FirstSelect";
import SecondSelect from "components/select/SecondSelect";

const Selects = () => {
  return (
    <>
      <StBox>
        <FirstSelect />
        <SecondSelect />
      </StBox>
    </>
  );
};

export default Selects;

const StBox = styled.div`
  display: flex;
  border: 1px solid black;
  width: 500px;
  height: 200px;
  overflow: hidden;
`;
