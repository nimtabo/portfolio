import React from 'react';


const xpenseme = '/externalPages/xpensePage.html';
const XpenseMe = () => (
  <div className="container">
    <iframe frameborder='0' height='560px' width='100%' scrolling='yes' src={xpenseme}
      allowfullscreen>
    </iframe>
  </div>
);

export default XpenseMe;