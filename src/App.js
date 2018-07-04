import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Info from './Info'
import Input from './Input'

class App extends Component {

  state = {
    json : {},
    json2 : {},
    dataInput : ""
  }

  //recuperer la valeur dans input
  getDataFromInput = (event) => {
    this.setState({
      dataInput: event.target.value
    })
  }

  //quand click sur button 
  clickBtn = () =>{

    this.getDataFromApi2();
  }

  //active cette fonction quand mon HTML s'affiche
  componentDidMount() {
    this.getDataFromApi()
    this.getDataFromApi2()
    setInterval(this.getDataFromApi, 10000)
    setInterval(this.getDataFromApi2, 10000)
  }

  //crée les requêtes via l'API RATP grâce à Axios 1
  getDataFromApi = () => {
    axios.get('https://api-ratp.pierre-grimaud.fr/v3/schedules/metros/9/croix+de+chavaux/A+R')
  .then((response) => { // handle success
    console.log(response);
    this.setState({
      json : response.data.result.schedules 
    }, () => {
      console.log(this.state.json)
    })
  })
  .catch((error) => { // handle error
    console.log(error);
  })
  }

  //crée les requêtes via l'API RATP grâce à Axios 2
  getDataFromApi2 = () => {
    axios.get(`https://api-ratp.pierre-grimaud.fr/v3/schedules/metros/6/${this.state.dataInput === "" ? "dupleix" : this.state.dataInput}/A+R`)
  .then((response) => { // handle success
    console.log(response);
    this.setState({
      json2 : response.data.result.schedules 
    }, () => {
      console.log(this.state.json2)
    })
  })
  .catch((error) => { // handle error
    console.log(error);
  })
  }

  //
  beforeRender = () => {
    if(this.state.json[0] && this.state.json2[0]) {
      return (
        <div>
          <Info className="text-warning" station= "Croix de Chavaux" data={this.state.json}/>
          <Info station= {this.state.dataInput === "" ? "Dupleix" : this.state.dataInput} data={this.state.json2}/>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App mt-5 text-primary">
        <div className="container">
          <h1 className="">Horaire Metro</h1>
          <Input btnF={this.clickBtn} input={this.getDataFromInput}/>
          {this.beforeRender()}
        </div>
      </div>
    );
  }
}

export default App;
