

const { getLugarLatLon } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async(direccion) => {

    try {
        
        const { lugar, lat, lon } = await getLugarLatLon(direccion);

        const { temp, temp_min, temp_max, feels_like} = await getClima(lat, lon);

        return `\t\tLa temperatura de ${lugar} es de \t\t${temp}°C \n\t\tLa temperatura Minima es de \t\t\t\t${temp_min}°C\n\t\ty la Maxima de \t\t\t\t\t\t${temp_max}°C\n\t\tla sensacion termica es de \t\t\t\t${feels_like}°C`



    } catch (error) {
        return `No se pudo determinar el clima de ${ lugar }`
        
    }



};


// getLugarLatLon(argv.direccion)
//     .then((resp) => console.log(resp))

// getClima(35, 139)
//     .then(console.log)
//     .catch((err) => console.log('ERROR',err));

getInfo(argv.direccion).then(console.log).catch(console.log);