import{i as l,S as m}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const i={formEl:document.querySelector(".js-search-form"),imgEl:document.querySelector(".js-image-container"),loaderEl:document.querySelector(".loader")};i.formEl.addEventListener("submit",u);function u(e){e.preventDefault();const s=e.target.elements.text.value.trim();if(!s){l.error({position:"topRight",message:"Please enter a search query!"});return}c(!0),p(s).then(o=>{d(o),c(!1),o.hits.length===0&&l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),e.target.elements.text.value=""}).catch(o=>{console.error("Error fetching images:",o),c(!1),f(),l.error({position:"topRight",message:"Failed to fetch images. Please try again later."})})}function f(){i.imgEl.innerHTML=""}function p(e){const s="https://pixabay.com/api/",o="42295751-6e09ed05d50a99192d667c3e9",n=new URLSearchParams({key:o,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${s}?${n.toString()}`;return fetch(t).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()})}function g(e){return`
        <a href="${e.largeImageURL}" class="photo-container" data-lightbox="photos">
            <img
                src="${e.webformatURL}"
                alt="${e.tags}"
                class="photo"
            />
            
            <div class="photo-body">
                <p class="photo-name">Likes ${e.likes}</p>
                <p class="photo-name">Views ${e.views}</p>
                <p class="photo-name">Comments ${e.comments}</p>
                <p class="photo-name">Downloads ${e.downloads}</p>
            </div>
        </a>
    `}function d(e){i.imgEl.innerHTML=e.hits.map(o=>g(o)).join(""),new m('[data-lightbox="photos"]',{captionDelay:250,captionsData:"alt"}).refresh()}function c(e){i.loaderEl.style.display=e?"inline-block":"none"}
//# sourceMappingURL=commonHelpers.js.map
