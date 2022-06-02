import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button, OpaqueContainer } from "../components/components";
import axios from "axios";

const CreateNewUser = () => {
  const loginApi =
    "https://rec3n6s0tj.execute-api.us-east-1.amazonaws.com/prod/register";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      setMessage("All fields are required!");
      return;
    }
    const requestConfig = {
      headers: {
        "x-api-key": "2WkSBQzb49SNARTB1KsbaDRutcvk8At6OpPnMa0b",
      },
    };
    const requestBody = {
      username: username,
      email: email,
      name: name,
      password: password,
    };
    axios
      .post(loginApi, requestBody, requestConfig)
      .then((response) => {
        setMessage("Success! Your username and pass word have been created");
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setMessage(error.response.data.message);
        } else {
          setMessage(
            "Sorry... The backend server is unavailable, please try again later"
          );
        }
      });
  };

  return (
    <>
      <NewUserWrapper>
        <form onSubmit={submitHandler}>
          <OpaqueContainer>
            <h1>Create a new user name and password.</h1>
            <label>Your name</label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Enter your email</label>
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Enter your username</label>
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
            <Button type="submit" buttonText="Sign Up" />
            {message && <ErrorMessage>{message}</ErrorMessage>}
          </OpaqueContainer>
        </form>
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

const ErrorMessage = styled.p`
  color: maroon;
`;

export default CreateNewUser;
