import React from 'react';
import ReactDOM from 'react-dom';

const api_key ="1dd008c228c80a2906da422d5c7b35c3";

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            city: 'Zapopan',
            description: ''
        }
    }

    componentDidMount(){
        this.grabWeather(this.state.city);
    }

    grabWeather(city){
        fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${api_key}&q=${city}`)        
        .then(response => response.json())
        //.then(json => console.log(json));
        .then(json => {
            this.setState( () =>
                ( {description: json.weather[0].description} )
            )
        });
        
    }

    render(){
        return(
            <div>
            <h1>Hola, el clima para {this.state.city}</h1>
            <h2>{this.state.description}</h2>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));