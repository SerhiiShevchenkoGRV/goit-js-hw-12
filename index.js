import{a as b,S as F,i as c}from"./assets/vendor-BDaiwwc1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const x="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_90092_5)'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.969C7.03867%206.89915%207.12143%206.84374%207.21255%206.80593C7.30366%206.76812%207.40135%206.74866%207.5%206.74866C7.59865%206.74866%207.69633%206.76812%207.78745%206.80593C7.87857%206.84374%207.96133%206.89915%208.031%206.969L12%2010.9395L15.969%206.969C16.0387%206.89927%2016.1215%206.84395%2016.2126%206.80621C16.3037%206.76847%2016.4014%206.74905%2016.5%206.74905C16.5986%206.74905%2016.6963%206.76847%2016.7874%206.80621C16.8785%206.84395%2016.9613%206.89927%2017.031%206.969C17.1007%207.03873%2017.156%207.12151%2017.1938%207.21262C17.2315%207.30373%2017.2509%207.40138%2017.2509%207.5C17.2509%207.59861%2017.2315%207.69626%2017.1938%207.78737C17.156%207.87848%2017.1007%207.96127%2017.031%208.031L13.0605%2012L17.031%2015.969C17.1007%2016.0387%2017.156%2016.1215%2017.1938%2016.2126C17.2315%2016.3037%2017.2509%2016.4014%2017.2509%2016.5C17.2509%2016.5986%2017.2315%2016.6963%2017.1938%2016.7874C17.156%2016.8785%2017.1007%2016.9613%2017.031%2017.031C16.9613%2017.1007%2016.8785%2017.156%2016.7874%2017.1938C16.6963%2017.2315%2016.5986%2017.2509%2016.5%2017.2509C16.4014%2017.2509%2016.3037%2017.2315%2016.2126%2017.1938C16.1215%2017.156%2016.0387%2017.1007%2015.969%2017.031L12%2013.0605L8.031%2017.031C7.96127%2017.1007%207.87848%2017.156%207.78737%2017.1938C7.69626%2017.2315%207.59861%2017.2509%207.5%2017.2509C7.40138%2017.2509%207.30373%2017.2315%207.21262%2017.1938C7.12151%2017.156%207.03873%2017.1007%206.969%2017.031C6.89927%2016.9613%206.84395%2016.8785%206.80621%2016.7874C6.76847%2016.6963%206.74905%2016.5986%206.74905%2016.5C6.74905%2016.4014%206.76847%2016.3037%206.80621%2016.2126C6.84395%2016.1215%206.89927%2016.0387%206.969%2015.969L10.9395%2012L6.969%208.031C6.89915%207.96133%206.84374%207.87857%206.80593%207.78745C6.76812%207.69633%206.74866%207.59865%206.74866%207.5C6.74866%207.40135%206.76812%207.30366%206.80593%207.21255C6.84374%207.12143%206.89915%207.03867%206.969%206.969Z'%20fill='%23FAFAFB'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_90092_5'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",C=async t=>{const l={method:"get",baseURL:"https://pixabay.com/api/",params:{key:"47662740-53400b40c2ec2ca1e86ebf909",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:u,per_page:p}};try{return(await b(l)).data}catch(i){return Promise.reject(i)}};let d,y=!0;const L=(t,r=!1)=>{const l=t.map(({webformatURL:i,largeImageURL:e,tags:s,likes:n,views:P,comments:S,downloads:q})=>`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img class="gallery-image" src="${i}" alt="${s}">
  </a>
  <div class="gallery-item-info">
    <div class="info-row">
      <h2 class="info-title">Likes:</h2>
      <p class="info-value">${n}</p>
    </div>
    <div class="info-row">
      <h2 class="info-title">Views:</h2>
      <p class="info-value">${P}</p>
    </div>
    <div class="info-row">
      <h2 class="info-title">Comments:</h2>
      <p class="info-value">${S}</p>
    </div>
    <div class="info-row">
      <h2 class="info-title">Downloads:</h2>
      <p class="info-value">${q}</p>
    </div>
  </div>
</li>`).join("");if(r?m.insertAdjacentHTML("beforeend",l):m.innerHTML=l,y)y=!1;else{const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}return d?d.refresh():d=new F(".gallery a",{captionsData:"alt",captionDelay:250,overlay:!0}),l},m=document.querySelector(".gallery"),v=document.querySelector(".more-btn");let u=1,p=15;const w=document.querySelector(".form"),M=document.querySelector(".loader"),B=w.querySelector(".search-input");let h="";const f={title:"Error",titleSize:"16px",messageSize:"16px",messageColor:"#fff",color:"#ef4040",position:"topRight",iconUrl:x,theme:"dark"},a=t=>{M.hidden=!t},o=t=>{v.hidden=!t},g=()=>{m.innerHTML=""};a(!1);o(!1);const H=t=>{if(t.preventDefault(),a(!0),h=B.value.trim(),!h){c.show({...f,message:"Please enter a search term!"}),g(),a(!1),o(!1);return}u=1,g(),C(h).then(r=>{a(!1),r.hits.length===0?(g(),c.show({...f,message:"Sorry, there are no images matching your search query. Please try again!"}),o(!1)):(L(r.hits,!1),r.hits.length<p?o(!1):(o(!0),u+=1))}).catch(r=>{a(!1),c.show({...f,message:r.message||"Unknown error"}),o(!1)})},$=()=>{a(!0),o(!1),C(h).then(t=>{a(!1),t.hits.length===0?(c.show({...f,message:"We're sorry, but you've reached the end of search results."}),o(!1)):(L(t.hits,!0),t.hits.length<p?o(!1):(o(!0),u+=1))}).catch(t=>{a(!1),c.show({...f,message:t.message||"Unknown error"}),o(!1)})};w.addEventListener("submit",H);v.addEventListener("click",$);
//# sourceMappingURL=index.js.map
