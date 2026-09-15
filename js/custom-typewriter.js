document.addEventListener('DOMContentLoaded', function () {
  if (typeof Typed === 'undefined') return;

  const siteTitle = document.querySelector('.site-title');
  const siteInfo = document.querySelector('.site-info');

  if (!siteTitle || !siteInfo) return;
  if (document.querySelector('.typewriter-wrap')) return;

  const wrap = document.createElement('div');
  wrap.className = 'typewriter-wrap';
  wrap.innerHTML = '<span class="typewriter-text"></span>';

  siteInfo.appendChild(wrap);

  new Typed('.typewriter-text', {
    strings: [
      '保持热爱｜持续输入',
      'Stay curious | Keep growing'
    ],
    typeSpeed: 120,
    backSpeed: 60,
    startDelay: 300,
    backDelay: 1800,
    loop: true
  });
});