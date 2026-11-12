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

  <script>
    // Footer year updates automatically
    document.getElementById('year').textContent = new Date().getFullYear();

    // Theme toggle logic
    (function () {
      var root = document.documentElement;
      var button = document.getElementById('themeToggle');

      button.addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
      });
    })();
  </script>
