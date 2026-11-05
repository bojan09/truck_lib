const galleryUrl = new URL('../data/galleries.json', import.meta.url);
const topicsUrl = new URL('../data/topics.json', import.meta.url);

const ui = {
  search: document.querySelector('#search-input'),
  clear: document.querySelector('#clear-search'),
  filters: document.querySelector('#category-filters'),
  count: document.querySelector('#result-count'),
  grid: document.querySelector('#gallery-grid'),
  empty: document.querySelector('#empty-state'),
  detail: document.querySelector('#detail-dialog'),
  detailContent: document.querySelector('#detail-content'),
  zoom: document.querySelector('#zoom-dialog'),
  zoomFigure: document.querySelector('#zoom-figure')
};

const groups = [
  {label:'Vehicles & configurations', match:['Vehicles and configurations']},
  {label:'Engine, powertrain & chassis', match:['Engine, powertrain, chassis']},
  {label:'Wheels, axles & suspension', match:['Wheels, axles, brakes, suspension']},
  {label:'Trailer equipment & cargo', match:['Trailer equipment and cargo']},
  {label:'Identification & safety', match:['Identification, safety, driver experience','Freight operations and safety']},
  {label:'Freight operations & finance', match:['Freight operations','Freight operations and finance','Freight operations and documents']},
  {label:'Diagnostics & maintenance', match:['Vehicle diagnostics','Maintenance and parts']}
];

let topics = [];
let galleries = [];
let galleryById = new Map();
let topicById = new Map();
let activeCategory = 'All topics';
let returnWithHistory = false;
let priorFocus = null;
let zoomReturnFocus = null;

const normalise = value => String(value ?? '').toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
const escapeText = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const topicUrl = id => `#gallery/${encodeURIComponent(id)}`;

function buildSearchText(topic, gallery) {
  return normalise([
    topic.title, topic.category, ...(topic.tags ?? []),
    gallery?.summary, gallery?.note,
    ...(gallery?.items ?? []).flatMap(item => [item.label, item.caption, item.placement]),
    ...(gallery?.facts ? Object.values(gallery.facts) : []),
    ...(gallery?.details ?? []).flatMap(section => [section.heading, section.text])
  ].join(' '));
}

function matchesQuery(topic, gallery, query) {
  const haystack = buildSearchText(topic, gallery);
  if (query.length <= 3) return haystack.split(/[^a-z0-9×]+/).includes(query);
  return haystack.includes(query);
}

function createFilterButtons() {
  const categories = ['All topics', ...new Set(topics.map(topic => topic.category))];
  ui.filters.replaceChildren();
  categories.forEach(category => {
    const button = document.createElement('button');
    button.className = 'filter-chip';
    button.type = 'button';
    button.setAttribute('aria-pressed', String(category === activeCategory));
    const count = category === 'All topics' ? topics.length : topics.filter(topic => topic.category === category).length;
    button.append(document.createTextNode(category));
    const badge = document.createElement('span');
    badge.className = 'chip-count';
    badge.textContent = String(count);
    button.append(badge);
    button.addEventListener('click', () => {
      activeCategory = category;
      renderCollection();
      createFilterButtons();
    });
    ui.filters.append(button);
  });
}

function createReadyCard(topic, gallery, index) {
  const article = document.createElement('article');
  article.className = 'gallery-card';
  const button = document.createElement('a');
  button.href = topicUrl(topic.slug);
  button.className = 'card-open';
  button.setAttribute('aria-label', `Open visual guide: ${topic.title}`);

  const visual = document.createElement('span');
  visual.className = 'card-visual';
  const image = document.createElement('img');
  image.src = gallery.items[0].image;
  image.alt = gallery.items[0].alt;
  image.width = 520;
  image.height = 300;
  image.loading = 'lazy';
  const number = document.createElement('span');
  number.className = 'card-index';
  number.textContent = `GUIDE 0${String(index + 1).padStart(1,'0')}`;
  const badge = document.createElement('span');
  badge.className = 'card-type';
  badge.textContent = 'Visual guide';
  visual.append(image, number, badge);

  const body = document.createElement('span');
  body.className = 'card-body';
  const category = document.createElement('span');
  category.className = 'card-category';
  category.textContent = topic.category;
  const title = document.createElement('h3');
  title.className = 'card-title';
  title.textContent = topic.title;
  const desc = document.createElement('span');
  desc.className = 'card-description';
  desc.textContent = gallery.summary;
  const foot = document.createElement('span');
  foot.className = 'card-foot';
  const itemCount = document.createElement('span');
  itemCount.textContent = `${gallery.items.length} labeled views`;
  const arrow = document.createElement('span');
  arrow.className = 'card-arrow';
  arrow.setAttribute('aria-hidden','true');
  arrow.textContent = '↗';
  foot.append(itemCount, arrow);
  body.append(category, title, desc, foot);
  button.append(visual, body);
  article.append(button);
  return article;
}

function createPlannedCard(topic) {
  const article = document.createElement('a');
  article.className = 'planned-result';
  article.href = topicUrl(topic.slug);
  const top = document.createElement('span');
  top.className = 'planned-marker';
  top.textContent = 'Planned topic';
  const title = document.createElement('h3');
  title.textContent = topic.title;
  const category = document.createElement('p');
  category.textContent = topic.category;
  const foot = document.createElement('span');
  foot.className = 'card-foot';
  foot.textContent = 'OPEN ROADMAP ENTRY  ↗';
  article.append(top, title, category, foot);
  article.setAttribute('aria-label', `${topic.title}, planned topic`);
  return article;
}

function renderCollection() {
  const query = normalise(ui.search.value);
  ui.clear.hidden = !ui.search.value;
  const candidates = topics.filter(topic => {
    if (activeCategory !== 'All topics' && topic.category !== activeCategory) return false;
    if (!query) return activeCategory === 'All topics' ? topic.status === 'ready' : true;
    return matchesQuery(topic, galleryById.get(topic.slug), query);
  });
  const shownReady = candidates.filter(topic => topic.status === 'ready');
  const shownPlanned = candidates.filter(topic => topic.status !== 'ready');
  ui.grid.replaceChildren();
  shownReady.forEach((topic, index) => ui.grid.append(createReadyCard(topic, galleryById.get(topic.slug), index)));
  shownPlanned.forEach(topic => ui.grid.append(createPlannedCard(topic)));
  ui.empty.hidden = candidates.length > 0;
  ui.count.textContent = query || activeCategory !== 'All topics'
    ? `${candidates.length} ${candidates.length === 1 ? 'topic' : 'topics'} · ${shownReady.length} photo guides`
    : `${shownReady.length} photo guides · ${topics.length} topics in the library`;
}

function makeDetailMarkup(topic, gallery) {
  if (!gallery) {
    return `<div class="planned-detail">
      <span class="planned-badge"><span></span> Planned topic</span>
      <h2 id="detail-title">${escapeText(topic.title)}</h2>
      <p>This subject is in the Truck Library roadmap. Its visual examples, explanations, and source review will be added in a later phase.</p>
      <p class="planned-next">CATEGORY · ${escapeText(topic.category)}<br>Coverage status · Planned</p>
    </div>`;
  }
  const facts = Object.entries(gallery.facts).map(([key, value]) => `<div class="fact"><h3>${key === 'what' ? 'What it is' : key === 'does' ? 'What it explains' : 'Where it fits'}</h3><p>${escapeText(value)}</p></div>`).join('');
  const items = gallery.items.map((item, index) => `<article class="detail-item">
    <h4 class="detail-item-label">${escapeText(item.label)}</h4>
    <button class="zoom-trigger" type="button" data-zoom="${index}" aria-label="Enlarge photograph: ${escapeText(item.label)}">
      <img src="${escapeText(item.image)}" alt="${escapeText(item.alt)}" width="520" height="300">
      <span class="zoom-cue" aria-hidden="true">＋ VIEW</span>
    </button>
    <div class="detail-item-copy"><p>${escapeText(item.caption)}</p><p class="item-placement">${escapeText(item.placement)} · ${escapeText(item.imageType)}</p><p class="photo-credit">${escapeText(item.credit ?? 'Credit listed in image sources')} · <a href="${escapeText(item.source ?? '#')}" target="_blank" rel="noreferrer">Image source ↗</a></p></div>
  </article>`).join('');
  const sources = gallery.sources.map(source => `<li><a href="${escapeText(source.url)}" target="_blank" rel="noreferrer">${escapeText(source.title)} ↗</a></li>`).join('');
  const related = (gallery.related ?? []).map(id => topicById.get(id)).filter(Boolean).map(item => `<a class="related-link" href="${topicById.get(item.slug)?.status === 'ready' ? topicUrl(item.slug) : '#library'}">${escapeText(item.title)} ↗</a>`).join('');
  return `<article class="detail-content">
    <p class="detail-kicker">${escapeText(topic.category)} · visual guide</p>
    <h2 id="detail-title">${escapeText(topic.title)}</h2>
    <p class="detail-intro">${escapeText(gallery.summary)}</p>
    <div class="detail-facts">${facts}</div>
    ${(gallery.details ?? []).map(section => `<section class="fact"><h3>${escapeText(section.heading)}</h3><p>${escapeText(section.text)}</p></section>`).join('')}
    <div class="detail-subhead"><h3>Compare the views</h3><span>${gallery.items.length} PHOTOGRAPHS · SELECT TO ENLARGE</span></div>
    <div class="detail-items detail-items-${gallery.items.length}">${items}</div>
    <div class="notice-box"><span class="notice-label">Important distinction</span><p>${escapeText(gallery.note)}</p></div>
    <div class="detail-subhead"><h3>Sources &amp; further reading</h3><span>OPENABLE REFERENCES</span></div>
    <ul class="source-list">${sources}</ul>
    <div class="detail-subhead"><h3>Related topics</h3></div>
    <div class="detail-related">${related}</div>
  </article>`;
}

function openZoom(item) {
  zoomReturnFocus = document.activeElement;
  const image = document.createElement('img');
  image.src = item.image;
  image.alt = item.alt;
  image.width = 520;
  image.height = 300;
  const caption = document.createElement('figcaption');
  caption.textContent = `${item.label} · ${item.caption}`;
  ui.zoomFigure.replaceChildren(image, caption);
  ui.zoom.showModal();
  document.querySelector('#zoom-close').focus();
}

function renderDetail(slug, fromHistory = false) {
  const topic = topicById.get(slug);
  if (!topic) {
    if (ui.detail.open) ui.detail.close();
    return;
  }
  const gallery = galleryById.get(slug);
  ui.detailContent.innerHTML = makeDetailMarkup(topic, gallery);
  if (!ui.detail.open) ui.detail.showModal();
  ui.detail.querySelector('.close-detail').focus();
  ui.detailContent.querySelectorAll('[data-zoom]').forEach(button => {
    button.addEventListener('click', () => openZoom(gallery.items[Number(button.dataset.zoom)]));
  });
}

function routeFromHash() {
  const match = window.location.hash.match(/^#gallery\/([^/]+)$/);
  if (match) {
    let slug = match[1];
    try { slug = decodeURIComponent(slug); } catch { /* leave invalid slug as-is */ }
    renderDetail(slug);
  } else if (ui.detail.open) {
    ui.detail.close();
  }
}

function returnToCollection() {
  if (window.location.hash.startsWith('#gallery/')) {
    if (returnWithHistory) {
      history.back();
    } else {
      history.replaceState(null, '', `${window.location.pathname}${window.location.search}#library`);
      if (ui.detail.open) ui.detail.close();
      document.querySelector('#library').scrollIntoView({block:'start'});
    }
  } else if (ui.detail.open) {
    ui.detail.close();
  }
}

async function start() {
  try {
    const [galleryResponse, topicResponse] = await Promise.all([fetch(galleryUrl), fetch(topicsUrl)]);
    if (!galleryResponse.ok || !topicResponse.ok) throw new Error('The local topic catalog could not be loaded.');
    [galleries, topics] = await Promise.all([galleryResponse.json(), topicResponse.json()]);
    galleryById = new Map(galleries.map(gallery => [gallery.slug, gallery]));
    topicById = new Map(topics.map(topic => [topic.slug, topic]));
    if (topics.length !== 63) throw new Error(`Expected 63 coverage topics, found ${topics.length}.`);
    createFilterButtons();
    renderCollection();
    routeFromHash();
  } catch (error) {
    ui.count.textContent = 'Topic catalog unavailable';
    ui.empty.hidden = false;
    ui.empty.querySelector('h3').textContent = 'The library could not load';
    ui.empty.querySelector('p').textContent = `${error.message} Run a local static server and reload this page.`;
  }
}

ui.search.addEventListener('input', renderCollection);
ui.clear.addEventListener('click', () => { ui.search.value = ''; renderCollection(); ui.search.focus(); });
document.querySelector('#reset-filters').addEventListener('click', () => {
  ui.search.value = '';
  activeCategory = 'All topics';
  createFilterButtons();
  renderCollection();
  ui.search.focus();
});
document.querySelector('#search-form').addEventListener('submit', event => event.preventDefault());
document.querySelectorAll('.close-detail').forEach(button => button.addEventListener('click', returnToCollection));
document.querySelector('#dialog-back').addEventListener('click', event => {
  event.preventDefault();
  returnToCollection();
});
document.querySelector('#zoom-close').addEventListener('click', () => ui.zoom.close());
ui.detail.addEventListener('click', event => {
  if (event.target === ui.detail) returnToCollection();
});
ui.zoom.addEventListener('click', event => {
  if (event.target === ui.zoom) ui.zoom.close();
});
ui.detail.addEventListener('close', () => {
  if (window.location.hash.startsWith('#gallery/')) {
    history.replaceState(null, '', `${window.location.pathname}${window.location.search}#library`);
    returnWithHistory = false;
  }
  if (priorFocus?.isConnected) priorFocus.focus();
});
ui.zoom.addEventListener('close', () => {
  if (zoomReturnFocus?.isConnected) zoomReturnFocus.focus();
});
window.addEventListener('hashchange', routeFromHash);
document.addEventListener('click', event => {
  const routeLink = event.target.closest('a[href^="#gallery/"]');
  if (routeLink) {
    returnWithHistory = true;
    priorFocus = routeLink;
  }
});
window.addEventListener('keydown', event => {
  if (event.key === '/' && !ui.detail.open && !ui.zoom.open && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    ui.search.focus();
  }
});

start();
