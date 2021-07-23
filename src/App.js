
import Theamone from "./screen/theamone";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>


        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/theamone">
            <Theamone />
          </Route>
          <Route path="/theamtwo">
            <div>

            </div>
          </Route>
          <Route path="/theamthree">
            <div>

            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
