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
      apiReturn: [],
      artist: '',
      songs: []

    };
}
componentDidMount() {         
    fetch("http://www.songsterr.com/a/ra/songs.json?pattern=Marley")
        .then(res => res.json())
        .then(songInfo => {
            // this.setState({ apiReturn: [songInfo] })
            this.setState({ artist: [songInfo[0].artist.name] });
            songInfo.forEach(infoPack => {
              this.state.apiReturn.push(infoPack)    
            })
            songInfo.forEach(infoPack => {
                this.state.songs.push(infoPack.title)    
              })
              // console.log(songInfo[0].tabTypes[0])
           })
            // console.log(this.state.apiReturn)
            // console.log(this.state.songs)
 }


 
 render() {
   const items = this.state.songs.map((song, i ) => {
   return <li item={song} key={i}/> });
    
  return (
    <div>
      <h2>Music API</h2>
      {/* <ul>
        the
        { items }
      </ul> */}
      <Tabs artist={this.state.artist} songs={this.state.songs} totalRes={this.state.apiReturn}/>
      {/* <Tab songs={this.state.songs}/> */}
    </div>
    );
  }
}

  export default App;