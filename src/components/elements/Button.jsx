
import styled from 'styled-components';
import Buttonn from 'react-bootstrap/Button';
import { colors } from '../../theme/theme';

const Button = (props) => {
  const {
    onClick,
    type,
    bgcolor,
    text,
    disabled,
    fontcolor,
    width,
    height,
    bgchover,
    fz,
    fw,
    margin,
    display
  } = props;
  return (
    <StBtn
      onClick={onClick}
      type={type}
      bgcolor={bgcolor}
      disabled={disabled}
      fontcolor={fontcolor}
      width={width}
      height={height}
      bgchover={bgchover}
      fz={fz}
      fw={fw}
      margin={margin}
      display={display}
    >
      {text}
    </StBtn>
  );
};

const StBtn = styled(Buttonn)`
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.fontcolor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fz};
  font-weight: ${(props) => props.fw};
  margin: ${(props) => props.margin};
  :hover {
    background-color: ${(props) => props.bgchover};
  }
  
`;

export default Button;

