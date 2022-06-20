import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, OpaqueContainer } from "../components/components";
import styled from "styled-components";
import axios from "axios";
import { setUserSession } from "../service/AuthServices";

const LoginPage = () => {
  const navigate = useNavigate();
  const loginApi =
    "https://rec3n6s0tj.execute-api.us-east-1.amazonaws.com/prod/login";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Both username and password are required");
      return;
    }
    setErrorMessage("");
    const requestConfig = {
      headers: {
        "x-api-key": "2WkSBQzb49SNARTB1KsbaDRutcvk8At6OpPnMa0b",
      },
    };
    const requestBody = {
      username: username,
      password: password,
    };
    axios
      .post(loginApi, requestBody, requestConfig)
      .then((response) => {
        setUserSession(response.data.user, response.data.token);
        navigate("/loggedinpage");
      })
      .catch((error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("Sorry...The server is down, try back later");
        }
      });
  };
  return (
    <LoginWrapper>
      <form onSubmit={submitHandler}>
        <OpaqueContainer>
          <h1>Please Login</h1>
          <label>User name</label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <p>
            Don't have a user name or password yet?
            <br />
            Click here to <Link to="/createnewuser">create new user.</Link>
          </p>
          <Button type="submit" buttonText="Login" />
        </OpaqueContainer>
      </form>
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

const ErrorMessage = styled.p`
  color: maroon;
`;

export default LoginPage;
