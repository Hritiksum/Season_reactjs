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
        if(this.state.errorMessage && (!this.state.lat || !this.state.lon)){
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div>
            );
        }
        if(!this.state.errorMessage && this.state.lon && this.state.lat){
            return(
                <div>
                    Longitude: {this.state.lon}
                    <br/>
                    Latitude: {this.state.lat}
                </div>
            );
        }
        else{
            return <div>Loading</div>;
        }
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));