import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/images/projects/colorGame.png" }
]

const repo = 'https://github.com/nimtabo/color-buzz';
const colorBuzz = 'http://nimtabo.github.io/color-buzz';
const ColorGame = () => (
  <div className="container ">
    <div className="container--body">
      <h1>RGB Color Buzz</h1>
      <p>
        A game that provides you with RGB values and lets you guess wich color it's.
        <a className="social" href={colorBuzz} target="_blank">Watch Live</a> <br />
      </p>
      <p><a className="social" href={repo} target="_blank">GitHub Repo </a></p>
      <SimpleImageSlider
        width={600}
        height={660}
        images={images}
      />
    </div>
  </div>
);

export default ColorGame;