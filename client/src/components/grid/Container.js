import React from "react";

export const Container = props => (
  <div className={`container ${props.style} ${props.unique}`}>
    {props.children}
  </div>
);
