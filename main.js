// footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Optional: keyboard focus styling for accessibility on tiles
document.querySelectorAll('.grid-tile').forEach(a=>{
  a.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); a.click(); }
  });
});
