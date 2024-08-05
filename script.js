const months=["January","February","March","April","May","June","July","August","September","October","November","December"]
const weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const d=new Date();
document.getElementById("demo").innerHTML= weekday[d.getDay()]+", "+months[d.getMonth()]+"  " +d.getDate();
const apikey= "0ca751c985e80719f63a9a66b44b10e2";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q= ";
const input=document.querySelector(".bar")
const searchbtn=document.querySelector(".icon")
async function check(place){
    const res=await fetch(apiurl+place+`&APPID=${apikey}`);
    if(res.status==404){
        const back=document.querySelector(".myVideo");
        document.querySelector(".error").style.display="flex";
        document.querySelector(".disp").style.display="none";
        back.setAttribute("src","city not found.mp4")
    }
    else{
    var data=await res.json();
    // console.log(data);
    const temp=document.querySelector(".temp")
    const city=document.querySelector(".cityy")
    const pressure=document.querySelector(".pres")
    const wspeed=document.querySelector(".wind")
    const visible=document.querySelector(".vis")
    const humidity=document.querySelector(".humid")

temp.innerHTML=(Math.round(data.main.temp))+ " °C"
city.innerHTML=data.name
pressure.innerHTML=data.main.pressure+ " atm"
wspeed.innerHTML=data.wind.speed+ " km/h"
visible.innerHTML=(data.visibility/1000)+ " km"
humidity.innerHTML=data.main.humidity+ " %"
const icon=document.querySelector(".image")
const back=document.querySelector(".myVideo")
if(data.weather[0].main == "Clouds"){
    icon.src="icons/cloudy.png";
    back.setAttribute("src","cloudy.mp4")
}
else if(data.weather[0].main == "Clear"){
    icon.src="icons/clear.png";
    back.setAttribute("src","clear skies.mp4")
}
else if(data.weather[0].main == "Mist"){
    icon.src="icons/mist.png";
    back.setAttribute("src","mist.mp4")
}
else if(data.weather[0].main == "Snow"){
    icon.src="icons/snow.png";
    back.setAttribute("src","snow.mp4")
}
else if(data.weather[0].main == "Drizzle"){
    icon.src="icons/drizzle.png";
    back.setAttribute("src","drizzling.mp4")
}
else if(data.weather[0].main == "Rain"){
    icon.src="icons/rain.png";
    back.setAttribute("src","rain.mp4")
}
else if(data.weather[0].main == "Haze"){
    icon.src="icons/haze.png";
    back.setAttribute("src","haze.mp4")
}
document.querySelector(".error").style.display="none";
document.querySelector(".disp").style.display="block";
}}
check("mumbai")
searchbtn.addEventListener("click",()=>{
    check(input.value);
})
