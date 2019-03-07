import React from 'react';


const linkedin = 'www.linkedin.com/in/nicholas-mtabo-82743170';
const github = 'https://github.com/nimtabo';
const mail = "mailto:nicholasmtabo@yahoo.com";
const mobileNo = "callto:+254704643061";
const Profile = () => (
  <div className="container">
    <div className="jumbotron" id="profile">
      <h1 className="display-4">Let's connect and chat</h1>
      <p><a href={mobileNo}><i className="fas fa-phone"></i> +254704643061</a></p>
      <a className="btn btn-primary btn-lg" href={mail} role="button"><i className="fas fa-envelope"></i> Email</a>
      <a className="btn btn-primary btn-lg" role="button" href={linkedin} target="_blank"><i className="fab fa-linkedin"></i> Linkedin</a>
      <a className="btn btn-primary btn-lg" role="button" href={github} target="_blank"><i className="fab fa-github"></i> GitHub</a>
    </div>
  </div>
);

export default Profile;