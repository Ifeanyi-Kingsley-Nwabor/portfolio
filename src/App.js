import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
// import Projects from "./components/Projects";
import ProjectMap from "./components/ProjectMap";
import AngularProjects from "./components/AngularProjects";
import VueProjects from "./components/VueProjects";
import ContactForm from "./components/ContactForm";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

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
        <Route exact path="/projects-angular">
          <AngularProjects />
        </Route>
        <Route exact path="/projects-vue">
          <VueProjects />
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
