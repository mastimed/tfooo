(function(){
  const menuBtn = document.getElementById('menuBtn');
  const drawer = document.getElementById('drawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const closeBtn = document.getElementById('drawerClose');

  function openDrawer(){
    if(!drawer) return;
    drawer.setAttribute('aria-hidden','false');
    if(menuBtn) menuBtn.setAttribute('aria-expanded','true');
    document.body.style.overflow='hidden';
  }
  function closeDrawer(){
    if(!drawer) return;
    drawer.setAttribute('aria-hidden','true');
    if(menuBtn) menuBtn.setAttribute('aria-expanded','false');
    document.body.style.overflow='';
  }

  if(menuBtn) menuBtn.addEventListener('click', openDrawer);
  if(backdrop) backdrop.addEventListener('click', closeDrawer);
  if(closeBtn) closeBtn.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeDrawer(); });

  // Simple in-page filtering for grids (title + description)
  const input = document.getElementById('siteSearch');
  if(input){
    input.addEventListener('input', ()=>{
      const q = input.value.trim().toLowerCase();
      const cards = document.querySelectorAll('.grid .card');
      if(!cards.length) return;
      cards.forEach(card=>{
        const text = card.innerText.toLowerCase();
        card.style.display = (!q || text.includes(q)) ? '' : 'none';
      });
    });
  }

  // Player UI (game pages): fullscreen + theater + fit/fill
  const PLAYER_KEY_MODE = 'kidgas_player_mode'; // 'fit' | 'fill'
  const PLAYER_KEY_THEATER = 'kidgas_theater';  // '1' | '0'

  function getPlayerWrap(btn){
    return document.getElementById('gamePlayer') || (btn ? btn.closest('.play-frame') : document.querySelector('.play-frame'));
  }

  function setTheater(on){
    document.body.classList.toggle('theater', !!on);
    try{ localStorage.setItem(PLAYER_KEY_THEATER, on ? '1' : '0'); }catch(_){}
  }

  function applyFitHeight(){
    const wrap = getPlayerWrap();
    if(!wrap) return;
    const frame = wrap.querySelector('iframe');
    if(!frame) return;

    const mode = wrap.getAttribute('data-mode') || 'fill';
    if(mode !== 'fit') return;

    const aspect = 16/9;
    const maxH = Math.min(window.innerHeight * 0.82, 980);
    const minH = 420;
    // Use the visible width of the frame container
    const w = Math.max(320, wrap.clientWidth);
    const h = Math.max(minH, Math.min(maxH, Math.round(w / aspect)));
    frame.style.height = h + 'px';
  }

  function setMode(mode){
    const wrap = getPlayerWrap();
    if(!wrap) return;
    wrap.setAttribute('data-mode', mode);
    wrap.classList.toggle('mode-fit', mode === 'fit');
    wrap.classList.toggle('mode-fill', mode === 'fill');

    const frame = wrap.querySelector('iframe');
    if(frame){
      if(mode === 'fill'){
        frame.style.height = ''; // let CSS handle it
      }
    }

    // Active states
    document.querySelectorAll('[data-action="fit"],[data-action="fill"]').forEach(b=>{
      const isOn = b.getAttribute('data-action') === mode;
      b.classList.toggle('is-active', isOn);
      b.setAttribute('aria-pressed', isOn ? 'true' : 'false');
    });

    try{ localStorage.setItem(PLAYER_KEY_MODE, mode); }catch(_){}
    applyFitHeight();
  }

  // Restore persisted settings
  (function restorePlayerPrefs(){
    let mode = 'fill';
    let theater = false;
    try{
      mode = localStorage.getItem(PLAYER_KEY_MODE) || 'fill';
      theater = (localStorage.getItem(PLAYER_KEY_THEATER) === '1');
    }catch(_){}
    setTheater(theater);
    setMode(mode === 'fit' ? 'fit' : 'fill');
  })();

  window.addEventListener('resize', ()=>{ applyFitHeight(); });

  document.addEventListener('click', (e)=> {
    const fs = e.target.closest('[data-action="fullscreen"]');
    if(fs){
      const wrap = getPlayerWrap(fs);
      const frame = wrap ? wrap.querySelector('iframe') : null;
      const target = frame || wrap;
      if(!target) return;
      const req = target.requestFullscreen || target.webkitRequestFullscreen || target.mozRequestFullScreen || target.msRequestFullscreen;
      if(req) req.call(target);
      return;
    }

    const th = e.target.closest('[data-action="theater"]');
    if(th){
      const on = !document.body.classList.contains('theater');
      setTheater(on);
      // Recompute fit height after layout change
      setTimeout(applyFitHeight, 50);
      return;
    }

    const fit = e.target.closest('[data-action="fit"]');
    if(fit){ setMode('fit'); return; }

    const fill = e.target.closest('[data-action="fill"]');
    if(fill){ setMode('fill'); return; }
  });
})();

  // Horizontal tag strip arrows
  document.querySelectorAll('.tag-strip').forEach(strip=>{
    const row = strip.querySelector('.tags');
    if(!row) return;
    strip.querySelectorAll('[data-scroll]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const dir = btn.getAttribute('data-scroll');
        const amt = Math.max(240, Math.round(row.clientWidth * 0.8));
        row.scrollBy({left: dir==='left' ? -amt : amt, behavior:'smooth'});
      });
    });
  });
