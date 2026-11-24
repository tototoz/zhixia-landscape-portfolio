const projects = {
  wetland: {
    title: '栖岸 · 与水共生', english: 'RIPARIAN REVERIE', category: '生态景观', image: 'wetland', year: '2026', scale: '约 6.2 公顷（设定）', type: '课程概念设计', next: 'courtyard',
    intro: '以“可呼吸的水岸”为线索，探索城市滨水空间与湿地生态共存的方式。让人的活动轻轻进入自然，也为水位变化与植物生长留出余地。',
    challenge: '当亲水需求遇上敏感的滨水生境，怎样既保持岸线的自然变化，又提供舒适、连贯的公共空间？本概念将自然过程作为空间组织的起点。',
    strategies: [ ['留出弹性水岸', '以高低错落的植被带与缓坡组织岸线，为季节性水位变化预留空间。'], ['串联轻介入路径', '用抬升栈道连接入口、观景与停留节点，减少游线对湿地的切割。'], ['建立生境层次', '将林地、草甸与水生植物带连续组织，形成不同尺度的栖息与观察空间。'] ],
    process: '从水岸高差、现状植被和周边步行联系出发，梳理“城市—林地—草甸—浅滩”的空间梯度，再以环形慢行路线串联停留节点。下图为叙事示意，不作为工程或施工图。',
    reflection: '设计的重点不只是增加一条步道，更是明确哪些地方应当靠近、哪些地方应当保持距离。下一步可结合真实水文资料与植物调查，验证场地适应性。'
  },
  courtyard: {
    title: '巷间 · 邻里的客厅', english: 'EVERYDAY COMMONS', category: '城市更新', image: 'courtyard', year: '2026', scale: '约 1,800 平方米（设定）', type: '课程概念设计', next: 'garden',
    intro: '把街巷里被忽略的边角空间变成邻里共享的日常客厅。保留树、砖墙与生活的痕迹，让小尺度更新承载更多轻松而自然的相遇。',
    challenge: '在有限面积里，穿行、休憩、交流与植物生长常常争夺空间。本概念尝试从居民的日常动线入手，让经过与停留各得其所。',
    strategies: [ ['先让通行清晰', '保留贯穿场地的连续通道，让入口、街巷与主要活动节点自然衔接。'], ['把座位放进树荫', '围绕现状树组织座椅与共享长桌，提供独处、聊天与小型活动的选择。'], ['延续街巷肌理', '通过红砖、低矮绿化与克制的设施表达，呼应周边建筑的材质与尺度。'] ],
    process: '将模拟行为观察归纳为“快速经过、短时停留、邻里交流”三类需求，据此分配通道、边缘座椅和中央共享空间。示意图用于解释功能关系，不代表实际场地测绘。',
    reflection: '公共空间的活力往往来自细小的体贴：有树荫的座位、容易找到的入口、不会打断步行的活动区。若进入真实项目，应继续与居民沟通使用时段与维护方式。'
  },
  garden: {
    title: '时序 · 会呼吸的花园', english: 'SEASONS IN MOTION', category: '植物设计', image: 'garden', year: '2025', scale: '约 900 平方米（设定）', type: '独立概念练习', next: 'wetland',
    intro: '以四季更替为花园的主角，用观赏草、宿根花卉与疏林形成富有层次的植物空间。让散步的人感知风、光和植物生长的节奏。',
    challenge: '花园不应只在盛花期好看。这个练习关注花期之外的形态与质感，希望在萌芽、盛放、结实和休眠之间建立连贯的景观体验。',
    strategies: [ ['先搭建植物骨架', '以疏林和结构性观赏草建立稳定背景，让季节性花卉自然穿插。'], ['让路径放慢脚步', '通过曲折的砾石小径与局部停留点，组织远观、近赏和休憩的节奏。'], ['把变化纳入设计', '关注花序、种头、叶色与枯枝形态，延续花园在不同季节的表现。'] ],
    process: '先以高度、质感、花期三个维度组织植物层次，再结合游览路径安排前景、中景与背景。下图为植物空间概念示意；实际种植需按场地气候、土壤和光照重新选种。',
    reflection: '植物设计是与时间合作。此练习提醒我在效果之外，也考虑生长速度、群落演替与养护投入，让花园的美能够被持续照顾。'
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
    <img class="detail-cover" src="assets/${p.image}.jpg" alt="${p.title}的 AI 概念效果图" width="1536" height="1024">
    <div class="detail-content">
      <div class="detail-topline"><span>${p.category} / ${p.year}</span><span>${p.english}</span></div>
      <h2 id="detail-title">${p.title}</h2><p class="detail-intro">${p.intro}</p>
      <dl class="detail-facts"><div><dt>项目类型</dt><dd>${p.type}</dd></div><div><dt>概念尺度</dt><dd>${p.scale}</dd></div><div><dt>示例角色</dt><dd>个人设计练习</dd></div><div><dt>内容说明</dt><dd>虚构项目 · AI 配图</dd></div></dl>
      <div class="detail-tabs" role="tablist" aria-label="项目内容"><button id="concept-tab" class="detail-tab" role="tab" aria-selected="true" aria-controls="concept-panel" data-panel="concept-panel">设计思路</button><button id="process-tab" class="detail-tab" role="tab" aria-selected="false" aria-controls="process-panel" tabindex="-1" data-panel="process-panel">空间推演</button><button id="reflection-tab" class="detail-tab" role="tab" aria-selected="false" aria-controls="reflection-panel" tabindex="-1" data-panel="reflection-panel">设计反思</button></div>
      <section id="concept-panel" class="detail-tab-panel" role="tabpanel" aria-labelledby="concept-tab" tabindex="0"><h3>从一个场地问题出发</h3><p>${p.challenge}</p><div class="strategy-list">${p.strategies.map(s => `<article class="strategy-item"><h4>${s[0]}</h4><p>${s[1]}</p></article>`).join('')}</div></section>
      <section id="process-panel" class="detail-tab-panel" role="tabpanel" aria-labelledby="process-tab" tabindex="0" hidden><h3>让概念成为空间关系</h3><p>${p.process}</p><figure class="drawing-frame">${drawings[key]}<figcaption>概念空间示意 · 无比例 · 非施工图</figcaption></figure></section>
      <section id="reflection-panel" class="detail-tab-panel" role="tabpanel" aria-labelledby="reflection-tab" tabindex="0" hidden><h3>设计之后，继续提问</h3><p>${p.reflection}</p></section>
      <div class="detail-bottom"><p>此项目为网站演示，效果图由 AI 生成。</p><button class="detail-next" data-project="${p.next}">下一个项目：${projects[p.next].title}</button></div>
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

document.querySelectorAll('[data-copy-email]').forEach(button => {
  button.addEventListener('click', async () => {
    const email = 'linzhixia@example.com';
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
