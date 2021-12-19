import React,{useState,useEffect} from 'react';
import './App.css';
import Hero from './Hero'
import NestedList from './material';

function App() {
  // const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //   window.onscroll = () => {
  //     if(window.pageYOffset > 50 ){
  //        console.log('hi');}
  //   }
  // }, []);

  // console.log(offset); 

  return (
    <React.Fragment>
      <Hero/>
      <Hero/>
      <Hero/>

    </React.Fragment>
  );
}

export default App;
