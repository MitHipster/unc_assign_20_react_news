import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="containers">
      <ul className="collection">
        {children}
      </ul>
    </div>
  );
};
