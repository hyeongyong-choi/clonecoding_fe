import React from 'react';

const Button = () => {
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
    margin,
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
      margin={margin}
    >
      {text}
    </StBtn>
  );
};

const StBtn = styled(Button)`
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.fontcolor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fz};
  margin: ${(props) => props.margin};
  :hover {
    background-color: ${(props) => props.bgchover};
  }
  :disabled {
    background-color: ${colors.disabled};
    color: ${colors.disabledText};
  }
`;

export default Button;