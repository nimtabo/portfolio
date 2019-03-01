import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/images/projects/Xpense-meDashboard.png" },
  { url: "/images/projects/Xpense-meLogin.png" }
]

const xpenseme = 'https://home-expensify.herokuapp.com/';
const repo = 'https://github.com/nimtabo/expensify-app';
const XpenseMe = () => (
  <div className="container">
    <div className="container--body">
      <h2>Xpense-me</h2>
      <p>Is a Single Page App build under React library, that lets you keep <span> </span>
        record of your expenditures. <a className="social" href={xpenseme} target="_blank">Watch Live</a></p>
      <p><a className="social" href={repo} target="_blank">GitHub Repo</a></p>
      <SimpleImageSlider
        width={700}
        height={504}
        images={images}
        bgColor={"none"}
        navStyle={2}
      />
    </div>
  </div>
);

export default XpenseMe;