let updateWidget = function(data) {
console.log("Got weather data: ", data)

  let longitude = data.coord.lon
  console.log("The longitude is: ", longitude)

    let latitude = data.coord.lat
    console.log("The latitude is: ", latitude)

      let temperature = parseInt(data.main.temp)
      console.log("The temp is: ", temperature)

        let country = data.sys.country
        console.log("The country code is: ", country)

          let img = data.weather[0].icon
          console.log("The image icon ID is:", img)

            let img1 = "http://openweathermap.org/img/w/"+img+".png"
            console.log("The image's full URL is: ", img1)

  document.getElementById("weather").getElementsByClassName("card-text")[0].innerHTML = "It is "+temperature+" degrees in Paris."
  $("img").attr("src", img1)
}
  // HINT:
  // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
  // The very last part ('01d.png') should be obtained from the weather information.


let getWeather = function(event) {
  let latitude = '48.8566';
  let longitude = '2.3522';
  let apiKey = 'd7f8ee93491ad77cffe1e99e0e390461'; // REPLACE THIS VALUE with your own key.


  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}

  jQuery("#get_forecast").on("click", getWeather)


////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
