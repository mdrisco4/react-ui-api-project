import React, { Component } from 'react';
import './App.css';
import Tabs from './Tabs.js';
import 'react-tabs/style/react-tabs.css'
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// import Header from './Header.js';




// randButton.addEventListener("click", function () {
//   fetch("http://www.songsterr.com/a/wa/song?id={id}")
//       .then(res => res.json())
//       .then(songInfo => {
//           console.log(songInfo)
//       })
class App extends Component {

  constructor() {
    super();
    this.state = {
      posts: []

    };
  }



  render() {
    
    
  return (
    <div>
      <h2>things and stuff</h2>
      <Tabs />
    </div>
    );
  }
}

  export default App;
  
  
      