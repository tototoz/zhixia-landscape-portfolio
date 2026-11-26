const PAGE_TITLES = {
  home: '张晓菡 · 个人主页',
  works: '作品展示 · 张晓菡',
  'work-wetland': '栖游 · 公园导览 App · 张晓菡',
  'work-courtyard': '植间 · 自然的数字展厅 · 张晓菡',
  'work-garden': '时序 · 会呼吸的花园 · 张晓菡',
  resume: '个人简历 · 张晓菡',
  about: '关于我 · 张晓菡',
  contact: '联系我 · 张晓菡'
};

const WORK_THEMES = new Set(['work-wetland', 'work-courtyard', 'work-garden']);

const toast = document.querySelector('#toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}

// Multi-page Router with per-work theme switching
const pages = document.querySelectorAll('.page-view');
const navLinks = document.querySelectorAll('#main-nav [data-route-link]');

function navigateTo(pageName, pushHash = true) {
  const target = PAGE_TITLES[pageName] ? pageName : 'home';

  pages.forEach(section => {
    const isTarget = section.dataset.page === target;
    section.hidden = !isTarget;
    section.classList.toggle('active', isTarget);
  });

  // Apply per-work theme to the entire document root so header, background, accents, and footer adapt
  if (WORK_THEMES.has(target)) {
    document.documentElement.setAttribute('data-work-theme', target);
  } else {
    document.documentElement.removeAttribute('data-work-theme');
  }

  // Toggle body.is-home so the homepage stays free of redundant top nav
  document.body.classList.toggle('is-home', target === 'home');

  // Highlight active nav item (work detail pages highlight "作品")
  const navActiveKey = WORK_THEMES.has(target) ? 'works' : target;
  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.routeLink === navActiveKey);
  });

  document.title = PAGE_TITLES[target];
  if (pushHash && location.hash !== '#' + target) {
    history.pushState(null, '', '#' + target);
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
  closeMenu();
}

document.addEventListener('click', event => {
  const routeLink = event.target.closest('[data-route-link]');
  if (routeLink) {
    event.preventDefault();
    navigateTo(routeLink.dataset.routeLink, true);
  }
});

window.addEventListener('hashchange', () => {
  const hashPage = location.hash.replace('#', '') || 'home';
  navigateTo(hashPage, false);
});

// Initialize from URL hash
const initialPage = location.hash.replace('#', '') || 'home';
navigateTo(initialPage, false);

// Works filter
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

// Mobile menu
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
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => {
  if (menu.classList.contains('open') && !event.target.closest('.site-header')) {
    closeMenu();
  }
});

// Theme switcher (Light / Dark)
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

// Email copy
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

// Print resume
const printBtn = document.querySelector('#print-resume');
if (printBtn) {
  printBtn.addEventListener('click', () => window.print());
}

// Interactive prototype inside Work 01 page (#page-work-wetland)
document.addEventListener('click', event => {
  const filter = event.target.closest('[data-route]');
  if (filter) {
    document.querySelectorAll('[data-route]').forEach(b => b.setAttribute('aria-pressed', String(b === filter)));
    const family = filter.dataset.route === 'family';
    document.querySelector('#route-card').innerHTML = family
      ? '<h4>林间寻叶</h4><p>1.2 km · 约 30 分钟 · 植物观察</p>'
      : '<h4>水岸漫步</h4><p>2.4 km · 约 45 分钟 · 平缓步道</p>';
    document.querySelector('#route-description').textContent = family
      ? '在林间小路观察叶片与树影，沿途设置概念观察点。'
      : '沿水岸步道前行，途中设有休憩点。部分路段有树荫。';
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
