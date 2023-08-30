// FREEEEDOOOMMMM

const broadCast = () => {}
     
let announceRain = () => {
            console.log("Grab an unbrella. it\'s going to rain today.")};
let announceClear = () => {
            console.log('Grab your shades and sunscreen. It\'s going to be sunny and hot today.')};


const weatherStation = (humidity) => {
    if (humidity > 95) {
        return announceClear()}
    else {return announceRain()}
}

weatherStation(99)
weatherStation(13)
