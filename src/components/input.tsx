import React from "react";
import styled from "styled-components";

interface InputProps {
  type: string;
}

const Input = (props: InputProps) => {
  return <StyledInput type={props.type} />;
};

const StyledInput = styled.input`
  min-width: 250px;
  margin: 8px 0 12px 0;
  padding: 8px;
  border: none;
  border-radius: 6px;

  &:focus-visible {
    outline: none !important;
  }
`;

export default Input;
