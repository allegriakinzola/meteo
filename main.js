
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
    let ville = document.querySelector('#inputcity').value
    call_api(ville)
})

call_api('kinshasa')
/** 
 * 
 * const key = 'adc297d9a76b275a088913a61975b642'
let lien = `https://api.openweathermap.org/data/2.5/weather?q=kinshasa&appid=${key}&units=metric&lang=fr`
fetch(lien).then((response) => response.json().then((data) => {console.log(data);
    document.querySelector('.my-ville').innerHTML = data.name
    document.querySelector('.temperature').innerHTML = data.main.temp + "°"
    document.querySelector('.humidite').innerHTML = data.main.humidity +"%"
    document.querySelector('.vent').innerHTML = data.wind.speed +"km/h"

})).catch((e)=> console.log("erreur  : "  + e))


        document.querySelector('form').addEventListener('submit', function(e){
            e.preventDefault();
            let ville = document.querySelector('#inputcity').value

            const key = 'adc297d9a76b275a088913a61975b642'
 
            let lien = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${key}&units=metric&lang=fr`
                fetch(lien).then((response) => response.json().then((data) => {console.log(data);
                    document.querySelector('.my-ville').innerHTML = data.name
                    document.querySelector('.temperature').innerHTML = data.main.temp + "°"
                    document.querySelector('.humidite').innerHTML = data.main.humidity +"%"
                    document.querySelector('.vent').innerHTML = data.wind.speed +"km/h"
                
                })).catch((e)=> console.log("erreur  : "  + e))
            
        })
 * 
*/

        
    
    










