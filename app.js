/* ============================================================
   UYGULAMA MANTIĞI — bu dosyayı değiştirmeniz gerekmez.
   Menü içeriği için data.js dosyasını düzenleyin.
   ============================================================ */

const ICONS = {
  egg: '<path d="M32 6C20 6 12 24 12 36a20 20 0 0040 0C52 24 44 6 32 6z"/><path d="M20 40c2 6 7 10 12 10" stroke-linecap="round"/>',
  steak: '<path d="M14 34c0-11 9-20 20-20 8 0 14 6 14 13 0 8-7 12-15 12-5 0-8 3-8 7 0 5 4 8 9 8-7 3-20-1-20-20z"/><circle cx="24" cy="26" r="2.4" fill="currentColor" stroke="none"/><circle cx="33" cy="21" r="2.4" fill="currentColor" stroke="none"/><circle cx="20" cy="34" r="2.4" fill="currentColor" stroke="none"/>',
  leaf: '<path d="M14 50C14 26 30 12 50 12c0 20-14 36-38 38z"/><path d="M18 46C28 34 36 26 48 16" stroke-linecap="round"/>',
  burger: '<path d="M10 26c0-8 10-14 22-14s22 6 22 14" stroke-linecap="round"/><rect x="9" y="28" width="46" height="7" rx="3.5"/><path d="M11 40h42" stroke-linecap="round"/><path d="M9 47c0 4 4 7 9 7h28c5 0 9-3 9-7" stroke-linecap="round"/>',
  pizza: '<path d="M32 10l24 42H8z"/><circle cx="28" cy="30" r="2.6" fill="currentColor" stroke="none"/><circle cx="36" cy="36" r="2.6" fill="currentColor" stroke="none"/><circle cx="24" cy="42" r="2.6" fill="currentColor" stroke="none"/><path d="M32 10v42" stroke-dasharray="2 4"/>',
  pasta: '<circle cx="32" cy="34" r="20"/><path d="M18 26c4 6 4 12 0 18M28 22c4 8 4 16 0 24M38 22c4 8 4 16 0 24M46 26c-4 6-4 12 0 18" stroke-linecap="round"/>',
  salad: '<path d="M10 34a22 22 0 0044 0z"/><path d="M32 34V14M22 20l6 8M44 18l-8 10" stroke-linecap="round"/>',
  meze: '<circle cx="32" cy="34" r="20"/><circle cx="32" cy="34" r="11" stroke-dasharray="3 4"/>'
};

function svgIcon(name, cls) {
  return `<svg class="${cls || ''}" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3">${ICONS[name] || ICONS.meze}</svg>`;
}

const app = document.getElementById('app');

/* ---------- shared: sticky brand bar + scrollable category tabs ---------- */

function renderTopNav(activeId) {
  const tabs = MENU.map(cat => `
    <button class="tab${cat.id === activeId ? ' tab--active' : ''}" data-id="${cat.id}">
      ${svgIcon(cat.icon, 'tab-icon')}<span>${cat.title}</span>
    </button>`).join('');

  return `
    <div class="topnav">
      <button class="brand-row" data-home="1">
        <img class="brand-mini-logo" src="${RESTAURANT.logo}" alt="${RESTAURANT.name}">
        <span class="brand-mini-name">${RESTAURANT.name}</span>
      </button>
      <div class="tabs-scroll"><div class="tabs-track">${tabs}</div></div>
    </div>`;
}

function wireTopNav() {
  const homeBtn = app.querySelector('[data-home]');
  if (homeBtn) homeBtn.addEventListener('click', () => { location.hash = ''; });
  app.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => { location.hash = `cat/${btn.dataset.id}`; });
  });
  const activeTab = app.querySelector('.tab--active');
  if (activeTab) activeTab.scrollIntoView({ inline: 'center', block: 'nearest' });
}

/* ---------- placeholder art for missing photos ---------- */

function photoOrPlaceholder(image, icon, cls) {
  if (image) return `<img class="${cls}" src="${image}" alt="">`;
  return `<span class="${cls} ${cls}--empty">${svgIcon(icon, 'placeholder-icon')}</span>`;
}

/* ---------- HOME ---------- */

function renderHome() {
  document.title = `${RESTAURANT.name} — Menü`;

  const cards = MENU.map(cat => {
    const count = cat.items ? cat.items.length : cat.groups.reduce((n, g) => n + g.items.length, 0);
    return `
      <button class="hero-card" data-id="${cat.id}">
        ${photoOrPlaceholder(cat.heroImage, cat.icon, 'hero-photo')}
        <span class="hero-overlay">
          <span class="hero-title">${cat.title}</span>
          <span class="hero-count">${count} ürün</span>
        </span>
      </button>`;
  }).join('');

  app.innerHTML = `
    ${renderTopNav(null)}
    <header class="home-header">
      <img class="brand-logo" src="${RESTAURANT.logo}" alt="${RESTAURANT.name} ${RESTAURANT.full || ''}">
      <p class="tagline">${RESTAURANT.tagline}</p>
    </header>
    <div class="hero-list">${cards}</div>
    <footer class="home-footer"><p>${RESTAURANT.note}</p></footer>
  `;

  wireTopNav();
  app.querySelectorAll('.hero-card').forEach(btn => {
    btn.addEventListener('click', () => { location.hash = `cat/${btn.dataset.id}`; });
  });
}

/* ---------- CATEGORY: photo grid ---------- */

function gridItemCard(catId, idx, item, icon, groupIdx) {
  const href = groupIdx === undefined ? `cat/${catId}/${idx}` : `cat/${catId}/g/${groupIdx}/${idx}`;
  const price = item.price ? `<span class="grid-price">${item.price}</span>` : '';
  const tag = item.tag ? `<span class="grid-tag">${item.tag}</span>` : '';
  return `
    <button class="grid-card" data-href="${href}">
      <span class="grid-photo-wrap">
        ${photoOrPlaceholder(item.image, icon, 'grid-photo')}
        ${tag}
      </span>
      <span class="grid-name">${item.name}</span>
      ${price}
    </button>`;
}

function renderCategoryGrid(cat) {
  let body;
  if (cat.items.length) {
    body = `<div class="grid">${cat.items.map((it, i) => gridItemCard(cat.id, i, it, cat.icon)).join('')}</div>`;
  } else {
    body = `<p class="empty-state">Bu bölümdeki ürünler yakında menüde.</p>`;
  }
  const footnote = cat.footnote ? `<p class="footnote">${cat.footnote}</p>` : '';

  app.innerHTML = `
    ${renderTopNav(cat.id)}
    ${categoryHeader(cat)}
    <main class="cat-content">${body}${footnote}</main>
  `;
  wireCommon(cat);
}

/* ---------- CATEGORY: typographic list (breakfast spread) ---------- */

function listItemRow(catId, groupIdx, idx, item) {
  const href = `cat/${catId}/g/${groupIdx}/${idx}`;
  const price = item.price ? `<span class="item-price">${item.price}</span>` : '';
  return `
    <li class="item" data-href="${href}">
      <div class="item-body">
        <div class="item-row">
          <h3 class="item-name">${item.name}</h3>
          ${price}
        </div>
      </div>
    </li>`;
}

function renderCategoryList(cat) {
  const groups = cat.groups.map((g, gi) => `
    <section class="group">
      <h2 class="group-title">${g.name}</h2>
      <ul class="item-list">${g.items.map((it, i) => listItemRow(cat.id, gi, i, it)).join('')}</ul>
    </section>`).join('');

  const hero = `<div class="list-hero">${photoOrPlaceholder(cat.heroImage, cat.icon, 'list-hero-photo')}</div>`;

  app.innerHTML = `
    ${renderTopNav(cat.id)}
    ${categoryHeader(cat)}
    <main class="cat-content cat-content--list">${hero}${groups}</main>
  `;
  wireCommon(cat);
}

function categoryHeader(cat) {
  return `
    <header class="cat-header">
      <span class="cat-header-icon">${svgIcon(cat.icon)}</span>
      <h1>${cat.title}</h1>
      ${cat.subtitle ? `<p class="cat-subtitle">${cat.subtitle}</p>` : ''}
    </header>`;
}

function wireCommon(cat) {
  wireTopNav();
  app.querySelectorAll('[data-href]').forEach(el => {
    el.addEventListener('click', () => { location.hash = el.dataset.href; });
  });
  window.scrollTo(0, 0);
}

/* ---------- ITEM DETAIL ---------- */

function renderItemDetail(cat, item, backHash) {
  document.title = `${item.name} — ${RESTAURANT.name}`;

  const tag = item.tag ? `<span class="detail-tag">${item.tag}</span>` : '';
  const price = item.price ? `<span class="detail-price">${item.price}</span>` : '';
  const desc = item.desc ? `<p class="detail-desc">${item.desc}</p>` : '';
  const ingredients = item.ingredients && item.ingredients.length
    ? `<div class="detail-ingredients">
         <h3>Malzemeler</h3>
         <ul>${item.ingredients.map(x => `<li>${x}</li>`).join('')}</ul>
       </div>`
    : '';

  app.innerHTML = `
    <div class="detail">
      <div class="detail-photo-wrap">
        ${photoOrPlaceholder(item.image, cat.icon, 'detail-photo')}
        <button class="detail-close" aria-label="Kapat">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>
        </button>
        ${tag}
      </div>
      <div class="detail-body">
        <div class="detail-row">
          <h1 class="detail-name">${item.name}</h1>
          ${price}
        </div>
        ${desc}
        ${ingredients}
      </div>
    </div>
  `;

  app.querySelector('.detail-close').addEventListener('click', () => { location.hash = backHash; });
  window.scrollTo(0, 0);
}

/* ---------- ROUTING ---------- */

function route() {
  const parts = location.hash.replace('#', '').split('/').filter(Boolean);

  if (parts[0] !== 'cat') { renderHome(); return; }

  const cat = MENU.find(c => c.id === parts[1]);
  if (!cat) { renderHome(); return; }

  // cat/<id>/g/<groupIdx>/<itemIdx>  -> item detail (grouped)
  if (parts[2] === 'g' && parts[3] !== undefined && parts[4] !== undefined) {
    const group = cat.groups[Number(parts[3])];
    const item = group && group.items[Number(parts[4])];
    if (item) { renderItemDetail(cat, item, `cat/${cat.id}`); return; }
  }
  // cat/<id>/<itemIdx> -> item detail (flat)
  else if (parts[2] !== undefined) {
    const item = cat.items && cat.items[Number(parts[2])];
    if (item) { renderItemDetail(cat, item, `cat/${cat.id}`); return; }
  }

  // cat/<id> -> category page
  if (cat.layout === 'list') renderCategoryList(cat);
  else renderCategoryGrid(cat);
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);
