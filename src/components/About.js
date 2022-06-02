import React, { useRef, useEffect } from "react";

// import me from "../images/me.jpg";
import me5 from "../images/me5.png";
// import px from "../images/px.jpg";

// import Hennessy from "../music/Hennessy";
// import Shuperu from "../music/Shuperu";
import M from "materialize-css";

const About = () => {
  const mySuperModal = useRef();
  useEffect(() => {
    if (mySuperModal.current) {
      M.Modal.init(mySuperModal.current);
    }
  }, []);
  return (
    <div className=" about-container responsive">
      <div className="row" id="about-me">
        <div className="col s12 m8 offset-m2">
          <div className="     aboutcard">
            <div className="name-image ">
              <img
                src={me5}
                className="avatar nik responsive-img"
                alt="avatar_1"
              />
            </div>
            <div className=" about-div">
              <h5 className="nik">Ifeanyi Kingsley Nwabor</h5>
              <hr></hr>
              <p className="about">
                I am an ambitious result-oriented Junior Web Developer / Junior
                (AWS) Solution Architect Associate/ Geoscientist (MSc.). I am
                originally from Nigeria West Africa, moved to Germany September
                2016 for my master studies. After graduating as a Marine
                Geoscientist from the University of Bremen in September 2020, I
                decided to work on developing my IT skills in every way possible
                and every descission has brought me to this moment. My Tech
                skills includes but not limited to HTML, CSS, Javascript, React,
                Node JS, Express and SQL/NOSQL. I am also very enthusiastic
                about cloud computing as this plays a huge role in modern day
                technology.
              </p>
              <p className="about">
                I have keen eyes for details and a mindset of "Think outside the
                box" as need arises. I love working in teams as well as
                independently in a multicultural settings and possess good
                communication skills. I love to learn new skills to further
                develop myself professionally as well as personally.
              </p>
            </div>

            <div className="hobby-1">
              <h4>Hobbies</h4>
              <hr></hr>
              <div className="hobby-content">
                <div className="row">
                  <p className="hobby-text hobby-first-text col s10 m5 l4">
                    <b>
                      As an individual with a good sense of creativity, I pretty
                      much like everything good, such as seeing my daughter
                      smile, listening to good music while trying to debug my
                      code and fix some errors.
                    </b>
                  </p>
                  <div className="col s10 m5 l4"></div>
                  {/* <img
                    src={px}
                    className="hobby col s10 m5 l4 hoverable responsive-img"
                    alt="avatar_1"
                  /> */}
                </div>
              </div>
            </div>

            <div className="hobby-1" id="my-photo">
              <div className="row">
                {/* <img
                  src={me}
                  className="col s10 m5 l4 img responsive-img"
                  alt="avatar_2"
                /> */}
                <div></div>

                <p className="hobby-text col s10 m5 l4">
                  <b>
                    I enjoy travelling and I am interested in experiencing other
                    cultures and traditions. In addition, I love eating good
                    food and also hanging out with old as well as making new
                    friends.
                  </b>
                </p>
              </div>
              {/* <div className="my-music-container">
                <Hennessy />
                <Shuperu />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
