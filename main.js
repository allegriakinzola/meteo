const key = 'adc297d9a76b275a088913a61975b642';

async function getData(ville) {
  let link = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${key}&units=metric&lang=fr`;
  try {
    const response = await fetch(link);
    const data = await response.json();
    changeData(data);
  } catch (error) {
    console.error("Une erreur est survenue lors de la récupération des données");
  }
}

function changeData(data) {
    if(data.name === undefined){
        document.querySelector('.my-ville').innerHTML = "aucune ville";
        document.querySelector(".small").innerHTML = "cette ville n'existe pas";
        document.querySelector('.temperature').innerHTML = "";
        document.querySelector('.humidite').innerHTML = "";
        document.querySelector('.vent').innerHTML = "";
    }else{
        document.querySelector('.my-ville').innerHTML = data.name;
        document.querySelector('.temperature').innerHTML = data.main.temp + "°";
        document.querySelector('.humidite').innerHTML = data.main.humidity + "%";
        document.querySelector('.vent').innerHTML = data.wind.speed + "km/h";
        document.querySelector(".small").innerHTML = "";
    }
  
}

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const ville = document.querySelector('#inputcity').value;
  getData(ville);
});

document.querySelector('#inputcity').addEventListener('change', function (e) {
    const value = e.target.value;
    inputValue = value
    if(inputValue = " "){
        document.querySelector(".small").innerHTML = ""
    }
  });


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
