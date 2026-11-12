(function(){
  var root=document.documentElement;
  try{var saved=localStorage.getItem('theme');if(saved==='dark'||saved==='light'){root.setAttribute('data-theme',saved);}}catch(e){}
  function current(){var t=root.getAttribute('data-theme');if(t)return t;return window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
  function wire(){
    var b=document.querySelector('.theme');if(!b)return;
    b.addEventListener('click',function(){var next=current()==='dark'?'light':'dark';root.setAttribute('data-theme',next);try{localStorage.setItem('theme',next);}catch(e){}
      var m=document.querySelector('meta[name=theme-color]');if(m)m.setAttribute('content',next==='dark'?'#0d0f12':'#fafaf7');});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',wire);else wire();
})();
