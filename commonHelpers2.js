import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const r=document.querySelector("form");r.addEventListener("submit",o=>{o.preventDefault();const e=Number(document.querySelector('input[name="delay"]').value),t=document.querySelector('input[name="state"]:checked').value;new Promise((m,i)=>{setTimeout(()=>{t==="fulfilled"?m(e):t==="rejected"&&i(e)},e)}).then(()=>{s.show({message:`✅ Fulfilled promise in ${e}ms`})}).catch(()=>{s.show({message:`❌ Rejected promise in ${e}ms`})})});
//# sourceMappingURL=commonHelpers2.js.map
