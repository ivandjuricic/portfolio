import React from 'react';

const Education = props => {
  const { degree, institution, department, year } = props;
  return (
    <div id="education">
      <h1>{degree}</h1>
      <h4>{year}</h4>
      <h3>{institution}</h3>
      <p>{department}</p>
    </div>
  );
};

export default Education;
