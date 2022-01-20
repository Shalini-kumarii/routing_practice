import React, { Component } from "react";
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useParams } from "react-router";

const Home = (props) => {
  return (
    <h1 style={{ color: "red" }}>Welcome</h1>
  );
}

const Hello = (props) => {
  const { input } = useParams();

  if (isNaN(input)) {
      
    
  
        return <p>The word is:{input}</p>
    }

  else {
    return <p>The Number is:{input}</p>
  }
}

  const Hello1= (props) => {
    const { input,color1,color2 } = useParams();

     return (<p style={{
              color:`${color1}` ,
              backgroundColor:`${color2}`,
            }}>The Word is :{input}</p>);

  }




function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/:input">
      <Hello />
      </Route>
      <Route  exact path="/:input/:color1/:color2">
      <Hello1 />
      </Route>
    </Switch>
    </BrowserRouter>
 
    </div>
  );
}

export default App;

