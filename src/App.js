import React, { Component } from 'react';
import './App.css';
import Tabs from './Tabs.js';
import 'react-tabs/style/react-tabs.css'
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// import Header from './Header.js';



class App extends Component {

  constructor() {
    super();
    this.state = {
      artist: '',
      songs: []

    };
}
componentDidMount() {         
    fetch("http://www.songsterr.com/a/ra/songs.json?pattern=Marley")
        .then(res => res.json())
        .then(songInfo => {
            // console.log(songInfo)
            this.setState({ artist: [songInfo[0].artist.name] });
            
             songInfo.forEach(infoPack => {
                this.state.songs.push(infoPack.title)    
              })
           })
            // console.log(this.state.artist)
            // console.log(this.state.songs)
 }



  render() {
    
    
  return (
    <div>
      <h2>Music API</h2>
      <Tabs artist={this.state.artist} songs={this.state.songs}/>
      {/* <Tab songs={this.state.songs}/> */}
    </div>
    );
  }
}

  export default App;
  
  
      