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
      picOfTheDay2: '',
      explanation2: '',
      title2: '',
      picOfTheDay3: '',
      explanation3: '',
      title3: '',
      picOfTheDay4: '',
      explanation4: '',
      title4: '',
      picOfTheDay5: '',
      explanation5: '',
      title5: '',
      picOfTheDay6: '',
      explanation6: '',
      title6: '',
      picOfTheDay7: '',
      explanation7: '',
      title7: ''
      // neos: '',
      // marsPhotos: [],
      // marsWeather: {},
      // marsWeather366: {},
      // marsWeather367: {},
      // marsWeather368: {},
      // marsWeather369: {},
      // marsWeather370: {},
      // marsWeather371: {},
      // marsWeather372: {}
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
        console.log(data)
      })     
      fetch("https://api.nasa.gov/planetary/apod?date=2019-12-15&api_key=" + apiKey) 
      .then(res => res.json())
      .then(data => {
        this.setState({ picOfTheDay2: [data.hdurl] })
        this.setState({ explanation2: [data.explanation] })
        this.setState({ title2: [data.title] })
      })    
      fetch("https://api.nasa.gov/planetary/apod?date=2019-12-14&api_key=" + apiKey) 
      .then(res => res.json())
      .then(data => {
        this.setState({ picOfTheDay3: [data.hdurl] })
        this.setState({ explanation3: [data.explanation] })
        this.setState({ title3: [data.title] })
      })   
      fetch("https://api.nasa.gov/planetary/apod?date=2019-12-13&api_key=" + apiKey) 
      .then(res => res.json())
      .then(data => {
        this.setState({ picOfTheDay4: [data.hdurl] })
        this.setState({ explanation4: [data.explanation] })
        this.setState({ title4: [data.title] })
      })   
      fetch("https://api.nasa.gov/planetary/apod?date=2019-12-12&api_key=" + apiKey) 
      .then(res => res.json())
      .then(data => {
        this.setState({ picOfTheDay5: [data.hdurl] })
        this.setState({ explanation5: [data.explanation] })
        this.setState({ title5: [data.title] })
      })   
      fetch("https://api.nasa.gov/planetary/apod?date=2019-12-11&api_key=" + apiKey) 
      .then(res => res.json())
      .then(data => {
        this.setState({ picOfTheDay6: [data.hdurl] })
        this.setState({ explanation6: [data.explanation] })
        this.setState({ title6: [data.title] })
      })   
      fetch("https://api.nasa.gov/planetary/apod?date=2019-12-10&api_key=" + apiKey) 
      .then(res => res.json())
      .then(data => {
        this.setState({ picOfTheDay7: [data.hdurl] })
        this.setState({ explanation7: [data.explanation] })
        this.setState({ title7: [data.title] })
      })   


// Loads of extra data to be parsed
      // fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-12-09&end_date=2019-12-15&api_key=" + apiKey)
      // .then(res => res.json())
      // .then(data => {
      //   this.setState({ neos: [data] })
      //   })
      // fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=" + apiKey)
      // .then(res => res.json())
      // .then(data => {
      //   this.setState({ marsPhotos: [data] })
      //   console.log(data)
      //   this.setState({ marsPhotos: [...this.state.marsPhotos, ...data.photos ] })
      //   });
      // fetch("https://api.nasa.gov/insight_weather/?api_key=" + apiKey + "&feedtype=json&ver=1.0")
      // .then(res => res.json())
      // .then(data => {
      //   this.setState({ marsWeather: [data] })
      //   this.setState({ marsWeather366: [data[366]] })
      //   this.setState({ marsWeather367: [data[367]] })
      //   this.setState({ marsWeather368: [data[368]] })
      //   this.setState({ marsWeather369: [data[369]] })
      //   this.setState({ marsWeather370: [data[370]] })
      //   this.setState({ marsWeather371: [data[371]] })
      //   this.setState({ marsWeather372: [data[372]] })
      //   });
}
 

render() {
  return (
    <div>
      <h2>DEEP SPACE IMAGES</h2>
      <Tabs 
        dailyPic={this.state.picOfTheDay} 
        picExplain={this.state.explanation} 
        title={this.state.title}
        dailyPic2={this.state.picOfTheDay2} 
        picExplain2={this.state.explanation2} 
        title2={this.state.title2}
        dailyPic3={this.state.picOfTheDay3} 
        picExplain3={this.state.explanation3} 
        title3={this.state.title3}
        dailyPic4={this.state.picOfTheDay4} 
        picExplain4={this.state.explanation4} 
        title4={this.state.title4}
        dailyPic5={this.state.picOfTheDay5} 
        picExplain5={this.state.explanation5} 
        title5={this.state.title5}
        dailyPic6={this.state.picOfTheDay6} 
        picExplain6={this.state.explanation6} 
        title6={this.state.title6}
        dailyPic7={this.state.picOfTheDay7} 
        picExplain7={this.state.explanation7} 
        title7={this.state.title7}
        // neoData={this.state.neos}
        // roverPics={this.state.marsPhotos}
        // martianWeather={this.state.marsWeather}
        // martianWeather366={this.state.marsWeather366}
        // martianWeather367={this.state.marsWeather367}
        // martianWeather368={this.state.marsWeather368}
        // martianWeather369={this.state.marsWeather369}
        // martianWeather370={this.state.marsWeather370}
        // martianWeather371={this.state.marsWeather371}
        // martianWeather372={this.state.marsWeather372}
      />
    </div>
    );
  }
}

  export default App;