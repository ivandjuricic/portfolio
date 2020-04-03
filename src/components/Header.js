import React from 'react';

const Header = () => {
  return (
    <section id="top" className="dark cover">
      <div className="container">
        <header>
          <div
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)', padding: '20px' }}
          >
            <h2 className="alt">
              Hi! I'm <strong>Ivan</strong>
            </h2>
            <h2>Sofware Engineer</h2>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Header;
