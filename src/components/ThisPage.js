import React from 'react';

const ThisPage = () => {
  return (
    <section id="this-page">
      <div className="container">
        <header>
          <h2>This page was build and hosted with:</h2>
        </header>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <a href="https://reactjs.org/">React JS</a>
          </li>
          <li>
            <a href="https://www.gatsbyjs.org/">Gatsby JS</a>
          </li>
          <li>
            <a href="https://prismic.io/">Primsic io CMS</a>
          </li>
          <li>
            <a href="https://www.gatsbyjs.org/starters/anubhavsrivastava/gatsby-starter-prologue/">
              Gatsby starter
            </a>
          </li>
          <li>
            <a href="https://www.netlify.com/">Netlify</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ThisPage;
