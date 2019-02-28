import React from 'react';


const linkedin = '';
const github = '';
const Profile = () => (
  <div className="container profile">
    <div>
      <img className="profPic" src={'images/profile/me.JPG'} alt={'profile picture'} />
    </div>

    <div className='text'>
      <p>Hello, welcome and let me walk you through my profile real quick.</p>
      <p>I am a Bachelor degree graduate in mathematics and computer science <br />
        and a Tech enthusiast with endless desire to lerning technology.
      </p>
      <p>I would love to connect on <a href={linkedin}>LinkedIn</a>, and take part in projects on
          <span> </span><a href={github}>Github.</a> </p>
      <p>If you want to reach me directly, don't get shy to email me at <br />
        <strong>nicholasmtabo@yahoo.com</strong></p>
    </div>
  </div>
);

export default Profile;