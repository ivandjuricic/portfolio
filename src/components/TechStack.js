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
              primary
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
          {edges
            .filter(e => {
              return e.node.data.primary === 'true';
            })
            .map(edge => {
              return (
                <Tech
                  key={edge.node.data.technology[0].text}
                  primary={true}
                  technology={edge.node.data.technology[0].text}
                  competency={edge.node.data.compentecy[0].text}
                />
              );
            })}
        </div>
        <hr />
        <div className="technology-stack-container">
          {edges
            .filter(e => {
              return e.node.data.primary !== 'true';
            })
            .map(edge => {
              return (
                <Tech
                  key={edge.node.data.technology[0].text}
                  primary={false}
                  technology={edge.node.data.technology[0].text}
                  competency={edge.node.data.compentecy[0].text}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
