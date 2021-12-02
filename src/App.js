import React from "react";
import Data from "./components/Data";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Unfinished from "./components/Unfinished";
import Finished from "./components/Finished";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Button />
        <Switch>
          <Route path="/" exact component={Data} />
          <Route path="/unchecked" component={Unfinished} />
          <Route path="/checked" component={Finished} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
