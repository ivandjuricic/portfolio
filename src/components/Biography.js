import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Job from './Job';
import Education from './Education';

const Biography = () => {
  const data = useStaticQuery(graphql`
    query Header {
      allPrismicBio {
        edges {
          node {
            data {
              biography {
                text
              }
              company {
                text
              }
              eductation {
                degree {
                  text
                }
                department {
                  text
                }
                institution {
                  text
                }
                year_finished {
                  text
                }
              }
              jobs {
                company1 {
                  text
                }
                description {
                  text
                }
                duration {
                  text
                }
              }
              name {
                text
              }
            }
          }
        }
      }
    }
  `);
  const {
    allPrismicBio: { edges: bio },
  } = data;
  const biography_data = bio[0];
  const {
    node: {
      data: { biography, eductation: education, jobs },
    },
  } = biography_data;
  return (
    <section id="biography">
      <div className="container">
        <header>
          <h2>Biography</h2>
        </header>
        <p>{biography.text}</p>
      </div>
      <div className="job-education-container">
        <div className="education-container">
          <h2>Education</h2>
          <hr />
          {education.map(ed => (
            <Education
              key={ed.degree.text}
              degree={ed.degree.text}
              institution={ed.institution.text}
              departments={ed.department.text}
              year={ed.year_finished.text}
            />
          ))}
        </div>
        <div className="jobs-container">
          <h2>Work experience</h2>
          <hr />
          {jobs.map(job => {
            return (
              <Job
                key={job.company1.text}
                company={job.company1.text}
                role={job.role}
                description={job.description.text}
                duration={job.duration.text}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Biography;
