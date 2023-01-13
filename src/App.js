/* src/App.js */
import React, { useEffect, useState } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createTodo } from "./graphql/mutations";
// import { getCustomerWithOrdersByStatusDate } from "./graphql/customMutations";
import { listTodos } from "./graphql/queries";
import {
  withAuthenticator,
  Authenticator,
  Button,
  Heading,
  Text,
  TextField,
  View,
  ThemeProvider,
  Image
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { 
  LandingPage,
  NavBarAlt,
  studioTheme
} from './ui-components';
import awsExports from "./aws-exports";
import logo from "./logo.svg";

Amplify.configure(awsExports);
const initialState = { name: "", description: "" };
//todo test if you can import custom mutations and queries and execute those. Then print value in console
const App = ({ signOut, user }) => {
  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);
  const [showProfileCard, setShowProfileCard] = useState("none");

  useEffect(() => {
    fetchTodos();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  useEffect(() =>{
    return
  }, [showProfileCard])
  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos));
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log("error fetching todos "+ err);
      console.log(err[0]);
    }
    // try{
    //   console.log((graphqlOperation(getCustomer, {id: "jennifer_thomas"})))
    //   const data = await API.graphql(graphqlOperation(getCustomerWithOrdersByStatusDate, {id: "jennifer_thomas"}))
    //   console.log(data);
    // }catch(err){
    //   console.log(err);
    // }
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

  function landingPageContent(signOut) {
    const content = <View style={styles.container}>
    <Heading level={1}>Hello {user.username}</Heading>
          <Button style={styles.button} onClick={signOut}>
            Sign out
          </Button>
          <Heading level={2}>Amplify Todos</Heading>
          <TextField
            placeholder="Name"
            onChange={(event) => setInput("name", event.target.value)}
            style={styles.input}
            defaultValue={formState.name}
          />
          <TextField
            placeholder="Description"
            onChange={(event) => setInput("description", event.target.value)}
            style={styles.input}
            defaultValue={formState.description}
          />
          <Button style={styles.button} onClick={addTodo}>
            Create Todo
          </Button>
          {todos.map((todo, index) => (
            <View key={todo.id ? todo.id : index} style={styles.todo}>
              <Text style={styles.todoName}>{todo.name}</Text>
              <Text style={styles.todoDescription}>{todo.description}</Text>
            </View>
          ))}
        </View>
    return content
  }

  function onProfileIconClick () {
    if (showProfileCard == "none"){
      setShowProfileCard("flex");
    }else if (showProfileCard == "flex"){
      setShowProfileCard("none");
    }
  }

  function ProfileIcon () {
    return (
      <Image alt="Home E Logo" src={logo} onClick={onProfileIconClick} />
    )
  }

  return (
    <Authenticator variation="modal" loginMechanisms={['email']}>
      {({ signOut, user }) => (
        //landingPage.NavBarAlt
        
          
            <ThemeProvider theme={studioTheme}>
              <View>
                <NavBarAlt  overrides={{"DashProfileAndCardAlt": {showProfileCard: showProfileCard, profileIconContainer: ProfileIcon() }}}  width={"100vw"}/>
                <Button style={styles.button} onClick={signOut}>
                  Sign out
                </Button>
              </View>
              {/* <LandingPage pageContents={landingPageContent(signOut)} /> */}
            </ThemeProvider>
          
        
      )}
    </Authenticator>
  );
};

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  todo: { marginBottom: 15 },
  input: {
    // border: "none",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { 
    fontSize: 20, 
    fontWeight: "bold" 
  },
  todoDescription: { 
    marginBottom: 0 , marginLeft: '1em'
  },
  button: {
    // color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};

export default withAuthenticator(App);
