import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Project from './Project';

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allPrismicProjects {
        edges {
          node {
            data {
              company {
                text
              }
              description {
                text
              }
              name {
                text
              }
              role {
                text
              }
              site {
                url
              }
              snapshot {
                url
              }
              technologies {
                technology {
                  text
                }
              }
            }
          }
        }
      }
    }
  `);
  const {
    allPrismicProjects: { edges },
  } = data;
  return (
    <section id="projects" className="two">
      <div className="container">
        <header>
          <h2>Main Projects Overview</h2>
        </header>
        <div className="projects-container">
          {edges.map(edge => {
            const name = edge.node.data.name.text;
            const description = edge.node.data.description.text;
            const site = edge.node.data.site ? edge.node.data.site.url : '#';
            const technologies = edge.node.data.technologies;
            const img = edge.node.data.snapshot.url;
            const company = edge.node.data.company.text;
            const role = edge.node.data.role.text;
            const started = edge.node.data.started;
            const ended = edge.node.data.ended;
            return (
              <Project
                name={name}
                company={company}
                role={role}
                started={started}
                ended={ended}
                description={description}
                url={site}
                img={img}
                technologies={technologies}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
