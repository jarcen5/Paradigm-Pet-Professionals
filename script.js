// Prototype-only interactions: active secondary nav (scroll spy)
(function(){
  const side = document.querySelector('.sidenav');
  if(!side) return;
  const links = Array.from(side.querySelectorAll('a[href^="#"]'));
  const targets = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  function setActive(id){ links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+id)); }
  const obs = new IntersectionObserver((entries) => {
    const visible = entries.filter(e => e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(visible && visible.target && visible.target.id) setActive(visible.target.id);
  }, {rootMargin: "-15% 0px -70% 0px", threshold:[0.1,0.2,0.3,0.4]});
  targets.forEach(t => obs.observe(t));
  if(targets[0]?.id) setActive(targets[0].id);
})();