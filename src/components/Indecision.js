import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/images/projects/indecisionDesktop2.png" },
  { url: "/images/projects/indecisionMobile.png" }
]

const indecision = 'https://indecision-one.herokuapp.com/';
const repo = 'https://github.com/nimtabo/indecision';
const Indecision = () => (
  <div className="container ">
    <div className="container--body">
      <h1>Indecision</h1>
      <p>A satic React app that help you decid on what to do from the available options
          <span> </span><a className="social" href={indecision} target="_blank">Watch Live</a>
      </p>
      <p><a className="social" href={repo} target="_blank">GitHub Repo</a></p>
      <SimpleImageSlider
        width={420}
        height={570}
        images={images}
        bgColor={"none"}
        navStyle={2}
        // navStyle={{""}}
      />
    </div>
  </div>
);

export default Indecision;