//Public: 69be26d469c729fce76dafc0e7933d34
//Private: 82f8e29ecde6f6c5421e8938a8a410da894103e9







import React, { Component } from 'react';
import './App.css';
import Tabs from './Tabs.js';
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
// componentDidMount() {         
//     fetch("http://www.songsterr.com/a/ra/songs.json?pattern=Marley")
//         .then(res => res.json())
//         .then(songInfo => {
//             // this.setState({ apiReturn: [songInfo] })
//             this.setState({ artist: [songInfo[0].artist.name] });
//             songInfo.forEach(infoPack => {
//               this.state.apiReturn.push(infoPack)    
//             })
//             songInfo.forEach(infoPack => {
//                 this.state.songs.push(infoPack.title)    
//             })
              
//               console.log(songInfo[4].title)
             
             
             
//               // console.log(songInfo[0].tabTypes[0])
//            })
//             // console.log(this.state.apiReturn)
            
            
            
//             let array = []
//             this.state.songs.forEach(song => {
//               array.push(song)
//             })
//             console.log(array)
//             console.log(this.state.songs)
//             console.log(this.state.songs[8])
            
            
            
//             // const thing = this.get(['this.state.songs', 11])
//             // console.log(thing)
//  }





componentDidMount() {         
      fetch("http://gateway.marvel.com/v1/public/comics", {
        "apikey": "69be26d469c729fce76dafc0e7933d34",
        ts: toString(Date.now()),
        hash: "b0db4f68e7f76a84c9ee20ab9c63108d",
        Headers: {Accept: 'application/json'}

          
      })
        .then(res => res.json())
        .then(songInfo => {
      })
  }
        


//   componentDidMount() {         
//     Request Url: "http://gateway.marvel.com/v1/public/comics"
//     Request Method: GET
//     Params: {
//       "apikey": "your api key",
//       "ts": "a timestamp",
//       "hash": "your hash"
//     }
//     Headers: {Accept: 'application/json'}
// }
 
 render() {
  //  let music = [...this.state.songs]
  //  console.log(music)
   const items = this.state.songs.map((song, i ) => {
   return <li item={song} key={i}/> });

   console.log(Date.now())
    
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