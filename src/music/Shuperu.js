import React, { useRef, useEffect } from "react";
import M from "materialize-css";

const Music = () => {
  const mySuperModal = useRef();
  useEffect(() => {
    if (mySuperModal.current) {
      M.Modal.init(mySuperModal.current);
    }
  }, []);
  return (
    <div>
      <p>
        <a className="modal-trigger my-music" href="#modal2">
          Shuperu
        </a>
      </p>

      <div id="modal2" className="modal col s12 m8 " ref={mySuperModal}>
        <div className="modal-content videome">
          <div className="video-container responsive-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/95Wjtm0h_n8"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // allowfullscreen
            ></iframe>
          </div>
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
    </div>
  );
};

export default Music;
