import React from 'react';
import '../src/styles/App.css';
import Hero from './Hero';
import NestedList from './Material';
import Expertise from './Expertise';
import Insight from './Insight';
import Material from './Material';
import Report from './Report';
import Partners from './Partners';
import Works from './Works';

function App() {

  return (
    <React.Fragment>
      <Hero/>
      <Expertise/>
      <Insight/>
      <Report/>
      <Partners/>
      <Works/>
      
      {/* <Material/> */}
    </React.Fragment>
  );
}

export default App;
