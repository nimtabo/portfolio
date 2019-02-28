import React from 'react';

const WorkItem = (props) => (
  <div className="container container--body">
    <div>
      <h1>Project {props.name}</h1>
      <p>This page is for the item with id of {props.match.params.id}</p>
    </div>
  </div>
);

export default WorkItem;