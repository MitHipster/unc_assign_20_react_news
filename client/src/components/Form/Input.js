import React from 'react';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export const Input = props => (
  <div className={`input-field col ${props.colWidth}`}>
    <input
      id={props.id}
      type={props.type}
      className={props.className}
      name={props.name}
      pattern={props.pattern}
      value={props.value}
      onChange={props.onChange}
      required={props.required} />
    <label htmlFor={props.id}>{props.children}</label>
  </div>
);
