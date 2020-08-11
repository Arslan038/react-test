import React, {Component} from 'react'
import PropTypes from 'prop-types'
import FlightDetails from './FlightDetails'

class Flight extends Component {
    getStyle = () => {
        return {
            background: '#fff',
            marginTop: '10px',
            padding: '10px',
            borderRadius: '7px',
            boxShadow: '1px 1px #ddd'
        }
    }

    render() {
        const leftSide = {
            float: 'left'
        }
    
        const selectBtn = {
            float: 'right'
        }
        
        
        return this.props.flightRecords.itineraries.map((flight) => (
            <div key={flight.id} style={this.getStyle()}>
                <div>
                {
                    flight.legs.map((leg) => {
                        let legFound = this.props.flightRecords.legs.find(l => l.id == leg)
                        return (
                            <FlightDetails key={leg.id} leg={legFound} />
                        )
                    })
                }
                </div>
                <div style={leftSide}>
                    <h1 style={{marginBottom: '10px'}}>{flight.price}</h1>
                    <p style={{color: '#888888', margin: '0'}}>{flight.agent}</p>
                </div>
                <div style={selectBtn}>
                    <button style={{background: '#51A799', fontSize: '18px', marginTop: '25px', fontWeight: 'bold', color: '#fff', border: '0', padding: '7px 15px', borderRadius: '7px'}}>Select</button>
                </div>
                <div style={{clear: 'both'}}></div>
            </div>
        ))
    }
}

Flight.propTypes = {
    flightRecords: PropTypes.object.isRequired
}

export default Flight