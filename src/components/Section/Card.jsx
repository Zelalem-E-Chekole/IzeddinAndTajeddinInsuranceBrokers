import React from "react";
import "../../styles/Card.css";

const Card = ({ title, text, children }) => {
  return (
    <div className="card">
      {title && <h2 className="card-title">{title}</h2>}
      {text && <p className="card-text">{text}</p>}
      {children}
    </div>
  );
};

export default Card;
