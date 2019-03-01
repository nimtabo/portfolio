import React from 'react';


const linkedin = 'www.linkedin.com/in/nicholas-mtabo-82743170';
const github = 'https://github.com/nimtabo';
const Profile = () => (
  <div className="container profile">
    <div>
      <img className="profPic" src={'images/profile/me.png'} alt={'profile picture'} />
    </div>

    <div className='text'>
      <p>Hello, welcome and let me walk you through my profile real quick.</p>
      <p>I am a Bachelor degree graduate in mathematics and computer science <br />
        and a Tech enthusiast with endless desire to lerning technology.
      </p>
      <p>I would love to connect on <a className="social" href={linkedin} target="_blank">LinkedIn</a>, and take part in projects on
          <span> </span><a className="social" href={github} target="_blank">Github</a>. </p>
      <p>If you want to reach me directly, don't get shy to email me at <br />
        <span className="email"><strong>nicholasmtabo@yahoo.com</strong></span></p>
    </div>
  </div>
);

export default Profile;