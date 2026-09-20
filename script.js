const btn=document.querySelector('.menu');
const nav=document.querySelector('.links');
if(btn)btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.querySelectorAll('img:not([loading])').forEach(img=>{if(!img.closest('.hero'))img.loading='lazy';});
