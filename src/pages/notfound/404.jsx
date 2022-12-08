import React, { useState, useEffect } from 'react';
import './404.css';

function NotFound() {
  // Use the useState hook to store the animation state
  const [animated, setAnimated] = useState(false);

  // Use the useEffect hook to add and remove the animation classes
  useEffect(() => {
    const container = document.getElementById('container');
    if (animated) {
      container.classList.add('animated', 'shake');
    } else {
      container.classList.remove('animated', 'shake');
    }
  }, [animated]);

  // Use the setInterval function to loop the animation
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimated(!animated);
    }, 2000);
    return () => clearInterval(interval);
  }, [animated]);

  return (
    <div id="container">
      <h1>404 Page Not Found</h1>
    </div>
  );
}


export default NotFound;