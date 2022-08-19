import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const {
    maxLength,
    title,
    id,
    type,
    value,
    name,
    onChange,
    placeholder,
    width,
    margin,
    ariaLabel,
    ariaDescribedby,
    controlId,
    label,
  } = props;
  return (
    <StInput>
      <StInputLabel controlId={controlId} label={label}>
        <StInputForm
          maxLength={maxLength}
          title={title}
          id={id}
          type={type}
          defaultValue={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          width={width}
          margin={margin}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedby}
        />
      </StInputLabel>
    </StInput>
  );
};

export default Input;

const StInput = styled.div``;

const StInputLabel = styled(FloatingLabel)``;

const StInputForm = styled(Form.Control)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border-radius: 8px;
  font-size: 16px;
  word-wrap: break-word;
  box-sizing: border-box;
`;