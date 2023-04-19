const weather = require('weather-js');

weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
    if(err) console.log(err);

    const currentWeather = result[0].current;

    const temperature = currentWeather.temperature;

    const skytext = currentWeather.skytext;

    console.log(`Temperature : ${temperature}°F | Etat du ciel : ${skytext}`);


});
