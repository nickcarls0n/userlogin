import React from "react";
import styled from "styled-components";
import { Input, Button, OpaqueContainer } from "../components/components";

const CreateNewUser = () => {
  return (
    <>
      <NewUserWrapper>
        <OpaqueContainer>
          <h1>Create a new user name and password.</h1>
          <label>Enter your email</label>
          <Input type="text" />
          <label>Enter your username</label>
          <Input type="text" />
          <label>Password</label>
          <Input type="password" />
          <label>Confirm password</label>
          <Input type="password" />
          <Button buttonText="Sign Up" />
        </OpaqueContainer>
      </NewUserWrapper>
    </>
  );
};

const NewUserWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("images/trees-background.jpg");
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CreateNewUser;
