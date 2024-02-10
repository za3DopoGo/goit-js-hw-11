import{i as a,S as l}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const c={formEl:document.querySelector(".js-search-form"),imgEl:document.querySelector(".js-image-container"),loaderEl:document.querySelector(".loader")};c.formEl.addEventListener("submit",m);function m(t){t.preventDefault();const s=t.target.elements.text.value.trim();if(!s){a.error({position:"topRight",message:"Please enter a search query!"});return}u(s).then(o=>{p(o),o.hits.length===0&&a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),t.target.elements.text.value=""}).catch(o=>{console.error("Error fetching images:",o),a.error({position:"topRight",message:"Failed to fetch images. Please try again later."})})}function u(t){const s="https://pixabay.com/api/",o="42295751-6e09ed05d50a99192d667c3e9",n=new URLSearchParams({key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}?${n.toString()}`;return fetch(e).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()})}function f(t){return`
        <a href="${t.largeImageURL}" class="photo-container" data-lightbox="photos">
            <img
                src="${t.webformatURL}"
                alt="${t.tags}"
                class="photo"
            />
            <div class="photo-body">
                <p class="photo-name">Likes ${t.likes}</p>
                <p class="photo-name">Views ${t.views}</p>
                <p class="photo-name">Comments ${t.comments}</p>
                <p class="photo-name">Downloads ${t.downloads}</p>
            </div>
        </a>
    `}function p(t){c.imgEl.innerHTML=t.hits.map(o=>f(o)).join(""),new l('[data-lightbox="photos"]').refresh()}
//# sourceMappingURL=commonHelpers.js.map
