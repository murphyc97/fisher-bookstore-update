import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/home";
import Books from "./books/books";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/books" component={Books} />
        </Switch>
    );
}