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
              primary
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
              console.log(e);
              return e.node.data.primary === 'true';
            })
            .map(edge => {
              return (
                <Tech
                  primary={true}
                  technology={edge.node.data.technology.text}
                  competency={edge.node.data.compentecy.text}
                />
              );
            })}
        </div>
        <hr />
        <div className="technology-stack-container">
          {edges
            .filter(e => {
              console.log(e);
              return e.node.data.primary !== 'true';
            })
            .map(edge => {
              return (
                <Tech
                  primary={false}
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
