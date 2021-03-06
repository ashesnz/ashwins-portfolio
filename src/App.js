import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Resumes from "./pages/Resumes";
import PortfolioPage from "./pages/PortfolioPage";
import Contact from "./pages/Contact";
import Fib from './pages/Fib';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resumes} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/fib" component={Fib} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;