import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Job from './Job';
import Education from './Education';

const Biography = () => {
  const data = useStaticQuery(graphql`
    {
      prismic {
        allBios {
          edges {
            node {
              jobs {
                company1
                duration
                description
                role
              }
              biography
              eductation {
                degree
                department
                institution
                year_finished
              }
            }
          }
        }
      }
    }
  `);
  const node = data.prismic.allBios.edges[0].node;
  const { biography, jobs, eductation } = node;
  const education = eductation;
  return (
    <section id="biography" className="four">
      <div className="container">
        <h1>Biography</h1>
        {biography.map(paragraph => (
          <p>{paragraph.text}</p>
        ))}
      </div>
      <div className="job-education-container">
        <div className="education-container">
          {education.map(ed => (
            <Education
              degree={ed.degree[0].text}
              institution={ed.institution[0].text}
              departments={ed.department[0].text}
              year={ed.year_finished[0].text}
            />
          ))}
        </div>
        <div className="jobs-container">
          {jobs.map(job => (
            <Job
              company={job.company1[0].text}
              role={job.role[0].text}
              description={job.description}
              duration={job.duration[0].text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Biography;
