const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Change icon
  toggleBtn.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
