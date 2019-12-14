import React, { Component } from 'react';
// import Tab from './Tab';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'



class Tabs1 extends Component {
    // constructor(props) {
    //     super(props)
    // }
    
    render() {
        // console.log(this.props.songs)
        // console.log(this.props.totalRes)
        const items = this.props.songs.map((song, i ) => {
        return <li item={song} key={i}/> });

            // console.log(items)



            const displayPosts = (
              <Tabs defaultIndex={0} /*onSelect={index => console.log(index)}*/>


            <TabList>
              <Tab>{ this.props.artist }</Tab>
              <Tab>title2</Tab>
              <Tab>title3</Tab>
              <Tab>title4</Tab>
              <Tab>title5</Tab>
              <Tab>title6</Tab>
              <Tab>title7</Tab>
            </TabList>
      
            <TabPanel>
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
                {/* <p>some other stuff</p> */}
                  {displayPosts}
            </div>
        );
    }
}

export default Tabs1;