import React from "react";

const Step = ({stepNumber, title, children}) => {
  return(
    <div className="step">
      <h2>Step: {title}</h2>
      <div className="step-content">
        {children}
      </div>
    </div>
  );
};

export default Step;