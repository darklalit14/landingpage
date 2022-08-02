import React from "react";

const Feature = ({ title, subHead, desc }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted text-center">{subHead}</h6>
        <p className="card-text text-center">{desc}</p>
      </div>
    </div>
  );
};

export default Feature;
