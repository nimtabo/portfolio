import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/images/projects/Xpense-meDashboard.png" },
  { url: "/images/projects/Xpense-meLogin.png" }
]

const xpenseme = '';
const repo = '';
const XpenseMe = () => (
  <div className="container">
    <div className="container--body">
      <h2>Xpense-me</h2>
      <p>Is a Single Page App build under React library, that lets you keep <span> </span>
        record of your expenditures. <a href={xpenseme}>Watch Live</a></p>
      <p>GitHub Repo: {repo}</p>
      <SimpleImageSlider
        width={700}
        height={504}
        images={images}
      />
    </div>
  </div>
);

export default XpenseMe;