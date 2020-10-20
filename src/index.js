import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={lat: null};
        this.state={lon: null};

        window.navigator.geolocation.getCurrentPosition(
            position=>{
                this.setState({lat: position.coords.latitude,lon: position.coords.longitude});
                
            },
            err=>console.log(err)
        );
    }
    render(){
        
        return <div>
            Latitude and longitude: {this.state.lat}, {this.state.lon}
            <SeasonDisplay/>
        </div>
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));