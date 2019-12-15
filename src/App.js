//Public: 69be26d469c729fce76dafc0e7933d34
//Private: 82f8e29ecde6f6c5421e8938a8a410da894103e9







import React, { Component } from 'react';
import './App.css';
// import Tabs from './Tabs.js';
import 'react-tabs/style/react-tabs.css'
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// import Header from './Header.js';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apiReturn: [],
      artist: '',
      songs: []
      
    };
}
componentDidMount() {         
    // fetch("http://www.songsterr.com/a/ra/songs.json?pattern=Marley")
    fetch("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150")
        .then(res => res.json())
        .then(songInfo => {
            // this.setState({ apiReturn: [songInfo] })
            
            console.log(songInfo)
            
            // this.setState({ artist: [songInfo[0].artist.name] });
            // songInfo.forEach(infoPack => {
            //   this.state.apiReturn.push(infoPack)    
            // })
            // songInfo.forEach(infoPack => {
            //     this.state.songs.push(infoPack.title)    
            // })
              
            //   console.log(songInfo[4].title)
              
              
              
              // console.log(songInfo[0].tabTypes[0])
           })
            // console.log(this.state.apiReturn)
            
            
            
            // let array = []
            // this.state.songs.forEach(song => {
            //   array.push(song)
            // })
            // console.log(array)
            // console.log(this.state.songs)
            // console.log(this.state.songs[8])
           
           
           
            // console.log(md5(ts + "69be26d469c729fce76dafc0e7933d34" + "82f8e29ecde6f6c5421e8938a8a410da894103e9"))
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
      {/* <Tabs artist={this.state.artist} songs={this.state.songs} totalRes={this.state.apiReturn}/> */}
     
     
      {/* <Tab songs={this.state.songs}/> */}
    </div>
    );
  }
}

  export default App;