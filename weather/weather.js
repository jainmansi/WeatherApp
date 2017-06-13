const request = require('request');

var getWeather = (latitude, longitude, callback) => {
	request({
		url: `https://api.darksky.net/forecast/YOUR_API_KEY_HERE/${latitude},${longitude}`,
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