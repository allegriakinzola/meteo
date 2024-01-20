


const key = 'adc297d9a76b275a088913a61975b642'
const inputValue = ''
async function getData (ville){
    let link = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${key}&units=metric&lang=fr`
    try {
        const response = await fetch(link)
        const data = await response.json()
        changeData(data)
    } catch (error) {
        console.error("une erreur est survenu lors de la récupération des données")
    }
}
function changeData (data){
    document.querySelector('.my-ville').innerHTML = data.name
    document.querySelector('.temperature').innerHTML = data.main.temp + "°"
    document.querySelector('.humidite').innerHTML = data.main.humidity +"%"
    document.querySelector('.vent').innerHTML = data.wind.speed +"km/h"

}

document.querySelector('#inputcity').addEventListener('change', function (e) {
    e.preventDefault();
    const value = e.target.value;
    inputValue = value
    console.log(value);
  });

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    const ville = document.querySelector('#inputcity').value
    getData(ville)
})



/** 
 * 

const key = 'adc297d9a76b275a088913a61975b642'
let call_api = function(ville){
    let lien = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${key}&units=metric&lang=fr`
    fetch(lien).then((response) => response.json().then((data) => {console.log(data);
        document.querySelector('.my-ville').innerHTML = data.name
        document.querySelector('.temperature').innerHTML = data.main.temp + "°"
        document.querySelector('.humidite').innerHTML = data.main.humidity +"%"
        document.querySelector('.vent').innerHTML = data.wind.speed +"km/h"
    
    })).catch((e)=> console.log("erreur  : "  + e)) 
}

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    const ville = document.querySelector('#inputcity').value
    getData(ville)
})

 * 
*/
