import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GameList from "./components/GameList";
import { MainContextPorvider } from "./MainContext";
import GameDetail from "./components/GameDetail";

const App = () => {
  return (
    <div className="App h-screen w-full">
      <MainContextPorvider>
        <Router>
          <Header />
          <Switch>
            <Route component={GameList} path="/" exact />
            <Route component={GameDetail} path="/:id" />
          </Switch>
        </Router>
      </MainContextPorvider>
    </div>
  );
};

export default App;
