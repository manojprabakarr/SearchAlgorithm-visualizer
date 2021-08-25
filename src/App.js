import React from "react";
import "./App.css";
import Linearsearch from "./components/Linearsearch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidenav";
import Binarysearch from "./components/Binarysearch";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Sidebar />
        </div>
        <Switch>
          <div className="content">
            <Route exact path="/" component={Linearsearch} />

            <Route exact path="/binary" component={Binarysearch} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
