import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Project from './Project';

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      prismic {
        allProjectss {
          edges {
            node {
              name
              company
              role
              started
              ended
              description
              technologies {
                technology
              }
              snapshot
              site {
                ... on PRISMIC__ExternalLink {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);
  const {
    prismic: {
      allProjectss: { edges },
    },
  } = data;
  return (
    <section id="projects" className="two">
      <div className="container">
        <header>
          <h2>Main Projects Overview</h2>
        </header>
        <p>
          Life will feel it is always a great need for eu valley, the valley CNN
          ridiculous smile at any time chat mainstream clinical homes. Mauris
          floor was very warm and we need it. One customer now nibh Bureau dark
          pools behavior.
        </p>
        <div className="projects-container">
          {edges.map(edge => {
            const name = edge.node.name[0].text;
            const description = edge.node.description[0].text;
            const site = edge.node.site ? edge.node.site.url : '#';
            const technologies = edge.node.technologies;
            const img = edge.node.snapshot.url;
            const company = edge.node.company[0].text;
            const role = edge.node.role[0].text;
            const started = edge.node.started;
            const ended = edge.node.ended;
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
