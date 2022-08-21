import Form from 'react-bootstrap/Form';
import { css } from 'styled-components';
import styled from 'styled-components';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const Input = (props) => {
  const {
    style,
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
    height,
    variant,
    ref,
    text,
    refs,
    onBlur
  } = props;
  return (
    <StInput>
      <StInputLabel controlId={controlId} label={label}>
        <StInputForm
          style={style}
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
          height={height}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedby}
          variant = {variant}
          ref={ref}
          refs={refs}
          onBlur={onBlur}
        />{text}
      </StInputLabel>
    </StInput>
  );
};

export default Input;

const StInput = styled.form``;

const StInputLabel = styled(FloatingLabel)``;

const StInputForm = styled(Form.Control)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border-radius: 5px;
  font-size: 16px;
  word-wrap: break-word;
  box-sizing: border-box;
  text-overflow: ellipsis;
  border : 1px solid rgba(var(--ca6,219,219,219),1);
  background : rgba(var(--b3f,250,250,250),1);
  margin: 5px 0;
  ${(props) => {
    return (
      props.variant === `Register` &&
      css`
        width:220px;

        
      `
    )
  }}

`;