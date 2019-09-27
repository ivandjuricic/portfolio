import React from 'react';

const Education = props => {
  const { degree, institution, department, year } = props;
  return (
    <div>
      <head>
        <h1>Education</h1>
      </head>
      <h1>{degree}</h1>
      <span>{year}</span>
      <h4>{institution}</h4>
      <p>{department}</p>
    </div>
  );
};

export default Education;
