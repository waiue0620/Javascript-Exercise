!function() {
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
  floatingBtn.onclick = () => {
    const iframe = document.getElementById('mantaGO-iframe');
    iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
    iframe.style.right = '30px';
    iframe.style.bottom = '80px';
  };
}();
