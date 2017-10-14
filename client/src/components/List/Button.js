import React from "react";

export const Button = props => {
  return (
    <button
      className="btn btn-floating waves-effect grey darken-1 secondary-content"
      onClick={() => props.saveArticle({
        _id: props._id,
        url: props.url,
        headline: props.headline,
        summary: props.summary,
        byline: props.byline,
        image: props.image,
        date: props.date
      })}>
      <i
        className="material-icons"
        title={props.title}>
          {props.icon}
      </i>
    </button>
  );
};
