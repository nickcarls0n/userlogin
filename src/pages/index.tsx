import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/input";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <LoginWrapper>
      <FormWrapper>
        <h1>Please Login</h1>
        <label>User name or email</label>
        <Input type="text" />
        <label>Password</label>
        <Input type="password" />
        <p>
          Don't have a user name or password yet?
          <br />
          Click here to <Link to="/createnewuser">create new user.</Link>
        </p>
        <StyledButton>Submit</StyledButton>

        {/* <Link to="/loggedinpage">Loggedin Page</Link>
        <Link to="/createnewuser">Create new user</Link>
        <Link to="/errorpage">Error page</Link> */}
      </FormWrapper>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("images/highway-one.jpg");
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.div`
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledButton = styled.button`
  margin-top: 16px;
  border: none;
  font-weight: bold;
  background-color: mediumpurple;
  padding: 12px;
  border-radius: 6px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;

  &:hover {
  }
`;

export default LoginPage;
