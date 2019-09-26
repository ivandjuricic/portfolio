import React from 'react';
import TechTag from './TechTag';

const Project = props => {
  const { name, description, url, img, technologies, company, role } = props;
  return (
    <div className="project-content">
      <h3>{name}</h3>
      <a
        style={{
          fontSize: '0.7em',
          textDecoration: 'none',
          display: 'inline',
          float: 'right',
        }}
        className="icon fa-1 fa-external-link"
        href={url}
      />
      <h4>{role}</h4>
      <p>{company}</p>
      <div className="project-image" style={{ backgroundImage: `url(${img}` }}>
        <span></span>
      </div>

      <p>{description}</p>
      <div className="project-technologies-container">
        {technologies.map(tech => (
          <TechTag name={tech.technology[0].text} />
        ))}
      </div>
    </div>
  );
};

export default Project;