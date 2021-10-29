import React from 'react';
import './App.css';
import Cards from './Cards.js';
import Home from "./Home"
import {Switch, Route, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
      <Route exact path={["/", "/Home"]} >
        <Home/>
      </Route>
      <Route path={"/Cards"} >
        <Cards/>
      </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
