!function(t, e, n) {
  console.log('t, e, n');
  console.log(t, e, n, 't, e, n');
  const floatingBtn = document.getElementById('mantaGO-floating-button');
  floatingBtn.style.position = 'fixed'
  floatingBtn.style.width = '60px';
  floatingBtn.style.height = '60px';
  floatingBtn.style.overflow = 'hidden';
  floatingBtn.style.right = '20px';
  floatingBtn.style.bottom = '21px';
  floatingBtn.style.background = 'transparent';
  floatingBtn.style.border = 'none';
  floatingBtn.style.zIndex = '9999';
}
