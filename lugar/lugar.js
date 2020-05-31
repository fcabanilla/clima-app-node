const axios = require('axios');



const getLugarLatLon = async (dir) => {

    const encodeUrl = encodeURI(dir);
    // console.log(encodeUrl);



    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '6929fdd81cmsh070a4a1b87f5775p1f5198jsne0e7067f1386' }
    });



    const res = await instance.get();
    if(res.data.Results.length === 0) throw new Error(`No hay resultados para ${dir}`);


    const data                          = res.data.Results[0];
    const {name:lugar, lat, lon}    = data;

    return{
        lugar,
        lat,
        lon
    }

};

module.exports = {
    getLugarLatLon
}






