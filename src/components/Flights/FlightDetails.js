import React, {Component} from 'react'
import PropTypes from 'prop-types'

class FlightDetails extends Component {
    getDurationMins = (duration) => {
        const hours = Math.floor(duration/60);
        const minutes = duration % 60;

        return hours + 'h ' + minutes;
    }

    getTime = (dateTime) => {
        let time = dateTime.split('T')[1]
        return time
    }

    getStop = (stops) => {
        if(stops > 0) {
            return {
                data: stops + ' Stop',
                color: '#ff0000'
            }
        }
        else {
            return {
                data: 'Direct',
                color: '#51A799'
            }
        }
    }
    render() {
        const pullRight = {
            position: 'absolute',
            right: '0'
        }
        const displayFlex = {
            display: 'flex',
            position: 'relative'
        }
        const baseURL = 'https://logos.skyscnr.com/images/airlines/favicon/'
        const legFound = this.props.leg
        return (
            <div style={displayFlex}>
                <div style={displayFlex}>
                    <img src={baseURL+legFound.airline_id+'.png'} width="30" height="30" style={{marginTop: '0px', marginTop: '12px', marginRight: '10px'}}></img>
                    <p> 
                        <span style={{fontSize: '18px', color: '#000'}}>{this.getTime(legFound.departure_time)}</span> <br /> <span style={{fontSize: '20px', color: '#888888'}}>{legFound.departure_airport}</span>
                    </p>
                    <p style={{marginRight: '15px', marginLeft: '15px'}}>-</p>
                    <p>
                        <span style={{fontSize: '18px', color: '#000'}}>{this.getTime(legFound.arrival_time)}</span> <br /> <span style={{fontSize: '20px', color: '#888888'}}>{legFound.arrival_airport}</span>
                    </p>
                </div> 
                <div style={pullRight}>
                    <p> 
                        <span>{this.getDurationMins(legFound.duration_mins)}</span> <br />
                        <span style={{color: this.getStop(legFound.stops).color}}>{this.getStop(legFound.stops).data}</span>
                    </p>
                </div> 
            </div>
        )
    }
}
FlightDetails.propTypes = {
    leg: PropTypes.object.isRequired
}

export default FlightDetails;