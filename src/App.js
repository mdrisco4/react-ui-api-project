import React, { Component } from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
// import Header from './Header.js';
// import Tabs from './Tabs.js';




class App extends Component {

  constructor() {
    super();
    this.state = {
      posts: []

    };
  }



  // const url = "https://swapi.co/api/"
  // const randButton1 = document.querySelector(".randomButton1")
  // let randomPeep1 = "people/13"

  // fetch(url + randomPeep1)
  //       .then(res => res.json())
  //       .then(characterInfo => {
  //           console.log(characterInfo)
            
  //           document.querySelectorAll(".accordion")[0].innerHTML = characterInfo.name
  //           document.querySelectorAll(".height")[0].innerHTML = "height: " + characterInfo.height
  //           document.querySelectorAll(".weight")[0].innerHTML = "weight: " + characterInfo.mass
  //           document.querySelectorAll(".hair-color")[0].innerHTML = "hair color: " + characterInfo.hair_color
  //       })

  render() {

    // const title = this.state.posts.map((x) => {
    //     return (<p key={x.id}> {x.id} </p>)
    //   });
    // const text = this.state.posts.map((x) => {
    //   return (<p key={x.id}> {x.id} </p>)
    // });

    
    
    
    const displayPosts = (
      <Tabs defaultIndex={0} /*onSelect={index => console.log(index)}*/>
      <TabList>
        <Tab>title1</Tab>
        <Tab>title2</Tab>
        <Tab>title3</Tab>
        <Tab>title4</Tab>
        <Tab>title5</Tab>
        <Tab>title6</Tab>
        <Tab>title7</Tab>
      </TabList>

      <TabPanel>
        <h2>stuff1</h2>
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
      <h2>things and stuff</h2>
      {displayPosts}
    </div>
    );
  }
}

  export default App;
  
  
      