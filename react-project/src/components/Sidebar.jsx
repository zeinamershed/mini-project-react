import React from 'react'
import About from '../pages/About';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    
      <div className="sidebar">
      <ul>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </ul>
    </div>
    
  );
}

export default Sidebar
