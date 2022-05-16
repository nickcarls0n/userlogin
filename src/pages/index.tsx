import React from "react";
import { Link } from "react-router-dom";
import { Input, Button, OpaqueContainer } from "../components/components";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <LoginWrapper>
      <OpaqueContainer>
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
        <Button buttonText="Submit" />

        {/* <Link to="/loggedinpage">Loggedin Page</Link>
        <Link to="/createnewuser">Create new user</Link>
        <Link to="/errorpage">Error page</Link> */}
      </OpaqueContainer>
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

export default LoginPage;
