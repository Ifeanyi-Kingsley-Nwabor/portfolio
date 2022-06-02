import React, { Fragment, useRef, useEffect } from "react";
import M from "materialize-css";
import { NavLink } from "react-router-dom";
import nik from "../images/nik.png";

const Navigation = () => {
  useEffect(() => {
    const collapsibleElem = document.querySelector(".collapsible");
    M.Collapsible.init(collapsibleElem, {
      inDuration: 350,
      outDuration: 350,
      edge: "left"
    });
  });

  const navDropDown = useRef();

  useEffect(() => {
    if (navDropDown.current) {
      const elems = navDropDown.current;

      M.Dropdown.init(elems, {
        hover: true
      });
    }
  }, []);

  useEffect(() => {
    const sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {});
  }, []);

  return (
    <Fragment>
      <div>
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <NavLink to="/projects" className="dropdown-text ">
              All Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="dropdown-text ">
              JavaScript
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="dropdowntext">
              React
            </NavLink>
          </li>
          <li className="divider" tabIndex="-1"></li>
          <li>
            <NavLink to="/projects-angular" className="dropdowntext">
              Angular
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects-vue" className="dropdowntext">
              Vue
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="dropdowntext">
              <i className="material-icons">cloud</i>AWS
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-fixed">
        <nav className="blue lighten-2">
          <div className="nav-wrapper mx-4 container">
            <NavLink to="/" className="brand-logo ">
              <img className="logo nik" src={nik} alt="nik" />
            </NavLink>
            <a href="#!" className="sidenav-trigger" data-target="mobile-nav">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              {/* <!-- Dropdown Trigger --> */}
              <li>
                <a
                  className="dropdown-trigger"
                  ref={navDropDown}
                  href="#!"
                  data-target="dropdown1"
                >
                  Projects
                  <i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav blue darken-2" id="mobile-nav">
        <img className="logo nik" src={nik} alt="nik" />

        <h5 className="white-text ml-2 sidenav-logo">
          Ifeanyi Kingsley Nwabor
        </h5>
        <li>
          <div className="divider grey lighten-4"></div>
        </li>
        <li>
          <NavLink to="/" className="white-text">
            <i className="material-icons white-text ">home</i>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className="white-text">
            <i className="material-icons white-text ">folder</i>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="white-text">
            <i className="material-icons white-text ">person</i>
            About
          </NavLink>
        </li>
        {/* <!-- Dropdown Trigger --> */}
        <li className="no-padding">
          <ul className="collapsible collapsible-accordion ">
            <li className="project-sidenav-collaps">
              <a href="#!" className="collapsible-header white-text ">
                Projects
                <i className="material-icons white-text">arrow_drop_down</i>
              </a>
              <div className="collapsible-body">
                <ul>
                  <li>
                    <NavLink to="/projects" className="collapsible-body">
                      <i className="material-icons">polymer</i>All Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects" className="collapsible-body">
                      <i className="material-icons ">javascript</i>
                      JavaScript
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects" className=" collapsible-body">
                      <i className="material-icons">code</i>React
                    </NavLink>
                  </li>
                  <li className="divider" tabIndex="-1"></li>

                  <li>
                    <NavLink
                      to="/projects-angular"
                      className="collapsible-body"
                    >
                      <i className="material-icons">code</i>Angular
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects-vue" className="collapsible-body">
                      <i className="material-icons">code</i>Vue
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/projects"
                      className="dropdowntext collapsible-body"
                    >
                      <i className="material-icons">cloud</i>AWS
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/contact" className="white-text">
            <i className="material-icons white-text ">mail</i>
            Contact
          </NavLink>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navigation;
