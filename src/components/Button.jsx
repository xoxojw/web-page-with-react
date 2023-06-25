import { styled, css } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const Button = () => {
  
  return (
    <>
      <h2>Button</h2>
      <div>
        <ButtonContainer
          bc="#55efc4"
          color="#000"
          size="large"
          outlined={true}
          rightIcon={<FontAwesomeIcon icon={faAngleRight} />}
          onClick={()=>{alert('버튼을 만들어보세요')}}
        >
          Large Primary Button
        </ButtonContainer>
        <ButtonContainer bc="#55efc4" color="#000" size="medium">
          Medium
        </ButtonContainer>
        <ButtonContainer bc="#55efc4" color="#000" size="small">
          Small
        </ButtonContainer>
      </div>
      <div>
        <ButtonContainer
          bc="#fab1a0"
          color="#d63031"
          size="large"
          outlined={true}
          rightIcon={<FontAwesomeIcon icon={faBell} />}
          onClick={()=>{prompt('어렵나요?')}}
        >
          Large Negative Button
        </ButtonContainer>
        <ButtonContainer bc="#fab1a0" color="#d63031" size="medium">
          Medium
        </ButtonContainer>
        <ButtonContainer bc="#fab1a0" color="#d63031" size="small">
          Small
        </ButtonContainer>
      </div>
    </>
  )
}

export default Button;

const ButtonContainer = ({ children, ...rest }) => {
  return (
    <>
      <StButton {...rest}>{children}{rest.rightIcon}</StButton>
    </>
  )

};

const StButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 10px;

  background-color: ${({ bc }) => bc};
  color: ${({ color }) => color};
  font-weight: 0;

  ${({ size }) => {
  switch (size) {
    case "large":
      return css`
        width: 200px;
        height: 50px;`
    case "medium":
      return css`
        width: 120px;
        height: 45px;`
    case "small":
      return css`
        width: 100px;
        height: 35px;`
    }
  }}

  /* width: ${({ size }) => {
    switch (size) {
      case "large":
        return "200px";
      case "medium":
        return "150px";
      case "small":
        return "100px";
    }}
};
  
  height: ${
  ({ size }) => {
    switch (size) {
      case "large":
        return "50px";
      case "medium":
        return "40px";
      case "small":
        return "30px";
    }}
}; */

  ${({ outlined, bc }) => {
  if (outlined) {
    return css`
      border: 3px solid ${bc};
      background-color: #fff;
      font-weight: 700;
      `
    }
  }}

  margin: 5px;
`;