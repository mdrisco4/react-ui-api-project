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
              
              console.log(songInfo[4].title)
              // console.log(songInfo[0].tabTypes[0])
           })
            // console.log(this.state.apiReturn)
            let array = []
            this.state.songs.forEach(song => {
              array.push(song)
            })
            console.log(array)
            console.log(this.state.songs)
            console.log(this.state.songs[8])
            
            // const thing = this.get(['this.state.songs', 11])
            // console.log(thing)
 }

 
 render() {
  //  let music = [...this.state.songs]
  //  console.log(music)
   const items = this.state.songs.map((song, i ) => {
   return <li item={song} key={i}/> });
    
  return (
    <div>
      <h2>Music API</h2>
      <ul>
        the
        { items }
      </ul>
      <Tabs artist={this.state.artist} songs={this.state.songs} totalRes={this.state.apiReturn}/>
      {/* <Tab songs={this.state.songs}/> */}
    </div>
    );
  }
}

  export default App;