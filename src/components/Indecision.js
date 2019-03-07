import React from 'react';


const indecision = '/externalPages/indecision.html';
const Indecision = () => (
  <div className="container ">
    <iframe frameborder='0' height='560px' width='100%' scrolling='yes' src={indecision}
      allowfullscreen>
    </iframe>
  </div>
);

export default Indecision;