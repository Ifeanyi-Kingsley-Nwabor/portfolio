import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";
import About from "./components/About";
// import Projects from "./components/Projects";
import ProjectMap from "./components/ProjectMap";
import ContactForm from "./components/ContactForm";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        {/* <Route path="/projects">
          <Projects />
        </Route> */}
        <Route path="/projects">
          <ProjectMap />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/contact-form">
          <ContactForm />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
