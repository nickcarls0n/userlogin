import React from "react";
import styled from "styled-components";

interface OpaqueContainerProps {
  children: React.ReactNode;
}

export const OpaqueContainer = (props: OpaqueContainerProps) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  max-width: 400px;
  margin: 24px;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

interface InputProps {
  type: string;
  value?: string;
  onChange?: (e: any) => void;
}

export const Input = (props: InputProps) => {
  return (
    <StyledInput
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    />
  );
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

interface ButtonProps {
  buttonText: string;
  type?: "button" | "reset" | "submit";
  onClick?: (e: any) => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton type={props.type} onClick={props.onClick}>
      {props.buttonText}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: fit-content;
  margin-top: 16px;
  border: none;
  font-weight: bold;
  background-color: mediumpurple;
  padding: 12px 24px;
  border-radius: 6px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;

  &:hover {
  }
`;
