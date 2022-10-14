/**
 * Simple React Native App to demonstrate static layout of weather data.
 */

import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import WeatherNow from './src/WeatherNow';

export default class StaticWeatherApp extends Component {
  render() {
    let weatherData = {
      "locationName": "Wenham, MA",
      "currently": {
        "time":1579810570,
        "summary":"Mostly Cloudy",
        "icon":"partly-cloudy-day",
        "temperature":39.42,
      },
      "daily": {
        "data1" : {
            "time":1579755600,
            "summary":"Partly cloudy throughout the day.",
            "icon":"partly-cloudy-day",
            "temperatureHigh":39.98,
            "temperatureHighTime":1579809240,
            "temperatureLow":29.86,
            "temperatureLowTime":1579860420,
          },
          "data2" :{
            "time":1579842000,
            "summary":"Mostly cloudy throughout the day.",
            "icon":"partly-cloudy-day",
            "temperatureHigh":42.96,
            "temperatureHighTime":1579891320,
            "temperatureLow":36.12,
            "temperatureLowTime":1579924560,
          },
      }
    };

    return (
        <View>
            <WeatherNow weatherData={weatherData} />
        </View>
    )
  }
}
