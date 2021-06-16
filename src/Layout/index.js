import React, { useState, useEffect } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Study from "./Study";
import Home from "./Home";
import CreateDeck from "./CreateDeck"
import ViewDeck from "./ViewDeck"
import { Route, Switch, Link } from "react-router-dom";


function Layout() {
 

  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path='/decks/:deckId/study'>
            <Study />
          </Route>
          <Route path='/decks/:deckId'>
            <ViewDeck />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
