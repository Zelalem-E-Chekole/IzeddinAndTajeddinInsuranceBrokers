import React from "react";
import "../../styles/Card2.css";

function Card2({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default Card2;
