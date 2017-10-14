import React from 'react';
import { Button } from "./";
import moment from 'moment';

export const ListItem = props => (
  <li className="collection-item avatar">
    <img className="responsive-img" src={props.image} alt="" />
    <div className="collection-text">
      <a href={props.url} target="_blank"><span className="title">{props.headline}</span></a>
      <p>{props.summary}<br />
      <span className="collection-byline">{props.byline}</span><br />
      <span className="collection-date">{moment(props.date).format('MMMM Do, YYYY')}</span>
      </p>
    </div>
    <Button {...props} />
  </li>
);
