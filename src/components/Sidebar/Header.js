import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

export default function Footer({ title, heading, avatar }) {
  const data = useStaticQuery(graphql`
    {
      prismic {
        allBios {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  `);
  const name = data.prismic.allBios.edges[0].node.name;
  return (
    <div id="logo">
      <Link to="/">
        <span className="image avatar48">
          <img height="128px" src={avatar} alt="" />
        </span>

        <h1 id="title">{name[0].text}</h1>
        <p>{heading}</p>
      </Link>
    </div>
  );
}
