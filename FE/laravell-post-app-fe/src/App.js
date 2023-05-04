import './App.css';

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import Edit from "./Edit";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route path="/edit">
                    <Edit />
                </Route>

            </Switch>
        </BrowserRouter>
    );
}



export default App;
