const projects = {
  "wetland": {
    "title": "栖游 · 公园导览 App",
    "english": "PARK COMPANION",
    "category": "移动端 UI",
    "image": "park-ui.jpg",
    "year": "概念示例",
    "scale": "发现页 / 路线详情 / 游览反馈",
    "type": "UI 概念练习",
    "next": "courtyard",
    "intro": "从风景园林的游线思维出发，把“去哪里、走多久、是否适合我”转化为清晰的路线选择界面。此案例为网站搭建的设计示例，尚无真实调研或上线数据。",
    "challenge": "假设用户想利用短暂空闲逛公园，却难以比较路线时长与适用场景。设计目标是让选择依据出现在行动之前，减少反复查找。",
    "strategies": [
      ["先给决策信息", "路线卡片优先展示距离、预计用时与路况，让用户在进入详情前完成初步判断。"],
      ["把操作分清主次", "筛选切换内容，路线卡进入详情，主按钮开始游览；收藏作为次级操作。"],
      ["保持组件一致", "以深绿主按钮、浅色信息面板和统一圆角建立视觉节奏，同时用文字标明选中与完成状态。"]
    ],
    "process": "核心路径：选择游览偏好 → 浏览路线 → 查看详情 → 开始游览。以下原型展示筛选、详情和开始反馈；路线数据为演示，不提供真实定位或导航。",
    "reflection": "下一步需要验证用户是否理解筛选标签、能否快速找到时长，以及在户外强光下能否读清界面。还需补充无路线、定位拒绝与行程中断等状态。"
  },
  "courtyard": {
    "title": "植间 · 植物展览网站",
    "english": "BOTANICAL EDITORIAL",
    "category": "网页 UI",
    "image": "exhibit-ui.jpg",
    "year": "概念示例",
    "scale": "桌面端 / 移动端",
    "type": "响应式界面概念",
    "next": "garden",
    "intro": "以植物展览为内容，探索兼顾编辑感与实用信息的网站界面。桌面端强调图文对照，移动端优先保持阅读顺序与操作可达性。",
    "challenge": "假设观众既想了解展览主题，也需要快速找到参观信息。页面应同时服务“被内容吸引”和“准备出发”两种任务。",
    "strategies": [
      ["让内容各就其位", "首屏建立展览主题，再组织植物故事与参观指南，避免所有内容竞争同一层级。"],
      ["视觉服务阅读", "采用深绿文字、清晰留白和植物形态，保持正文对比度，主按钮使用实色以强调行动。"],
      ["移动端重新组织", "把桌面的图文双栏转为单栏，保留主题、简介、图片和主操作的阅读顺序。"]
    ],
    "process": "页面结构：展览主题 → 展览介绍 → 植物故事 → 时间与地点。以下对比展示同一内容在两种屏幕中的排列方式，尚未连接预约或票务服务。",
    "reflection": "后续应使用真实展览内容验证标题长度、图片裁切和信息密度，并测试键盘导航及移动端触控目标。没有实际测试前，不宣称转化率提升。"
  },
  "garden": {
    "title": "时序 · 会呼吸的花园",
    "english": "SEASONS IN MOTION",
    "category": "空间与视觉",
    "image": "garden.jpg",
    "year": "2025",
    "scale": "约 900 平方米（设定）",
    "type": "补充概念作品",
    "next": "wetland",
    "intro": "以四季更替为花园的主角，用观赏草、宿根花卉与疏林形成富有层次的植物空间。让散步的人感知风、光和植物生长的节奏。",
    "challenge": "花园不应只在盛花期好看。这个练习关注花期之外的形态与质感，希望在萌芽、盛放、结实和休眠之间建立连贯的景观体验。",
    "strategies": [
      ["先搭建植物骨架", "以疏林和结构性观赏草建立稳定背景，让季节性花卉自然穿插。"],
      ["让路径放慢脚步", "通过曲折的砾石小径与局部停留点，组织远观、近赏和休憩的节奏。"],
      ["把变化纳入设计", "关注花序、种头、叶色与枯枝形态，延续花园在不同季节的表现。"]
    ],
    "process": "先以高度、质感、花期三个维度组织植物层次，再结合游览路径安排前景、中景与背景。下图为植物空间概念示意；实际种植需按场地气候、土壤和光照重新选种。",
    "reflection": "植物设计是与时间合作。此练习提醒我在效果之外，也考虑生长速度、群落演替与养护投入，让花园的美能够被持续照顾。"
  }
};

const drawings = {
  wetland: `<svg viewBox="0 0 760 300" role="img" aria-labelledby="wetland-diagram"><title id="wetland-diagram">城市林地、慢行栈道、草甸与浅滩的概念空间关系</title><defs><pattern id="water-lines" width="20" height="13" patternUnits="userSpaceOnUse"><path d="M0 9q5-3 10 0t10 0" stroke="#89aaa1" stroke-width=".6" fill="none"/></pattern></defs><path d="M0 0H760V300H0Z" fill="#eef2e7"/><path d="M0 205Q130 125 250 200T500 198T760 153V300H0Z" fill="#c5dad2"/><path d="M0 205Q130 125 250 200T500 198T760 153V300H0Z" fill="url(#water-lines)"/><path d="M-20 154Q125 80 230 148T470 157T785 96" fill="none" stroke="#d1c7ac" stroke-width="22"/><path d="M-20 154Q125 80 230 148T470 157T785 96" fill="none" stroke="#fffef7" stroke-width="17"/><g fill="#a6ba92" stroke="#6f8b60"><circle cx="62" cy="54" r="32"/><circle cx="130" cy="60" r="26"/><circle cx="199" cy="44" r="34"/><circle cx="326" cy="62" r="28"/><circle cx="392" cy="50" r="39"/><circle cx="509" cy="49" r="25"/><circle cx="579" cy="43" r="30"/><circle cx="698" cy="25" r="34"/></g><g stroke="#7b9469" stroke-width="1.5"><path d="m155 205 0-20m-6 17-2-10m15 11 2-11m297 15v-19m-7 18-3-11m18 10 2-14m139-37v-18m-7 17-3-10m18 9 2-13"/></g><g font-family="sans-serif" font-size="15" fill="#375340"><text x="284" y="34">城市林地</text><text x="280" y="132">连续慢行栈道</text><text x="285" y="219">滨水草甸</text><text x="570" y="263">湿地浅滩</text></g><path d="M572 235v-34M324 188v-23" stroke="#607e6b"/></svg>`,
  courtyard: `<svg viewBox="0 0 760 300" role="img" aria-labelledby="court-diagram"><title id="court-diagram">口袋公园通行与树下停留空间的概念平面示意</title><path d="M0 0H760V300H0Z" fill="#edf1e7"/><g fill="#d9c6b8" stroke="#b49d8d"><rect x="34" y="25" width="225" height="44"/><rect x="480" y="25" width="240" height="44"/><rect x="34" y="225" width="270" height="44"/><rect x="530" y="225" width="190" height="44"/></g><path d="M0 153H760" stroke="#cfa68a" stroke-width="52"/><path d="M371 0V300" stroke="#cfa68a" stroke-width="52"/><circle cx="230" cy="140" r="56" fill="#e5e5d1" stroke="#b5baa2" stroke-width="6"/><circle cx="230" cy="140" r="36" fill="#96b082" stroke="#6f8b5b"/><circle cx="562" cy="137" r="44" fill="#a7bc94" stroke="#6f8b5b"/><rect x="466" y="184" width="98" height="15" rx="2" fill="#ab8669"/><rect x="122" y="183" width="75" height="11" rx="2" fill="#bcbba6"/><path d="M0 153H142M309 153H440M625 153H760M371 0V300" stroke="#fff9ed" stroke-width="2" stroke-dasharray="6 5"/><g font-family="sans-serif" font-size="15" fill="#375340"><text x="113" y="53">保留街巷肌理</text><text x="194" y="145">树下停留</text><text x="479" y="218">共享长桌</text><text x="392" y="105">连续通行</text></g></svg>`,
  garden: `<svg viewBox="0 0 760 300" role="img" aria-labelledby="garden-diagram"><title id="garden-diagram">花园乔木、观赏草和宿根花卉的概念植物层次示意</title><path d="M0 0H760V300H0Z" fill="#f0f3e9"/><path d="M0 248Q200 232 390 249T760 240" stroke="#98a382" stroke-width="2"/><g fill="#c4d1ad" stroke="#829767"><ellipse cx="128" cy="80" rx="65" ry="60"/><ellipse cx="244" cy="62" rx="50" ry="44"/><ellipse cx="659" cy="91" rx="54" ry="65"/></g><g stroke="#8b8b70" stroke-width="5"><path d="M128 76v169M244 62v179M659 91v150"/></g><g stroke="#8da071" stroke-width="2" fill="none"><path d="M355 246q-25-81-55-94m55 94q0-113-20-132m20 132q21-96 35-114m-35 114q-6-105 3-142m170 140q-25-81-55-94m55 94q0-113-20-132m20 132q21-96 35-114m-35 114q-6-105 3-142"/></g><g fill="#b8a0b8" stroke="#8a7f9a"><circle cx="421" cy="202" r="8"/><circle cx="440" cy="191" r="8"/><circle cx="462" cy="212" r="8"/><circle cx="191" cy="206" r="8"/><circle cx="211" cy="197" r="8"/></g><g stroke="#81936b"><path d="M421 202v43M440 191v54M462 212v32M191 206v36M211 197v45"/></g><g font-family="sans-serif" font-size="15" fill="#375340"><text x="91" y="278">疏林骨架</text><text x="315" y="278">观赏草层</text><text x="405" y="175">宿根花卉</text><text x="573" y="278">季相与生长</text></g></svg>`
};

const projectDialog = document.querySelector('#project-dialog');
const resumeDialog = document.querySelector('#resume-dialog');
const toast = document.querySelector('#toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}

function openDialog(dialog) {
  dialog.showModal();
  document.body.classList.add('modal-open');
  dialog.scrollTop = 0;
}

document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
});

function openProject(key) {
  const p = projects[key];
  if (!p) return;
  document.querySelector('#project-content').innerHTML = `
    <img class="detail-cover" src="assets/${p.image}" alt="${p.title}的概念设计示意" width="1536" height="1024">
    <div class="detail-content">
      <div class="detail-topline"><span>${p.category} / ${p.year}</span><span>${p.english}</span></div>
      <h2 id="detail-title">${p.title}</h2><p class="detail-intro">${p.intro}</p>
      <dl class="detail-facts"><div><dt>项目类型</dt><dd>${p.type}</dd></div><div><dt>内容范围</dt><dd>${p.scale}</dd></div><div><dt>示例角色</dt><dd>个人设计练习</dd></div><div><dt>内容说明</dt><dd>${key === "garden" ? "概念项目 · AI 配图" : "界面概念 · 非真实委托"}</dd></div></dl>
      <div class="detail-tabs" role="tablist" aria-label="项目内容"><button id="concept-tab" class="detail-tab" role="tab" aria-selected="true" aria-controls="concept-panel" data-panel="concept-panel">设计思路</button><button id="process-tab" class="detail-tab" role="tab" aria-selected="false" aria-controls="process-panel" tabindex="-1" data-panel="process-panel">流程与界面</button><button id="reflection-tab" class="detail-tab" role="tab" aria-selected="false" aria-controls="reflection-panel" tabindex="-1" data-panel="reflection-panel">设计反思</button></div>
      <section id="concept-panel" class="detail-tab-panel" role="tabpanel" aria-labelledby="concept-tab" tabindex="0"><h3>从一个使用问题出发</h3><p>${p.challenge}</p><div class="strategy-list">${p.strategies.map(s => `<article class="strategy-item"><h4>${s[0]}</h4><p>${s[1]}</p></article>`).join('')}</div></section>
      <section id="process-panel" class="detail-tab-panel" role="tabpanel" aria-labelledby="process-tab" tabindex="0" hidden><h3>让思路成为可见的界面</h3><p>${p.process}</p><figure class="drawing-frame">${key === "wetland" ? parkPrototype() : key === "courtyard" ? `<img src="assets/exhibit-ui.jpg" alt="展览网站桌面与移动端布局对比">` : drawings[key]}<figcaption>${key === "garden" ? "空间概念示意 · 非施工图" : "概念演示 · 不含真实业务服务"}</figcaption></figure></section>
      <section id="reflection-panel" class="detail-tab-panel" role="tabpanel" aria-labelledby="reflection-tab" tabindex="0" hidden><h3>设计之后，继续提问</h3><p>${p.reflection}</p></section>
      <div class="detail-bottom"><p>${key === "garden" ? "景观概念示例，配图由 AI 生成。" : "本站生成的 UI 案例示例，待替换为个人真实作品。"}</p><button class="detail-next" data-project="${p.next}">下一个项目：${projects[p.next].title}</button></div>
    </div>`;
  if (!projectDialog.open) openDialog(projectDialog);
  else { projectDialog.scrollTop = 0; projectDialog.querySelector('.dialog-close').focus(); }
}

document.addEventListener('click', event => {
  const projectButton = event.target.closest('[data-project]');
  if (projectButton) openProject(projectButton.dataset.project);
  if (event.target.closest('[data-resume]')) {
    closeMenu();
    openDialog(resumeDialog);
  }
  const tab = event.target.closest('.detail-tab');
  if (tab) activateTab(tab);
});

function activateTab(tab) {
  projectDialog.querySelectorAll('.detail-tab').forEach(button => {
    const active = button === tab;
    button.setAttribute('aria-selected', String(active));
    button.tabIndex = active ? 0 : -1;
  });
  projectDialog.querySelectorAll('.detail-tab-panel').forEach(panel => panel.hidden = panel.id !== tab.dataset.panel);
}

projectDialog.addEventListener('keydown', event => {
  if (!event.target.matches('.detail-tab')) return;
  const tabs = Array.from(projectDialog.querySelectorAll('.detail-tab'));
  const index = tabs.indexOf(event.target);
  let next;
  if (event.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length];
  if (event.key === 'ArrowLeft') next = tabs[(index + tabs.length - 1) % tabs.length];
  if (event.key === 'Home') next = tabs[0];
  if (event.key === 'End') next = tabs[tabs.length - 1];
  if (next) { event.preventDefault(); activateTab(next); next.focus(); }
});

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    let shown = 0;
    document.querySelectorAll('[data-filter]').forEach(filter => {
      filter.classList.toggle('active', filter === button);
      filter.setAttribute('aria-pressed', String(filter === button));
    });
    document.querySelectorAll('.project-card').forEach(card => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
      if (!card.hidden) shown++;
    });
    document.querySelector('.project-grid').classList.toggle('filtered', category !== 'all');
    document.querySelector('#filter-status').textContent = `显示${category === 'all' ? '全部' : button.textContent.trim()} ${shown} 个作品`;
  });
});

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#main-nav');
function closeMenu() {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '打开导航');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
  menu.classList.toggle('open', open);
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => {
  if (menu.classList.contains('open') && !event.target.closest('.site-header')) {
    closeMenu();
  }
});

// Theme switcher
const themeToggle = document.querySelector('#theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';
    if (nextTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try { localStorage.setItem('portfolio-theme', nextTheme); } catch {}
  });
}

// Live Suzhou local time
const timeEl = document.querySelector('#suzhou-time');
function updateSuzhouTime() {
  if (!timeEl) return;
  try {
    timeEl.textContent = new Intl.DateTimeFormat('zh-CN', {
      timeZone: 'Asia/Shanghai',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(new Date());
  } catch {
    timeEl.textContent = 'UTC+8';
  }
}
updateSuzhouTime();
setInterval(updateSuzhouTime, 30000);

// Sticky header state
const siteHeader = document.querySelector('.site-header');
const updateHeaderState = () => {
  siteHeader.classList.toggle('scrolled', window.scrollY > 12);
};
window.addEventListener('scroll', updateHeaderState, { passive: true });
updateHeaderState();

// Active nav link & subtle scroll reveal
const navLinks = Array.from(document.querySelectorAll('#main-nav a[href^="#"]'));
const trackedSections = navLinks
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = '#' + entry.target.id;
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === id));
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  trackedSections.forEach(section => navObserver.observe(section));

  const revealTargets = document.querySelectorAll('.project-card, .process-grid article, .about-left, .about-copy, .meta-tile');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
}

document.querySelectorAll('[data-copy-email]').forEach(button => {
  button.addEventListener('click', async () => {
    const email = 'xiaohan@example.com';
    try {
      await navigator.clipboard.writeText(email);
      showToast('已复制示例邮箱：' + email);
    } catch {
      const input = document.createElement('textarea');
      input.value = email;
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.append(input);
      input.select();
      const copied = document.execCommand('copy');
      input.remove();
      button.focus();
      showToast(copied ? '已复制示例邮箱：' + email : '请长按或选中邮箱文字复制：' + email);
    }
  });
});

document.querySelector('#print-resume').addEventListener('click', () => window.print());

function parkPrototype() {
  return `<div class="prototype"><div class="prototype-head"><span>栖游 · 交互演示</span><span>示例数据</span></div><h3>找到适合今天的路线</h3><div class="prototype-filters" role="group" aria-label="游览偏好"><button data-route="walk" aria-pressed="true">轻松散步</button><button data-route="family" aria-pressed="false">亲子友好</button></div><div id="route-card"><h4>水岸漫步</h4><p>2.4 km · 约 45 分钟 · 平缓步道</p></div><button class="button button-dark" id="route-details">查看路线详情</button><div id="route-detail" hidden><p id="route-description">沿水岸步道前行，途中设有休憩点。部分路段有树荫。</p><button class="button button-dark" id="route-start">开始游览演示</button></div><p id="route-feedback" role="status" aria-live="polite"></p></div>`;
}

document.addEventListener('click', event => {
  const filter = event.target.closest('[data-route]');
  if (filter) {
    document.querySelectorAll('[data-route]').forEach(b => b.setAttribute('aria-pressed', String(b === filter)));
    const family = filter.dataset.route === 'family';
    document.querySelector('#route-card').innerHTML = family ? '<h4>林间寻叶</h4><p>1.2 km · 约 30 分钟 · 植物观察</p>' : '<h4>水岸漫步</h4><p>2.4 km · 约 45 分钟 · 平缓步道</p>';
    document.querySelector('#route-description').textContent = family ? '在林间小路观察叶片与树影，沿途设置概念观察点。' : '沿水岸步道前行，途中设有休憩点。部分路段有树荫。';
    document.querySelector('#route-detail').hidden = true;
    document.querySelector('#route-details').hidden = false;
    document.querySelector('#route-feedback').textContent = '';
    document.querySelector('#route-start').disabled = false;
  }
  if (event.target.closest('#route-details')) {
    document.querySelector('#route-detail').hidden = false;
    event.target.hidden = true;
  }
  if (event.target.closest('#route-start')) {
    document.querySelector('#route-feedback').textContent = '游览演示已开始。真实产品还需接入地图、定位与导航服务。';
    event.target.disabled = true;
  }
});
