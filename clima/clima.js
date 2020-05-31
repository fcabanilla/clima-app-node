const axios = require('axios');



const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a7fa4e7597df33dc5da1c7bc13cf7891&units=metric`)
    return resp.data.main;
};

module.exports = {
    getClima
}