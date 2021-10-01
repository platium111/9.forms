import React from "react";

// [learn] need to pass `className` to Wrapper to apply styled-components
const Wrapper = ({ title, children, className }) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Wrapper;
