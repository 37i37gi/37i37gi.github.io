document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle-button');
  const scrollToTopButton = document.getElementById('scroll-to-top-button');
  const scrollToBottomButton = document.getElementById('scroll-to-bottom-button');
  const root = document.documentElement; 

  // テーマ管理
  let currentTheme = localStorage.getItem('theme');
  if (currentTheme === null) {
      currentTheme = 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeToggleButton) {
      if (theme === 'dark') {
        themeToggleButton.innerHTML = '<span class="material-icons-round">light_mode</span>';
        themeToggleButton.title = 'ライトモードへ';
      } else {
        themeToggleButton.innerHTML = '<span class="material-icons-round">dark_mode</span>';
        themeToggleButton.title = 'ダークモードへ';
      }
    }
  }

  applyTheme(currentTheme);

  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
      let newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // スクロールトップボタン
  if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollToTopButton.classList.remove('hidden');
      } else {
        scrollToTopButton.classList.add('hidden');
      }
    });
    if (window.scrollY <= 300) scrollToTopButton.classList.add('hidden');
  }

  // スクロールボトムボタン
  if (scrollToBottomButton) {
    scrollToBottomButton.addEventListener('click', () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
      if ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 50)) {
        scrollToBottomButton.classList.add('hidden');
      } else {
        scrollToBottomButton.classList.remove('hidden');
      }
    });
    if ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 50)) {
        scrollToBottomButton.classList.add('hidden');
    }
  }
});
