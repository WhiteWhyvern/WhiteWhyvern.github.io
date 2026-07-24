// nav tab simple behavior
document.querySelectorAll('nav [role="tab"]').forEach((t, i, tabs) => {
  t.addEventListener('click', () => {
    tabs.forEach(x => x.setAttribute('aria-selected', false));
    t.setAttribute('aria-selected', true);
    // scroll to main area for selected tab (panels are minimal here)
    document.querySelector('main').scrollIntoView({behavior:'smooth'});
  });
});

// footer year
document.getElementById('year').textContent = new Date().getFullYear();
