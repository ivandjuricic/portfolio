import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from '../Scroll';
import { Link } from 'gatsby';

export default function Nav({ sections = [], handleClick }) {
  return (
    <nav id="nav">
      <ul>
        <Scrollspy
          items={sections.map(s => s.id)}
          currentClassName="active"
          offset={-300}
        >
          {sections.map(s => {
            return (
              <li key={s.id}>
                <Scroll
                  type="id"
                  element={s.id}
                  onClick={() => handleClick(false)}
                >
                  <Link id="top-link">
                    <span className={`icon ${s.icon}`}>{s.name}</span>
                  </Link>
                </Scroll>
              </li>
            );
          })}
        </Scrollspy>
      </ul>
    </nav>
  );
}
