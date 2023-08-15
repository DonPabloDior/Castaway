const navItems = document.querySelectorAll('.nav-item');
const line = document.querySelector('.line');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    moveLine(item);
  });
});

function moveLine(item) {
  const rect = item.getBoundingClientRect();
  const offset = rect.left + rect.width / 2;
  line.style.transform = `translateX(${offset}px)`;
}

// Set initial position of the line
moveLine(document.querySelector('.nav-item.active'));