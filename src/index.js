import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    constructor(props){
        super(props);
        //object lat,lon
        this.state={lat: null, lon: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            position=>{
                this.setState({lat: position.coords.latitude,lon: position.coords.longitude});
                
            },
            err=>{
                this.setState({errorMessage: err.message});
            }
        );
    }
    render(){
        
        return (
            <div>
            Latitude and longitude: {this.state.lat}, {this.state.lon}
            <br/>
            error: {this.state.errorMessage}
            <SeasonDisplay/>
        </div>
        );
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));