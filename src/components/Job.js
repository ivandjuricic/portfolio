import React from 'react';

const Job = props => {
  const { company, role, duration, description } = props;
  return (
    <div>
      <h2>{company}</h2>
      <h4>{role}</h4>
      <p>{duration}</p>
      {description.map(p => (
        <small>{p.text}. </small>
      ))}
    </div>
  );
};

export default Job;
