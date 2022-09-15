(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();const u="2e694d3747ab3b1b808baced05a471ad",d=async e=>{const a=await fetch(e).then(i=>i);if(a.status!==200){const i=`API fetch failed. Code: ${a.status}`;throw a.status==404?(console.error(i),new Error("Incorrect city name")):(console.error(i),new Error(i))}return a},m=(e,a)=>new URL(`http://api.openweathermap.org/data/2.5/forecast?q=${e}&units=metric&appid=${a}`),h=e=>{const a=new Array,i=new Date(e.list[0].dt_txt).getHours();for(let r=0;r<e.list.length;r++){const t=new Date(e.list[r].dt_txt);if(i===t.getHours()){if(a.length===5)break;a.push({time:t,city:e.city.name,country:e.city.country,temperature:{feelsLike:Math.round(e.list[r].main.feels_like),temp:Math.round(e.list[r].main.temp),tempMin:Math.round(e.list[r].main.temp_min),tempMax:Math.round(e.list[r].main.temp_max)},weather:{description:e.list[r].weather[0].description,main:e.list[r].weather[0].main,icon:e.list[r].weather[0].icon}})}}return a},_=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],p=e=>`<li>
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
        ${a.map(i=>p(i)).join("")}
      </ul>`},f=e=>{e.className="searchbar__input_wrong",setTimeout(()=>e.className="searchbar__input",650)},c=document.querySelector("form"),o=document.querySelector(".searchbar__input"),l=document.querySelector(".weatherList");if(!l)throw new Error("Weather container is missing");c==null||c.addEventListener("submit",e=>{e.preventDefault(),(async i=>{try{const r=await(await d(i)).json(),t=h(r);v(l,t)}catch{f(o)}})(m(o.value,u))});
