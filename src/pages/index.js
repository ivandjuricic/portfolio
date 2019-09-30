import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/Sidebar';
import Projects from '../components/Projects';
import Header from '../components/Header';
import TechStack from '../components/TechStack';
import Biography from '../components/Biography';
import ThisPage from '../components/ThisPage';

import '../assets/sass/main.scss';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'tech-stack', name: 'Tech-Stack', icon: 'fa-list' },
  { id: 'projects', name: 'Projects', icon: 'fa-th' },
  { id: 'biography', name: 'Biography', icon: 'fa-user' },
  { id: 'this-page', name: 'This page', icon: 'fa-file-text' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />
    <div id="main">
      <Header />
      <TechStack />
      <Projects />
      <Biography />
      <ThisPage />
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
