import React from "react";
import './weather.css'
export const Weather = () => {
  return (
    <div className="center">
      <div className="card-content">
        Today
        <img
          className="city-icon"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/01n.svg"
        />
      </div>
    </div>
  );
};
