import React from 'react';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const FormBtn = props => (
  <button className="btn waves-effect waves-light grey darken-1 search-btn" {...props}>{props.children}</button>
);
