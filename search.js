(function(){
  const params = new URLSearchParams(location.search);
  const q0 = (params.get('q') || '').trim();
  const input = document.getElementById('q');
  const results = document.getElementById('results');
  const count = document.getElementById('count');
  if(input) input.value = q0;

  function card(g){
    const safeTitle = g.title || 'Game';
    const safeDesc = g.desc || '';
    const img = g.img || '/fto.png';
    const href = g.url || '#';
    return `
      <div class="card">
        <a href="${href}"><img src="${img}" alt="${safeTitle} thumbnail" loading="lazy"></a>
        <div class="pad">
          <h3><a href="${href}">${safeTitle}</a></h3>
          <p>${safeDesc}</p>
          ${g.category ? `<div style="margin-top:10px"><a class="badge" href="${g.category_url || '#'}">${g.category}</a></div>` : ``}
        </div>
      </div>
    `;
  }

  function render(q){
    const list = (window.KIDGAS_GAMES || []).slice();
    const qq = (q || '').toLowerCase();
    const filtered = !qq ? list : list.filter(g=>{
      return (g.title||'').toLowerCase().includes(qq) ||
             (g.desc||'').toLowerCase().includes(qq) ||
             (g.category||'').toLowerCase().includes(qq);
    });
    results.innerHTML = filtered.map(card).join('');
    if(count) count.textContent = `${filtered.length} result(s)` + (qq ? ` for “${q}”` : '');
  }

  render(q0);
  if(input) input.addEventListener('input', ()=>render(input.value.trim()));
})();