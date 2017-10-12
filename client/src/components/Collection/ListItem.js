import React from 'react';

export const ListItem = props => (
  <li className="collection-item avatar">
    <img className="responsive-img" src="https://placehold.it//210x140" alt="" />
    <div className="collection-text">
      <a href={props.url} target="_blank"><span className="title">{props.headline}</span></a>
      <p>{props.summary}<br />
      <span className="collection-byline">{props.byline}</span><br />
      <span className="collection-date">{props.date}</span>
      </p>
    </div>
    <a href={`/saved/${props.id}`} className="btn btn-floating waves-effect grey darken-1 secondary-content"><i className="material-icons" title="Add article">add</i></a>
  </li>
);
