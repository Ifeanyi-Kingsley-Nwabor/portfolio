import React, { useState, useEffect } from "react";
import avatar1 from "../images/avatar_1.png";
import avatar2 from "../images/avatar_2.png";
import avatar3 from "../images/avatar_3.png";
import avatar4 from "../images/avatar_4.png";
import avatar5 from "../images/avatar_5.png";
import { Link } from "react-router-dom";
import Quotes from "./Quotes";

const Home = () => {
  const myAvatar = [avatar1, avatar2, avatar3, avatar4, avatar5];
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    setInterval(() => {
      setAvatar(myAvatar[Math.floor(Math.random() * myAvatar.length)]);
    }, 5000);
  }, []);

  return (
    <div className="App">
      <div className="card-image waves-effect waves-block waves-light ">
        {avatar && (
          <img
            className="activator App-avatar"
            src={avatar}
            height="300"
            alt="avatar"
          />
        )}
      </div>
      <div>
        <h2 className="welcome">
          Welcome to my{" "}
          <Link className="App-link" to="/portfolio">
            Portfolio...
          </Link>
        </h2>
      </div>
      <Quotes />
    </div>
  );
};

export default Home;
