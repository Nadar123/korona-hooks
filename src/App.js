import React, { Component } from 'react'
import styles from './app.module.scss';
import { fetchData } from './api';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Footer from './components/footer/Footer'

import image from './images/covid-19.png'

export class App extends Component {
  state= {
    data: [],
    country: ''
  }

  async componentDidMount () {
    const fetchedData= await fetchData();
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country})
  }

  
  render() {
    const {data, country} = this.state;
    
    return (
      <div className={styles.container}>
        <img className={styles.logo} src={image} alt="korona"/>
       <Cards data={data} />
       <CountryPicker handleCountryChange={this.handleCountryChange}/>
       <Chart data={data} country={country}/>
       <Footer/>
      </div>
    )
  }
}

export default App
