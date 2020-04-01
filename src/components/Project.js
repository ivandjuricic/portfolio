import React from 'react';
import TechTag from './TechTag';

const Project = props => {
  const {
    name,
    description,
    url,
    img,
    technologies,
    company,
    role,
    started,
    ended,
  } = props;
  return (
    <div className="project-content">
      <h3>
        <b>{name}</b>
      </h3>
      <a
        style={{
          fontSize: '0.7em',
          textDecoration: 'none',
          display: 'inline',
          float: 'right',
        }}
        className="icon fa-1 fa-external-link"
        href={url}
      >
        <i className="icon fa-1 fa-external-link" aria-hidden="true" />
      </a>
      <h4>
        <p style={{ marginBottom: '15px' }}>
          {company}&nbsp;
          <i>({role})</i>
        </p>
      </h4>
      <p style={{ marginBottom: '15px' }}>
        <i>{`(${started} - ${ended})`}</i>
      </p>
      <div
        className="project-image"
        style={{ backgroundImage: `url(${img}` }}
      />

      <p>{description}</p>
      <div className="project-technologies-container">
        {technologies.map(tech => (
          <TechTag
            key={`${name}-${tech.technology[0].text}`}
            name={tech.technology[0].text}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
