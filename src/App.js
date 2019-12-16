// Marvel:
//Public: 69be26d469c729fce76dafc0e7933d34
//Private: 82f8e29ecde6f6c5421e8938a8a410da894103e9



// LOTR API: 
// key: ebLJsWLBf4omkXE9rDNr



// NASA:
// key: uYpSXkFSh81NlhPuloWyns6AomXuqDUHxqKk03kB
// api_key=uYpSXkFSh81NlhPuloWyns6AomXuqDUHxqKk03kB





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
      picOfTheDay: '',
      explanation: '',
      title: ''
    };
}



  componentDidMount() {         
    fetch("https://api.nasa.gov/planetary/apod?api_key=uYpSXkFSh81NlhPuloWyns6AomXuqDUHxqKk03kB")
    // Headers: {Accept: 'application/json'}
    .then(res => res.json())
    .then(data => {
      this.setState({ picOfTheDay: [data.hdurl] })
      this.setState({ explanation: [data.explanation] })
      this.setState({ title: [data.title] })

      console.log(data.hdurl)
      console.log(data.explanation)
      console.log(data.title)
      console.log(data)
    })
}
 


 render() {


  //  const items = this.state.songs.map((song, i ) => {
  //  return <li item={song} key={i}/> });

  //  console.log(Date.now())
    
  return (
    <div>
      <h2>Music API</h2>
      <ul>
        the
        { this.state.explanation }
      </ul>
      <Tabs 
        dailyPic={this.state.picOfTheDay} 
        picExplan={this.state.explanation} 
        title={this.state.title}
      />
    </div>
    );
  }
}

  export default App;