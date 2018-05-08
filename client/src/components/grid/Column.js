import React from "react";

export const Column = props => (
  <div className={`column ${props.style} ${props.unique}`}>
    {props.children}
  </div>
);
