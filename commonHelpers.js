import{a,i as g,S as w}from"./assets/vendor-044cfab3.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();a.defaults.headers.common["x-api-key"]="live_LtgdoXVJ2ceIttAbsWuiz90kH1DvEAu1OgZmbObUcd0nH2MKYoueFgP7AS9qe6kN";const m="https://api.thecatapi.com/v1";function y(){return a(`${m}/breeds`).then(e=>e.data)}function E(e){return a(`${m}/images/search?breed_ids=${e}`).then(n=>n.data).then(n=>{const[r]=n;if(!r)throw new Error(`Breed ${e} not found`);const{url:i}=r,[t]=(r==null?void 0:r.breeds)||[];if(!t)throw new Error(`Breed ${e} not found`);return{...t,url:i}})}function L(){b()}function l(e){const n=document.querySelector(e);if(!n)throw new Error(`Element ${e} select not found`);return n}function S(e){new w({select:".breed-select",data:e,events:{afterChange:([n])=>{A(n.value)}}})}function v(){return l(".select-wrapper")}function $(){return l(".loader")}function h(){return l(".cat-info")}async function b(){s(),u(!1);const e=await y().catch(()=>{p(),s(!1)});S(e.map(({id:n,name:r})=>({text:r,value:n}))),s(!1),u()}async function A(e){s(),d(!1);try{const{url:n,name:r,description:i,temperament:t}=await E(e),o=h();o.innerHTML=`
          <img
            width="400"
            src="${n}"
            alt="${r}"
          />
          <div>
            <h1>${r}</h1>
            <p>
              ${i}
            </p>
            <h3>Temperament</h3>
            <p>${t}</p>
          </div>`,d()}catch{p()}finally{s(!1)}}function f(e,n=!0){n?e.classList.remove("hidden"):e.classList.add("hidden")}function u(e){f(v(),e)}function s(e){f($(),e)}function p(e="Oops! Something went wrong! Try reloading the page!"){g.show({message:e,color:"red",position:"topRight",timeout:!1})}function d(e){f(h(),e)}L();
//# sourceMappingURL=commonHelpers.js.map
