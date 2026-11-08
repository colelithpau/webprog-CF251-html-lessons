<script>
    (function () {
      var saved = null;
      try { saved = localStorage.getItem('theme'); } catch (e) {}
      var prefersDark = window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = saved || (prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    })();
  </script>
