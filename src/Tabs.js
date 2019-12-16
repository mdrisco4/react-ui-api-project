import React, { Component } from 'react';
// import Tab from './Tab';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'



class Tabs1 extends Component {
    // constructor(props) {
    //     super(props)
    // }

    
    //     componentDidMount() {         
    //         fetch("http://www.songsterr.com/a/ra/songs.json?pattern=Marley")
    //             .then(res => res.json())
    //             .then(songInfo => {
    //                 // this.setState({ apiReturn: [songInfo] })
    //                 this.setState({ artist: [songInfo[0].artist.name] });
    //                 songInfo.forEach(infoPack => {
    //                   this.state.apiReturn.push(infoPack)    
    //                 })
    //                 songInfo.forEach(infoPack => {
    //                     this.state.songs.push(infoPack.title)    
    //                 })
    //             })
    //             console.log(this.state.apiReturn)
    //             console.log(this.state.songs)
    //             console.log(this.props.songs)
    // }
            


    render() {
        const marsItems = this.props.roverPics.map((image, i ) => {
            return <img item={image} key={i}/> });
        console.log(this.props.roverPics)
            const displayPosts = (
              <Tabs defaultIndex={0} /*onSelect={index => console.log(index)}*/>


            <TabList>
              <Tab>Pic of the Day</Tab>
              <Tab>title2</Tab>
              <Tab>title3</Tab>
              <Tab>title4</Tab>
              <Tab>title5</Tab>
              <Tab>title6</Tab>
              <Tab>title7</Tab>
            </TabList>
      
            <TabPanel>
                <h3>{ this.props.title }</h3>
                <img src={this.props.dailyPic} alt="Daily NASA stillshot"></img>
                <p>{ this.props.picExplain }</p>
            </TabPanel>
            <TabPanel>
                <ul>
                  {marsItems}
                </ul>
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
                {/* <p>some other stuff</p> */}
                  {displayPosts}
            </div>
        );
    }
}

export default Tabs1;