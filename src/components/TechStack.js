import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Tech from './Tech';

const TechStack = () => {
  const data = useStaticQuery(graphql`
    {
      allPrismicTechstacks {
        edges {
          node {
            data {
              tech {
                competency {
                  text
                }
                name {
                  text
                }
                primary
              }
            }
          }
        }
      }
    }
  `);
  const {
    allPrismicTechstacks: { edges },
  } = data;
  const techData = edges[0].node.data.tech;
  return (
    <section id="tech-stack" className="two">
      <div className="container">
        <header>
          <h2>Technology Stack</h2>
        </header>
        <div className="technology-stack-container">
          {techData
            .filter(tech => {
              debugger;
              return tech.primary === true;
            })
            .map(tech => {
              return (
                <Tech
                  key={tech.name[0].text}
                  primary={true}
                  technology={tech.name[0].text}
                  competency={tech.competency[0].text}
                />
              );
            })}
        </div>
        <hr />
        <div className="technology-stack-container">
          {techData
            .filter(tech => {
              return tech.primary !== true;
            })
            .map(tech => {
              return (
                <Tech
                  key={tech.name[0].text}
                  primary={false}
                  technology={tech.name[0].text}
                  competency={tech.competency[0].text}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
