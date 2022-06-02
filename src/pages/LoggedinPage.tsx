import React from "react";
import { Button, OpaqueContainer } from "../components/components";
import { useNavigate } from "react-router-dom";
import { resetUserSession, getUser } from "../service/AuthServices";
import styled from "styled-components";

const LoggedinPage = () => {
  let navigate = useNavigate();

  const logoutHandler = () => {
    resetUserSession();
    navigate("/");
  };

  const userName = getUser().name;

  return (
    <LoggedinUserWrapper>
      <OpaqueContainer>
        <h1>Hello {userName}, welcome to the registered user section! </h1>
        <p>
          This would be a great place for content that only logged-in users can
          access.
        </p>
        <Button buttonText="Logout" onClick={logoutHandler} />
      </OpaqueContainer>
    </LoggedinUserWrapper>
  );
};

const LoggedinUserWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("images/loggedin-background.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LoggedinPage;
