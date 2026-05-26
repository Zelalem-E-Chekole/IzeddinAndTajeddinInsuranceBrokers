// src/components/Section/Card2.jsx

import React from "react";
import "../../styles/Card2.css";

function Card2({ title, children, button }) {
  return (
    <div className="card">
      <h2>{title}</h2>

      <div className="card-content">
        {children}
      </div>

      {button && (
        <div className="card-button">
          {button}
        </div>
      )}
    </div>
  );
}

export default Card2;