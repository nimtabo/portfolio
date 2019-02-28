import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/images/projects/indecisionDesktop2.png" },
  { url: "/images/projects/indecisionMobile.png" }
]

const indecision = '';
const repo = '';
const Indecision = () => (
  <div className="container container--body">
    <div>
      <h1>Indecision</h1>
      <p>A satic React app that help you decid on what to do from the available options
          <span> </span><a href={indecision}>Watch Live</a>. <br/>
          Git Repo: {repo}
      </p>
      <SimpleImageSlider
        width={420}
        height={570}
        images={images}
      />
    </div>
  </div>
);

export default Indecision;