import React from 'react';
import { Link } from 'react-router-dom';


const Work = () => (
  <div className="container">
    <div className="container--body">
      <Link to="/work/xpenseme">
        <div>
          <img className="image1" src={'/images/projects/Xpense-meLogin0.png'} />
        </div>
      </Link>
      <Link to="/work/indecision">
        <div>
          <img className="image0" src={'/images/projects/indecisionDesktop20.png'} />
        </div>
      </Link>
      <Link to="/work/colorgame">
        <div>
          <img className="image" src={'/images/projects/colorGame0.png'} />
        </div>
      </Link>
    </div>
  </div>
);

export default Work;