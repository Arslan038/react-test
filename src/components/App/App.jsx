import React, {Component} from 'react';
import BpkText from 'bpk-component-text';

import Header from '../Header';

import STYLES from './App.scss';
import Flight from '../Flights/Flight'
import AllFlights from '../../flights.json'

const getClassName = className => STYLES[className] || 'UNKNOWN';

class App extends Component {
  state = {
    flights: AllFlights
  }
  render() {
    
    return(
      <div className={getClassName('App')}>
        <Header />
        <main className={getClassName('App__main')}>
          
          <Flight flightRecords={this.state.flights}/>
          {/* TODO: Add a component to display results here */}
        </main>
      </div>
    )
  }
}

export default App;
