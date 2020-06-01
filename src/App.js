import React, { Component } from 'react'
import styles from './app.module.scss';
import { fetchData } from './api';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

export class App extends Component {
  state= {
    data: [],

  }
  async componentDidMount () {
    const fetchedData= await fetchData();
    this.setState({ data: fetchedData })
  }
  
  render() {
    const {data} = this.state;
    return (
      <div className={styles.container}>
       <Cards data={data} />
       <CountryPicker/>
       <Chart/>
      </div>
    )
  }
}

export default App
