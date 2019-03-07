import React from 'react';
import { Link } from 'react-router-dom';


const Work = () => (
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-md-5 col-sm-12 project">
        <p>Do you know how much you throw on every little things?</p>
        <p>Do you think it's little?</p>
        <p><span>Xpense-me</span> will surprise you.</p>
        <Link className="btn btn-success btn-lg" to="/work/xpenseme">Learn more</Link>
      </div>

      <div className="col-lg-2 col-md-1 col-sm-12"></div>

      <div className="col-lg-5 col-md-5 col-sm-12 project">
        <p>You got tight schedule? no problen...!</p>
        <p><span>Indecision</span> got you covered</p>
        <Link className="btn btn-success btn-lg" to="/work/indecision">Learn more</Link>
      </div>
    </div>
  </div>
);

export default Work;