import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/images/projects/colorGame.png" }
]

const repo = '';
const colorBuzz = '';
const ColorGame = () => (
  <div className="container container--body">
    <div>
      <h1>RGB Color Buzz</h1>
      <p>
        A game that provides you with RGB values and lets you guess wich color it's.
        <a href={colorBuzz}>Watch Live</a> <br/>
        Git Repo: {repo}
      </p>
      <SimpleImageSlider
        width={600}
        height={660}
        images={images}
      />
    </div>
  </div>
);

export default ColorGame;