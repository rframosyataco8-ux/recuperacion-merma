/* App controller - presentation logic */

const App = (() => {
  let currentKey = null;
  let slides = [];
  let idx = 0;
  let chart = null;
  let autoplay = true;
  let segTimer = null;
  let segStart = 0;
  let segRemaining = 5000;
  let paused = false;

  const stage = document.getElementById('stage');
  const segsWrap = document.getElementById('pSegs');
  const playIco = document.getElementById('pPlayIco');

  const DURATIONS = {
    hero: 4500, kpis: 5500, chart: 6500, twocol: 5800, triad: 6200, table: 6800, conclusion: 999999
  };

  function fmt(v, dec, prefix) {
    const s = Number(v).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec });
    return (prefix || '') + s;
  }

  const ICONS = {
    arrow_back: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>',
    chevron_left: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',
    chevron_right: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>',
    arrow_forward: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>',
    replay: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>',
    apps: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>',
    insights: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 8c-1.45 0-2.26 1.71-1.33 3L13 17.5 9.5 14 2 21.5l1.5 1.5L9.5 17l3.5 3.5L21.17 12c.93-1.29.12-3-1.33-3h.16zM4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4z"/></svg>',
    flag: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>',
    scale: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C9.24 3 7 5.24 7 8c0 1.5.65 2.84 1.68 3.76L5.5 18H3v2h6v-2H7.74l1.76-3.24c.5.15 1.02.24 1.5.24.48 0 1-.09 1.5-.24L13.5 18H12v2h6v-2h-2.5l-3.18-6.24C13.35 10.84 14 9.5 14 8c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/></svg>',
    inventory: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 12H9v-2h6v2zm5-7H4V4h16v3z"/></svg>',
    trending: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>',
    payments: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>',
    science: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.8 18.4L14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z"/></svg>',
    lightbulb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>'
  };

  function icon(name) { return ICONS[name] || ''; }

  function buildSelector() {
    const wrap = document.getElementById('cardsWrap');
    LINE_ORDER.forEach(key => {
      const p = PRODUCTS[key];
      const t = p.tile;
      const card = document.createElement('article');
      card.className = 'card';
      card.dataset.key = key;
      card.onclick = () => open(key);
      card.innerHTML = `
        <div class="card-num">${t.num}</div>
        <h2 class="card-title">${t.title}</h2>
        <p class="card-desc">${t.desc}</p>
        <div class="card-stats">
          <div><div class="card-stat-val">${t.stat1.val}</div><div class="card-stat-lbl">${t.stat1.lbl}</div></div>
          <div><div class="card-stat-val">${t.stat2.val}</div><div class="card-stat-lbl">${t.stat2.lbl}</div></div>
        </div>
        <div class="card-cta">Ver resultados ${icon('arrow_forward')}</div>`;
      wrap.appendChild(card);
    });
  }

  function open(key) {
    currentKey = key;
    const p = PRODUCTS[key];
    slides = p.slides;
    idx = 0;
    document.getElementById('selector').classList.add('hide');
    const pres = document.getElementById('presentation');
    pres.classList.add('show');
    pres.style.setProperty('--pres-accent', p.accent);
    document.getElementById('pTag').textContent = p.tag;
    document.getElementById('pName').textContent = p.name;
    buildSegs();
    autoplay = true;
    playIco.innerHTML = icon('pause');
    goTo(0);
  }

  function backToSelector() {
    stopSeg();
    if (chart) { chart.destroy(); chart = null; }
    document.getElementById('presentation').classList.remove('show');
    document.getElementById('selector').classList.remove('hide');
  }

  function buildSegs() {
    segsWrap.innerHTML = '';
    slides.forEach((_, i) => {
      const seg = document.createElement('div');
      seg.className = 'p-seg';
      seg.innerHTML = '<div class="p-seg-fill"></div>';
      seg.onclick = () => { stopSeg(); goTo(i); };
      segsWrap.appendChild(seg);
    });
  }

  function updateSegs() {
    segsWrap.querySelectorAll('.p-seg').forEach((seg, i) => {
      seg.classList.remove('active', 'done');
      const fill = seg.querySelector('.p-seg-fill');
      fill.style.transition = 'none';
      if (i < idx) seg.classList.add('done');
      else if (i === idx) { seg.classList.add('active'); fill.style.width = '0%'; }
      else fill.style.width = '0%';
    });
  }

  function stopSeg() { if (segTimer) cancelAnimationFrame(segTimer); segTimer = null; }

  function runSeg(duration) {
    stopSeg();
    if (duration >= 999999) return;
    segStart = performance.now();
    segRemaining = duration;
    const activeFill = segsWrap.querySelector('.p-seg.active .p-seg-fill');
    function frame(now) {
      if (paused) { segStart = now - (duration - segRemaining); segTimer = requestAnimationFrame(frame); return; }
      const elapsed = now - segStart;
      segRemaining = Math.max(0, duration - elapsed);
      if (activeFill) activeFill.style.width = Math.min(100, (elapsed / duration) * 100) + '%';
      if (elapsed >= duration) { if (autoplay) nextSlide(true); return; }
      segTimer = requestAnimationFrame(frame);
    }
    segTimer = requestAnimationFrame(frame);
  }

  function goTo(i) {
    idx = Math.max(0, Math.min(slides.length - 1, i));
    if (chart) { chart.destroy(); chart = null; }
    const slide = slides[idx];
    stage.innerHTML = renderSlide(slide);
    updateSegs();
    requestAnimationFrame(() => {
      const el = stage.querySelector('.slide');
      void el.offsetWidth;
      el.classList.add('active');
      postRender(slide, el);
    });
    runSeg(DURATIONS[slide.kind] || 5000);
  }

  function nextSlide() { if (idx >= slides.length - 1) { stopSeg(); return; } goTo(idx + 1); }
  function prevSlide() { stopSeg(); goTo(Math.max(0, idx - 1)); }

  function toggleAutoplay() {
    autoplay = !autoplay;
    paused = !autoplay;
    playIco.innerHTML = autoplay ? icon('pause') : icon('play');
    if (autoplay) runSeg(DURATIONS[slides[idx].kind] || 5000);
    else stopSeg();
  }

  function stopAndGo(i) { stopSeg(); goTo(i); }

  document.addEventListener('keydown', e => {
    if (!document.getElementById('presentation').classList.contains('show')) return;
    if (e.key === 'ArrowRight') { stopSeg(); nextSlide(); }
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === ' ') { e.preventDefault(); toggleAutoplay(); }
    if (e.key === 'Escape') backToSelector();
  });

  let touchX = null;
  document.getElementById('presentation').addEventListener('touchstart', e => { touchX = e.touches[0].clientX; });
  document.getElementById('presentation').addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 60) dx < 0 ? (stopSeg(), nextSlide()) : prevSlide();
    touchX = null;
  });

  function renderSlide(s) {
    let inner = '';
    if (s.kind === 'hero') inner = tplHero(s);
    else if (s.kind === 'kpis') inner = tplKpis(s);
    else if (s.kind === 'chart') inner = tplChart(s);
    else if (s.kind === 'twocol') inner = tplTwocol(s);
    else if (s.kind === 'triad') inner = tplTriad(s);
    else if (s.kind === 'table') inner = tplTable(s);
    else if (s.kind === 'conclusion') inner = tplConclusion(s);
    return `<div class="slide ${s.kind}-slide">${inner}</div>`;
  }

  function tplHero(s) {
    return `<div class="kicker reveal" style="transition-delay:.05s">${s.kicker}</div>
      <h2 class="slide-h reveal" style="transition-delay:.12s">${s.title}</h2>
      <p class="slide-p reveal" style="transition-delay:.22s">${s.sub}</p>
      <div class="hero-chips">${s.chips.map((c, i) => `<span class="chip reveal" style="transition-delay:${0.32 + i * 0.07}s">${c.txt}</span>`).join('')}</div>
      <button class="btn-filled reveal" style="transition-delay:.6s" onclick="App.stopAndGo(1)">Ver resumen ejecutivo ${icon('arrow_forward')}</button>`;
  }

  function tplKpis(s) {
    return `<div class="kicker reveal" style="transition-delay:.03s">${s.kicker}</div>
      <h2 class="slide-h reveal" style="transition-delay:.1s">${s.title}</h2>
      <div class="kpi-grid">${s.items.map((k, i) => `<div class="kpi-card reveal" style="transition-delay:${0.18 + i * 0.08}s">
            <div class="kpi-ico">${icon(['scale','inventory','trending','payments'][i] || 'insights')}</div>
            <div class="kpi-val" data-target="${k.val}" data-dec="${k.dec ?? 0}" data-prefix="${k.prefix || ''}">0<span class="u">${k.unit || ''}</span></div>
            <div class="kpi-lbl">${k.label}</div><div class="kpi-foot">${k.foot}</div></div>`).join('')}</div>`;
  }

  function tplChart(s) {
    return `<div class="kicker reveal" style="transition-delay:.03s">${s.kicker}</div>
      <h2 class="slide-h reveal" style="transition-delay:.1s">${s.title}</h2>
      <p class="slide-p reveal" style="transition-delay:.18s">${s.sub}</p>
      <div class="chart-legend reveal" style="transition-delay:.24s">${s.datasets.map(d => `<span class="leg"><i style="background:${d.color}"></i>${d.label}</span>`).join('')}</div>
      <div class="chart-box reveal" style="transition-delay:.3s"><canvas id="mainChart"></canvas></div>`;
  }

  function tplTwocol(s) {
    function block(b, delay) {
      return `<div class="info-card reveal" style="transition-delay:${delay}s"><div class="info-head"><div class="info-ico">${icon(b.title.includes('Ideas') ? 'lightbulb' : 'science')}</div>
            <div><h4>${b.title}</h4><div class="sub">${b.sub}</div></div></div>
          <ul class="info-list">${b.items.map(it => `<li><b>${it.text}</b><span class="status">${it.status}</span></li>`).join('')}</ul></div>`;
    }
    return `<div class="kicker reveal" style="transition-delay:.03s">${s.kicker}</div><h2 class="slide-h reveal" style="transition-delay:.1s">${s.title}</h2>
      <div class="col-grid">${block(s.left, 0.2)}${block(s.right, 0.32)}</div>`;
  }

  function tplTriad(s) {
    return `<div class="kicker reveal" style="transition-delay:.03s">${s.kicker}</div><h2 class="slide-h reveal" style="transition-delay:.1s">${s.title}</h2>
      <p class="slide-p reveal" style="transition-delay:.18s">${s.sub}</p>
      <div class="tri-grid">${s.cols.map((c, i) => `<div class="info-card reveal" style="transition-delay:${0.26 + i * 0.1}s">
            <div class="info-head"><div class="info-ico">${icon('insights')}</div><div><h4>${c.title}</h4></div></div>
            <ul class="info-list">${c.items.map(t => `<li>${t}</li>`).join('')}</ul></div>`).join('')}</div>`;
  }

  function tplTable(s) {
    return `<div class="kicker reveal" style="transition-delay:.03s">${s.kicker}</div><h2 class="slide-h reveal" style="transition-delay:.1s">${s.title}</h2>
      <p class="slide-p reveal" style="transition-delay:.18s">${s.sub}</p>
      <div class="table-box reveal" style="transition-delay:.26s"><div class="tbl-scroll"><table class="data">
            <thead><tr>${s.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
            <tbody>${s.rows.map((r, i) => `<tr style="transition-delay:${0.08 + i * 0.05}s">${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}
              ${s.totals ? `<tr class="totals" style="transition-delay:${0.15 + s.rows.length * 0.05}s">${s.totals.map(c => `<td>${c}</td>`).join('')}</tr>` : ''}
            </tbody></table></div></div>`;
  }

  function tplConclusion(s) {
    return `<div class="concl reveal" style="transition-delay:.05s"><span class="concl-tag">${icon('flag')} ${s.tag}</span>
        <p class="concl-text">${s.text}</p>
        <div class="concl-chips">${s.chips.map(c => `<span class="concl-chip">${c.lbl}: <b>${c.val}</b></span>`).join('')}</div>
        <div class="concl-actions">
          <button class="btn-filled" onclick="App.stopAndGo(0)">${icon('replay')} Volver a ver</button>
          <button class="btn-outlined" onclick="App.backToSelector()">${icon('apps')} Otro proyecto</button>
        </div></div>`;
  }

  function postRender(s, el) {
    if (s.kind === 'kpis') {
      el.querySelectorAll('.kpi-val').forEach(v => {
        const target = parseFloat(v.dataset.target);
        const dec = parseInt(v.dataset.dec) || 0;
        const prefix = v.dataset.prefix || '';
        const unitEl = v.querySelector('.u');
        const unitHtml = unitEl ? unitEl.outerHTML : '';
        animateCount(v, target, dec, prefix, unitHtml);
      });
    }
    if (s.kind === 'chart') requestAnimationFrame(() => buildChart(s));
  }

  function animateCount(el, target, dec, prefix, unitHtml) {
    const dur = 1300, start = performance.now();
    function frame(now) {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.innerHTML = fmt(target * eased, dec, prefix) + unitHtml;
      if (t < 1) requestAnimationFrame(frame);
      else el.innerHTML = fmt(target, dec, prefix) + unitHtml;
    }
    requestAnimationFrame(frame);
  }

  function buildChart(s) {
    const canvas = document.getElementById('mainChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const gridColor = 'rgba(0,0,0,.06)', textColor = '#7A736C';
    let datasets;
    const scales = {
      x: { grid: { color: gridColor }, ticks: { color: textColor, font: { family: 'Roboto Mono', size: 11 } } },
      y: { grid: { color: gridColor }, ticks: { color: textColor, font: { family: 'Roboto Mono', size: 11 } }, beginAtZero: true }
    };
    if (s.chartType === 'grouped-bar' || s.chartType === 'bar') {
      datasets = s.datasets.map(d => ({ type: 'bar', label: d.label, data: d.data, backgroundColor: d.color, borderRadius: 4, maxBarThickness: 42 }));
    } else if (s.chartType === 'combo') {
      datasets = s.datasets.map(d => d.type === 'line'
        ? { type: 'line', label: d.label, data: d.data, borderColor: d.color, backgroundColor: d.color, yAxisID: 'y1', tension: 0.3, borderWidth: 2.5, pointRadius: 3.5, pointBackgroundColor: d.color }
        : { type: 'bar', label: d.label, data: d.data, backgroundColor: d.color, borderRadius: 3, maxBarThickness: 28 });
      scales.y1 = { position: 'right', grid: { drawOnChartArea: false }, ticks: { color: '#F9A825', font: { family: 'Roboto Mono', size: 11 }, callback: v => v + '%' }, min: 0, max: 70 };
    }
    chart = new Chart(ctx, {
      type: 'bar', data: { labels: s.labels, datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        animation: { duration: 1000, easing: 'easeOutCubic' },
        interaction: { mode: 'index', intersect: false },
        plugins: { legend: { display: false }, tooltip: { backgroundColor: '#1C1B1A', titleColor: '#FFFBFE', bodyColor: '#CDC5BC', borderColor: '#4A4540', borderWidth: 1, padding: 10, titleFont: { family: 'Roboto', weight: 500 }, bodyFont: { family: 'Roboto Mono' } } },
        scales
      }
    });
  }

  buildSelector();
  return { open, backToSelector, nextSlide, prevSlide, toggleAutoplay, stopAndGo };
})();
