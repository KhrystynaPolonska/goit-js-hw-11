import{a as f,S as m,i}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="25786434-348adb767e319176b4ad356ea",y="https://pixabay.com/api/";async function g(a){const r={key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(y,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(a){const r=a.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:d,downloads:u})=>`
      <li class="gallery-item">
        <a href="${n}" class="gallery-link">
          <img src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${s}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${u}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const v=document.querySelector(".form");v.addEventListener("submit",async a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim();if(!r){i.error({message:"Please enter a search term!"});return}L(),w();try{const o=await g(r);if(o.hits.length===0){i.error({message:"Sorry, no images found. Try again!"});return}b(o.hits)}catch{i.error({message:"Something went wrong!"})}finally{S()}});
//# sourceMappingURL=index.js.map
