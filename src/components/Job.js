import React from 'react';

const Job = props => {
  const { company, role, duration, description } = props;
  return (
    <div id="jobs">
      <h1>{company}</h1>
      <h2>{role}</h2>
      <h4>{duration}</h4>
      <p>{description.text}</p>
    </div>
  );
};

export default Job;
