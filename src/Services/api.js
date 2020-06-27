//"https://api.openweathermap.org/data/2.5/weather?q=Kyiv,ua&units=metric&appid=4fd70ad4824fb22274880ed243c351df";
//"https://api.openweathermap.org/data/2.5/forecast?q=Kyiv&appid=4fd70ad4824fb22274880ed243c351df"

const CURRENT_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";
const FORECAST_WEATHER_URL = "https://api.openweathermap.org/data/2.5/forecast?";
const WEATHER_API_KEY =  "4fd70ad4824fb22274880ed243c351df";
const LOCATION = "Kyiv";
const WETHER_UNITS = "metric";

const getData = (src, city,  units, key) =>
  fetch(`${src}q=${city}&units=${units}&appid=${key}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

export const commonWeatherData = () => {
  return Promise.all([
    getData(CURRENT_WEATHER_URL, LOCATION, WETHER_UNITS, WEATHER_API_KEY).then(
      (data) => {
        return data.main;
      }
    ), // weather now

    getData(FORECAST_WEATHER_URL, LOCATION, WETHER_UNITS, WEATHER_API_KEY).then(
      (data) => {
        return data.list
          .filter((e) => {
            return e.dt_txt.indexOf("12") > -1;
          })
          .map((item) => {
            return item.main;
          });
      }
    ),
  ]);
}; // weather forecast


