import React, { Component } from 'react';
// import Tab from './Tab';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'









class Tabs1 extends Component {
    constructor() {
        super();
        this.state = {
          artist: '',
          songs: []
    
        };

        // this.callSong = this.callSong.bind(this)
    }
componentDidMount() {         
        fetch("http://www.songsterr.com/a/ra/songs.json?pattern=Marley")
            .then(res => res.json())
            .then(songInfo => {
                // console.log(songInfo)
                this.setState({ artist: [songInfo[0].artist.name] });
                
                 songInfo.forEach(infoPack => {
                    this.state.songs.push(infoPack.title)    
                    const items = this.state.songs.map((song) => {return <li>{song}</li> });                
                    
                })
                
             })
                console.log(this.state.artist)
                console.log(this.state.songs)
     }
    // populateSongs() {
    //     const items = this.state.songs.map((song) => {return <li>{song}</li> });
    //     console.log(items)
    // }        

// componentDidMount() {         
//     fetch("http://www.songsterr.com/a/ra/songs.json?pattern=Marley")
//         .then(res => res.json())
//         .then(songInfo => {
//             console.log(songInfo)
//             this.setState({ artist: [songInfo[0].artist.name] })
//             this.setState({ songs: [songInfo[0].title] })
            
//             console.log(this.state.artist)
//             console.log(this.state.songs)
//             console.log(songInfo[0].chordsPresent)
//             })
//         }
    
    



    render() {
            const items = this.state.songs.map((song) => {return <li>{song}</li> });
            console.log(items)
            const displayPosts = (
              <Tabs defaultIndex={0} /*onSelect={index => console.log(index)}*/>


            <TabList>
              <Tab>{ this.state.artist }</Tab>
              <Tab>title2</Tab>
              <Tab>title3</Tab>
              <Tab>title4</Tab>
              <Tab>title5</Tab>
              <Tab>title6</Tab>
              <Tab>title7</Tab>
            </TabList>
      
            <TabPanel>
              {/* <h2>{ this.state.songs }</h2> */}
              <ul>
                  { items }
              </ul>
            </TabPanel>
            <TabPanel>
              <h2>things2</h2>
            </TabPanel>
            <TabPanel>
              <h2>things3</h2>
            </TabPanel>
            <TabPanel>
              <h2>things4</h2>
            </TabPanel>
            <TabPanel>
              <h2>things5</h2>
            </TabPanel>
            <TabPanel>
              <h2>things6</h2>
            </TabPanel>
            <TabPanel>
              <h2>things7</h2>
            </TabPanel>
          </Tabs>
          )
          return (
              <div>
                <button className="randButton" onClick={this.callSong}>click me</button>
                <button className="songButton" onClick={this.populateSongs}>click me</button>
                <p>some other stuff</p>
                  {displayPosts}
            </div>
        );
    }
}

export default Tabs1;