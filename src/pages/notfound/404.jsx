import React from 'react';
import './../notfound/404.css'

class NotFound extends React.Component {
  render() {
    return (
      <div className='bakground-404'>
        <div className="error">404</div>
        <br />
        <br />
        <span className="info">Page not available</span>
        <img
          src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif"
          className="static"
        />
      </div>
    );
  }
}

export default NotFound;
