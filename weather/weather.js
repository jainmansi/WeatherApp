const request = require('request');

var getWeather = (latitude, longitude, callback) => {
	request({
		url: `https://api.darksky.net/forecast/61d47b532453588b269c652bc23fd708/${latitude},${longitude}`,
		//url: "https://api.darksky.net/forecast//37.8267,-122.4233",
		json: true
	}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			callback(undefined, {
				actual: body.currently.temperature,
				feelsLike: body.currently.apparentTemperature
			})
		} 	else {
			callback('Unable to fetch weather.');
		}
	})
}

module.exports.getWeather = getWeather;