import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Job from './Job';
import Education from './Education';

const Biography = () => {
  const data = useStaticQuery(graphql`
    {
      prismicBio {
        data {
          biography {
            text
          }
          company {
            text
          }
          jobs {
            company1 {
              text
            }
            description {
              text
            }
            role {
              text
            }
            duration {
              text
            }
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
        }
      }
    }
  `);
  const {
    prismicBio: {
      data: {
        biography,
        company,
        eductation,
        department,
        institution,
        year_finished,
        jobs,
      },
    },
  } = data;
  return (
    <section id="biography" className="four">
      <div className="container">
        <h1>Biography</h1>
        <p>{biography.text}</p>
      </div>
      <div className="job-education-container">
        <div className="education-container">
          {eductation.map(ed => (
            <Education
              degree={ed.degree.text}
              institution={ed.institution.text}
              departments={ed.department.text}
              year={ed.year_finished.text}
            />
          ))}
        </div>
        <div className="jobs-container">
          {jobs.map(job => {
            console.log(job);
            return (
              <Job
                company={job.company1.text}
                role={job.role.text}
                description={job.description}
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
