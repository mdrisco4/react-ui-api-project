// import Tab from './Tab';
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './styles.css'



class Tabs1 extends Component {

    render() {
        // const marsItems = this.props.roverPics.map((image, i ) => {
        //     return <img item={image} key={i}/> });
        // const marsPhotos = []
        // for (let i = 1; i < this.props.roverPics; i++) {
        //     marsPhotos.push(this.props.roverPics[i].img_src)
        // }
            const displayPosts = (
              <Tabs defaultIndex={0} /*onSelect={index => console.log(index)}*/>


            <TabList>
              <Tab><span>Pic of the Day</span></Tab>
              <Tab><span>Yesterday's Pic</span></Tab>
              <Tab><span>{ this.props.title3 }</span></Tab>
              <Tab><span>{ this.props.title4 }</span></Tab>
              <Tab><span>{ this.props.title5 }</span></Tab>
              <Tab><span>{ this.props.title6 }</span></Tab>
              <Tab><span>{ this.props.title7 }</span></Tab>
            </TabList>
      
            <TabPanel>
                <h3>{ this.props.title }</h3>
                <img src={this.props.dailyPic} className="photos" alt="Daily NASA Stillshot"></img>
                <p>{ this.props.picExplain }</p>
            </TabPanel>
            <TabPanel>
                <h3>{ this.props.title2 }</h3>
                <img src={this.props.dailyPic2} alt="Daily NASA Stillshot"></img>
                <p>{ this.props.picExplain2 }</p>
            </TabPanel>
            <TabPanel>
                <h3>{ this.props.title3 }</h3>
                <img src={this.props.dailyPic3} alt="Daily NASA Stillshot"></img>
                <p>{ this.props.picExplain3 }</p>
            </TabPanel>
            <TabPanel>
                <h3>{ this.props.title4 }</h3>
                <img src={this.props.dailyPic4} alt="Daily NASA Stillshot"></img>
                <p>{ this.props.picExplain4 }</p>
            </TabPanel>
            <TabPanel>
                <h3>{ this.props.title5 }</h3>
                <img src={this.props.dailyPic5} alt="Daily NASA Stillshot"></img>
                <p>{ this.props.picExplain5 }</p>
            </TabPanel>
            <TabPanel>
                <h3>{ this.props.title6 }</h3>
                <img src={this.props.dailyPic6} alt="Daily NASA Stillshot"></img>
                <p>{ this.props.picExplain6 }</p>
            </TabPanel>
            <TabPanel>
                <h3>{ this.props.title7 }</h3>
                <img src={this.props.dailyPic7} alt="Daily NASA Stillshot"></img>
                <p>{ this.props.picExplain7 }</p>
            </TabPanel>
          </Tabs>
          )
          return (
              <div>
                {
                /* <button className="randButton" onClick={this.callSong}>click me</button>
                <button classBuName="songtton" onClick={this.populateSongs}>click me</button> */
                }
                  {displayPosts}
            </div>
        );
    }
}

export default Tabs1;