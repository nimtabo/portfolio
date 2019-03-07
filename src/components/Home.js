import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container content">
    <h1>Welcome to my portfolio</h1>
    <h2>Feel at home</h2>
    <hr></hr>
    <Link to="/work" className="btn btn-info btn-lg">Get started</Link>
  </div>
);

export default Home;