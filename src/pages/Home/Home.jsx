import React from 'react';
import Banner from './Banner';
import TechnologiesIWorkWith from './TechnologiesIworkWith';
import WhatIWorkOn from './WhatIWorkOn';
import MyRecentProjects from './MyRecentProjects';

import Sliders from './Sliders';
import { Helmet } from 'react-helmet-async';

import Contact from '../../components/Contact';

const Home = () => {
    return (
        <div >
              <Helmet>
              <title>Digital Solution 24.0</title>
              </Helmet>
              
              <Sliders></Sliders>
              <TechnologiesIWorkWith></TechnologiesIWorkWith>
              <WhatIWorkOn></WhatIWorkOn>
              <MyRecentProjects></MyRecentProjects>
              <Contact></Contact>
              
        </div>
    );
};

export default Home;