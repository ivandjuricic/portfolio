import React from 'react';

const SidebarHeader = ({ title, heading, avatar }) => {
  return (
    <div id="logo" className="sidebar-header-container">
      <div className="image avatar48">
        <img src={avatar} alt="profile-image" />
      </div>
      <h1 id="title">{title}</h1>
      <p>{heading}</p>
    </div>
  );
};

export default SidebarHeader;
