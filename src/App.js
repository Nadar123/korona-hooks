import React, { Component } from 'react'
import styles from './app.module.scss';
import { fetchData } from './api';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

export class App extends Component {

  async componentDidMount () {
    const data= await fetchData()
    console.log(data)
  }
  
  render() {
    return (
      <div className={styles.container}>
       <Cards/>
       <CountryPicker/>
       <Chart/>
      </div>
    )
  }
}

export default App
