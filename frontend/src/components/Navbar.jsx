import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/404">404</Link></li>
    </ul>
  </nav>
)

export default Home;
