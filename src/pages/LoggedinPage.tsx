import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createTodo } from "../graphql/mutations";
import { listTodos } from "../graphql/queries";

import awsExports from "../aws-exports";
Amplify.configure(awsExports);

const initialState = { name: "", description: "" };

const LoggedinPage = () => {
  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  function setInput(key: any, value: any) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchTodos() {
    try {
      // const todoData = await API.graphql(graphqlOperation(listTodos));
      const todoData: any = await API.graphql(graphqlOperation(listTodos));
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createTodo, { input: todo }));
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }
  return (
    <>
      <div>
        <h1>Hello */addUserName/*, Here are your Todos</h1>
        <h2>Todos list</h2>
        <input
          onChange={(event) => setInput("name", event.target.value)}
          value={formState.name}
          placeholder="Name"
        />
        <input
          onChange={(event) => setInput("description", event.target.value)}
          value={formState.description}
          placeholder="Description"
        />
        <button onClick={addTodo}>Create Todo</button>
        {todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index}>
            <p>{todo.name}</p>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default LoggedinPage;
