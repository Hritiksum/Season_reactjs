import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    state={lat: null, lon: null, errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=>this.setState({lat: position.coords.latitude,lon: position.coords.longitude}),
            err=>this.setState({errorMessage: err.message})
        );
    }
    
    renderContent(){
        if(this.state.errorMessage && (!this.state.lat || !this.state.lon)){
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div>
            );
        }
        if(!this.state.errorMessage && this.state.lon && this.state.lat){
            return <SeasonDisplay lon={this.state.lon} lat={this.state.lat}/>;
        }
        return <div>Loading</div>;
    }

    render(){
        return <div>{this.renderContent()}</div>
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));