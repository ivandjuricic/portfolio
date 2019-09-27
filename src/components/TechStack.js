import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Tech from './Tech';

const TechStack = () => {
  const data = useStaticQuery(graphql`
    {
      prismic {
        allTech_stacks {
          edges {
            node {
              compentecy
              technology
            }
          }
        }
      }
    }
  `);

  const {
    prismic: {
      allTech_stacks: { edges },
    },
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
                technology={edge.node.technology[0].text}
                competency={edge.node.compentecy[0].text}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const query = graphql`
  {
    prismic {
      allTech_stacks {
        edges {
          node {
            compentecy
            technology
          }
        }
      }
    }
  }
`;

export default TechStack;

// const TechStack = () => {
//   return (
//     <section id="tech-stack" className="two">
//       <div className="container">
//         <header>
//           <h2>Technology Stack</h2>
//         </header>
//         <p>Here are some technologies I've been working with in the past</p>

//         <div className="row">
//           <div className="col-4 col-12-mobile">
//             <h1>Somethings</h1>
//             <h1>Something else</h1>
//           </div>
//           <div className="col-4 col-12-mobile">
//             <h1>Somethings</h1>
//             <h1>Something else</h1>
//           </div>
//           <div className="col-4 col-12-mobile">
//             <h1>Somethings</h1>
//             <h1>Something else</h1>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechStack;
