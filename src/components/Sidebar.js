import React, { useState } from 'react';
import Footer from './Footer';
import SideBarHeader from './SideBarHeader';
import Nav from './Nav';
import TopNav from './TopNav';
import config from '../../config';
import pic from '../assets/images/profile.png';

function SideBar({ sections = [] }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <div className={`${headerOpen ? 'header-visible' : ' '}`}>
      <TopNav
        title={config.authorName}
        onMenuClick={() => toggleHeader(!headerOpen)}
      />
      <div id="header">
        <div className="top">
          <SideBarHeader
            avatar={pic}
            title={config.authorName}
            heading={config.heading}
          />
          <Nav sections={sections} />
        </div>
        <Footer socialLinks={config.socialLinks} />
      </div>
    </div>
  );
}

export default SideBar;
