import React, { Component } from 'react';
import {
  Text, View
} from 'react-native';

/* WeatherNow component gives an overall summary of today's weather
 * at a given location, with a small preview of the next day. All its
 * data comes from props.
 * 
 * Assignments 3 and 4: Edits to source code by Adam Princiotta
 */
export default class WeatherNow extends Component {

  state = {
    summary: undefined,
    temperature: undefined,
    temperatureHigh: undefined,
    temperatureLow: undefined
  }

  componentDidMount() {
    this.getWeatherApi();
  }

  async getWeatherApi() {
    console.log("getWeatherApi uses try await await catch");
  
    const darkskyURL = "https://api.darksky.net/forecast";
    const ApiKey = "14e723fbe931ee119ade496aabcf28ba";
    const latLon = "42.589611,-70.819806";
  
    try {
      let response = await fetch(darkskyURL + "/" + ApiKey + "/" + latLon);
      let responseJson = await response.json();
      this.setState({
        summary: responseJson.hourly.summary,
        temperature: responseJson.currently.temperature,
        temperatureHigh: responseJson.daily.data[0].temperatureHigh,
        temperatureLow: responseJson.daily.data[0].temperatureLow
      });
    } catch (error) {
      console.error(error);
    }
    console.log(this.state.weatherData);
  }
  
  render() {
    return (
    <View 
    
    style = {{flexgrow: 1, flexDirection: 'column'} } //
    >
        <Text style = {{backgroundColor: '#6699CC',
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
        flexDirection: 'column'}}>

        Today's weather in Gordon College  
        
        </Text>

        <Text style = {{backgroundColor: '#4080BF',
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
        flexDirection: 'column'}}>
          
          Today's Weather Description 
        
        </Text>

        <Text style = {{backgroundColor: '#4080BF',
        fontSize: 34,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
        flexDirection: 'column'}}> 

          {/* {"\n"}{this.props.weatherData.currently.summary}  */}
          {"\n"}{this.state.summary}

        </Text>

        <Text style = {{backgroundColor: '#6699CC',
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
        flexDirection: 'column'}}>
        
          {"\n"}Today's Temperature
        
        </Text> 
        
        <Text style = {{backgroundColor: '#6699CC',
        fontSize: 34,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
        flexDirection: 'column'}}> 
          
          {/* {"\n"}{this.props.weatherData.currently.temperature.toFixed(0)/*found toFixed in stackoverflow*/}{/*°F */}
          {"\n"}{this.state.temperature/*found toFixed in stackoverflow*/}°F
          
        </Text>
        
        <Text style = {{backgroundColor: '#4080BF',
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
        flexDirection: 'column'}}>
          
          {"\n"}Today's High Temp
        
        </Text>

        <Text style = {{backgroundColor: '#4080BF',
        fontSize: 33,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
        flexDirection: 'column'}}>

          {/* {"\n"}{this.props.weatherData.daily.data1.temperatureHigh.toFixed(0)}°F */}
          {"\n"}{this.state.temperatureHigh}°F
        
        </Text>

        <Text style = {{backgroundColor: '#6699CC',
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 40,
        flexDirection: 'column'}}>

          {"\n"}Today's Low Temperature 

        </Text>

        <Text style = {{backgroundColor: '#6699CC',
        fontSize: 33,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 60,
        flexDirection: 'column'}}>
          
          {/* {this.props.weatherData.daily.data1.temperatureLow.toFixed(0)}°F */}
          {this.state.temperatureLow}°F
            
        </Text>
    </View>
    )
  }
}
