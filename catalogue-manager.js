document.querySelectorAll('.container-text h4').forEach(header => {
  header.addEventListener('click', () => {
      const targetId = header.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      document.querySelectorAll('.dropdown-explanation').forEach(explanation => {
          if (explanation.id === targetId) {
              explanation.classList.add('expanded');
          } else {
              explanation.classList.remove('expanded');
          }
      });
  });
});