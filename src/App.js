import React from "react";
import NavBar from "./components/Nav";
import styled from "styled-components";
import Movies from "./components/Movie";
import MovieDetail from "./components/MovieDetail";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Wrapper>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:title" component={MovieDetail} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

const Wrapper = styled.div`
  background: rgb(239, 241, 243);
  overflow: scroll;
  height: 100%;
`;

export default App;
