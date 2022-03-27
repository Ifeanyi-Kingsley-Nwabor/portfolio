import React, { useRef, useEffect } from "react";
import hob1 from "../images/hob1.png";
import tux from "../images/tux.jpg";
import nik from "../images/kingsley.png";

import Hennessy from "./music/Hennessy";
import Shuperu from "./music/Shuperu";
import M from "materialize-css";
// import { Link } from "react-router-dom";

const About = () => {
  const mySuperModal = useRef();
  useEffect(() => {
    if (mySuperModal.current) {
      M.Modal.init(mySuperModal.current);
    }
  }, []);
  return (
    <div className=" about-container responsive">
      {/* <div className="container responsive "> */}
      <div className="row" id="about-me">
        <div className="col s12 m8 offset-m2">
          <div className="     aboutcard">
            <div className="name-image ">
              <img
                src={nik}
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
                communication skills. I strife for professional as well as
                Personal development and always eager to learn new skills.
              </p>
            </div>

            {/* <LinkComponent /> */}

            {/* <div>
              <a
                className="waves-effect waves-light btn video-btn modal-trigger"
                href="#modal1"
              >
                Watch a minute video
              </a>
              <div id="modal1" className="modal col s12 m8 " ref={mySuperModal}>
                <div className="modal-content videome">
                  
                  <video className="video-container responsive-video" controls>
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
                <div className="modal-footer">
                  <a
                    href="/about"
                    className="modal-close waves-effect waves-green btn-flat"
                  >
                    Close
                  </a>
                </div>
              </div>
            </div> */}
            <div className="hobby-1">
              <h4>Hobbies</h4>
              <hr></hr>
              <div className="hobby-content">
                <div className="row">
                  <p className="hobby-text hobby-first-text col s10 m5 l4">
                    For hobbies, I enjoy tackling new challenges to the point
                    that it hurts, and learning new skills to further develop
                    myself towards a positive outcome. I pretty much like
                    everything good, like listening to good music, eating good
                    food (just throw in some <b>MEAT</b> please!).
                  </p>
                  <img
                    src={hob1}
                    className="hobby col s10 m5 l4 hoverable responsive-img"
                    alt="avatar_1"
                  />
                </div>
              </div>
            </div>

            <div className="hobby-1">
              <div className="row">
                <p className="hobby-text col s10 m5 l4">
                  During my free time, when I am a little bit inspired I like to
                  indulge myself in some music production. Below you can find
                  links to two of my music videos on YouTube. Your feedback is
                  always appreciated!
                </p>
                <img
                  src={tux}
                  className="nik col s10 m5 l4 responsive-img"
                  alt="avatar_2"
                />
              </div>
              <div className="my-music-container">
                <Hennessy />
                <Shuperu />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default About;
