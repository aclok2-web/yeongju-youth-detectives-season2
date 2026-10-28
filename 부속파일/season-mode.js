(()=>{'use strict';
const n=Number(document.body.dataset.season),originalEnter=window.enter;
window.enter=function(value){if(Number(value)!==n)return;return originalEnter(n)};
window.renderHome=function(){current=0;const c=C[n],a=S.cases[n];document.getElementById('app').innerHTML=`<section class="hero"><div><div class="label">YOUNGJU / SEASON 0${n}</div><h1>${c.title}</h1><p>${c.sub}</p><p>${c.desc}</p><span class="badge">시즌 ${n} 단독 체험</span><span class="badge">진행 자동 저장</span></div><div class="hero-art">${covers[n-1]}</div></section><section class="card"><h2>시즌 ${n} · ${c.title}</h2><p>${c.intro}</p><p class="small">아이디어 출처 · ${c.authors}</p><div class="row"><button class="primary" onclick="enter(${n})">${a.done?'체험 기록 보기':a.unlocked?'체험 이어하기':'사건 시작하기'} →</button><button onclick="resetSeason(${n})">처음부터 다시</button></div></section>`;};
window.home=function(){closeModal();current=0;renderHome();window.scrollTo(0,0)};
const nav=document.querySelector('header .nav');if(nav){const b=nav.querySelector('button');if(b)b.textContent='시즌 '+n+' 시작 화면';const a=document.createElement('a');a.href='index.html';a.textContent='전체 시즌 목록';}
document.querySelector('.brand .small').textContent=' SEASON 0'+n;
const observer=new MutationObserver(()=>{document.querySelectorAll('button').forEach(b=>{if(b.textContent.includes('시즌 선택'))b.textContent=b.textContent.replaceAll('시즌 선택으로 나가기','시작 화면으로 나가기').replaceAll('시즌 선택으로','시작 화면으로').replaceAll('시즌 선택','시작 화면');});});observer.observe(document.getElementById('app'),{childList:true,subtree:true});
home();
})();
