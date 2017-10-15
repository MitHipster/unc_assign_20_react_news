import React from "react";
import "./Form.css";

export const Form = ({ children }) => {
  return (
    <form id="search-form" className="col s12" action="" method="get">
      {children}
    </form>
  );
};
