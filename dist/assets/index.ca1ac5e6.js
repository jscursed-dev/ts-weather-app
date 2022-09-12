(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const u="2e694d3747ab3b1b808baced05a471ad",d=async e=>{let a;if(a=await fetch(e).then(n=>n),a.status!==200)throw new Error("API fetch failed");return a},m=e=>{const a=new Array,n=new Date(e.list[0].dt_txt).getHours();for(let i=0;i<e.list.length;i++){const t=new Date(e.list[i].dt_txt);if(n===t.getHours()){if(a.length===5)break;a.push({time:t,city:e.city.name,country:e.city.country,temperature:{feelsLike:Math.round(e.list[i].main.feels_like),temp:Math.round(e.list[i].main.temp),tempMin:Math.round(e.list[i].main.temp_min),tempMax:Math.round(e.list[i].main.temp_max)},weather:{description:e.list[i].weather[0].description,main:e.list[i].weather[0].main,icon:e.list[i].weather[0].icon}})}}return a},h=(e,a)=>new URL(`http://api.openweathermap.org/data/2.5/forecast?q=${e}&units=metric&appid=${a}`),_=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],p=e=>`<li>
  <div class="weather">
    <div class="weather_actual__day">${_[e.time.getDay()].toUpperCase()}</div>
    <div class="weather__icon">
      <img src="http://openweathermap.org/img/wn/${e.weather.icon}@2x.png" alt="" />
    </div>
    <div class="weather_actual__sky">
      <div class="weather_actual__text">${e.weather.description}</div>
    </div>
    <div class="weather_actual__temperature">
      <div class="weather_actual__text">${e.temperature.tempMax} \xB0C</div>
      <div class="weather_actual__text">${e.temperature.tempMin} \xB0C</div>
    </div>


  </div>
</li>`,w=e=>`<div class="weather_actual">
  <div class="weather_actual__temperature">
    <div class="weather_actual__text_big">${e.temperature.temp} \xB0C</div>
    <div class="weather_actual__text">Feels like ${e.temperature.feelsLike} \xB0C</div>
  </div>
  <div class="weather_actual__sky">
    <div class="weather_actual__text_bold">${e.weather.main}</div>
    <div class="weather_actual__text">${e.city}, ${e.country}</div>
  </div>
  <div class="weather_actual__icon">
  <img src="http://openweathermap.org/img/wn/${e.weather.icon}@2x.png" alt="" />
  </div>
</div>`,v=(e,a)=>{e.innerHTML=`${w(a[0])}<ul class="daysList">
        ${a.map(n=>p(n)).join("")}
      </ul>`},f=e=>{e.className="searchbar__input_wrong",setTimeout(()=>e.className="searchbar__input",650)},s=document.querySelector("form"),l=document.querySelector(".searchbar__input"),o=document.querySelector(".weatherList");o&&(s==null||s.addEventListener("submit",e=>{e.preventDefault(),(async n=>{try{const i=await d(n).then(t=>t.json()).then(t=>m(t));v(o,i)}catch{f(l)}})(h(l.value,u))}));
