import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const {
    fontSize,
    fontWeight,
    color,
    margin,
    width,
    textAlign,
    children,
    lineHeight,
    overflow,
    onKeyPress,
    onClick,
    text,
  } = props;
  const styled = {
    fontSize,
    fontWeight,
    color,
    margin,
    textAlign,
    lineHeight,
    width,
    text,
  };
  return (
    <TextStyled {...styled} onClick={onClick} onKeyPress={onKeyPress}>
      {children}
    </TextStyled>
  );
};

Text.defaultProps = {
  fontSize: '14px',
  fontWeight: '',
  color: '#8e8e8e',
  textAlign: 'start',
  lineHeight: 'normal',
  width: '',
  onClick: () => {},
  onKeyPress: () => {},
};

const TextStyled = styled.div`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => props.lineHeight};
  width: ${(props) => props.width};
`;

export default Text;
