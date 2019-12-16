// NASA:
// key: uYpSXkFSh81NlhPuloWyns6AomXuqDUHxqKk03kB
// api_key=uYpSXkFSh81NlhPuloWyns6AomXuqDUHxqKk03kB





import React, { Component } from 'react';
import './App.css';
import Tabs from './Tabs.js';
import 'react-tabs/style/react-tabs.css'
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// import Header from './Header.js';

const apiKey = "uYpSXkFSh81NlhPuloWyns6AomXuqDUHxqKk03kB"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      picOfTheDay: '',
      explanation: '',
      title: '',
      neos: '',
      marsPhotos: []
    };
}



  componentDidMount() {         
    fetch("https://api.nasa.gov/planetary/apod?api_key=" + apiKey)
    // Headers: {Accept: 'application/json'}
    .then(res => res.json())
    .then(data => {
      this.setState({ picOfTheDay: [data.hdurl] })
      this.setState({ explanation: [data.explanation] })
      this.setState({ title: [data.title] })
      // console.log(data)
    })      
  fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-12-09&end_date=2019-12-15&api_key=" + apiKey)
  .then(res => res.json())
  .then(data => {
    this.setState({ neos: [data] })
    console.log(data)
    console.log(data.near_earth_objects)
    })
  fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=" + apiKey)
  .then(res => res.json())
  .then(data => {
    this.setState({ marsPhotos: [data] })
    // data.photos.forEach(pic => {
    //   this.setState.marsPhotos.push(this.photos)
    console.log(data)
    console.log(data.photos)
    this.setState({ marsPhotos: [...this.state.marsPhotos, ...data.photos ] })
    });
  // fetch("https://images-api.nasa.gov/asset&api_key=" + apiKey)
  // .then(res => res.json())
  // .then(data => {
  //   // this.setState({ marsPhotos: [data] })
  //   // data.photos.forEach(pic => {
  //   //   this.setState.marsPhotos.push(this.photos)
  //   console.log(data)
  //   console.log(data.photos)
  //   });
}
 


 render() {
console.log(this.state.marsPhotos)

  //  console.log(Date.now())
    
  return (
    <div>
      <h2>Music API</h2>
      <ul>
        the
      </ul>
      <Tabs 
        dailyPic={this.state.picOfTheDay} 
        picExplain={this.state.explanation} 
        title={this.state.title}
        neoData={this.state.neos}
        roverPics={this.state.marsPhotos}
      />
    </div>
    );
  }
}

  export default App;