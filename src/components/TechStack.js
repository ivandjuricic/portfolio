import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Tech from './Tech';

const TechStack = () => {
  const data = useStaticQuery(graphql`
    {
      allPrismicTechStack {
        edges {
          node {
            data {
              compentecy {
                text
              }
              technology {
                text
              }
            }
          }
        }
      }
    }
  `);
  const {
    allPrismicTechStack: { edges },
  } = data;
  return (
    <section id="tech-stack" className="two">
      <div className="container">
        <header>
          <h2>Technology Stack</h2>
        </header>
        <div className="technology-stack-container">
          {edges.map(edge => {
            return (
              <Tech
                technology={edge.node.data.technology.text}
                competency={edge.node.data.compentecy.text}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
