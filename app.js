
console.log('hello')
const API_key='7c6622332e6e23830002c1e56a60ee81'
let city_name='london'

let btn =document.querySelector('.btn')

let d = new Date();

let date=d.getMonth()+1+'.'+d.getDate()+'.'+d.getFullYear();

btn.addEventListener('click',(e) => {
    e.preventDefault()
    let zipcod=document.querySelector('.zipcod').value
    let feelings=document.querySelector('.feelings').value



    getapi(zipcod,feelings)

     
})







async function getapi(zipcod,feelings){
    try {


        const baseURL=`https://api.openweathermap.org/data/2.5/weather?zip=${zipcod}&appid=${API_key}`
        
        const response= await fetch(baseURL)
        const data=await response.json()
        const v= Object.entries(data).map(m=>m)
       console.log(data.message)
       if (data.message=='city not found'){
        alert('enter a valid zip code')
            }
            else{
document.getElementById('temp').innerHTML=Math.round((data.main.temp)-273.15)+'C';
document.getElementById("date").innerHTML=date
document.getElementById("city").innerHTML=data.name
document.getElementById('description').innerHTML=data.weather[0].description
document.querySelector('.feeling').innerHTML=feelings

document.querySelector('.info').classList.add('infostyle')
    }
}
    catch (error) {
        console.log(error)
    }

}


