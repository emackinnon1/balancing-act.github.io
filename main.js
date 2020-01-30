  const close = document.getElementById('close');
  const welcomeBox = document.getElementById('welcome');

  close.addEventListener('click', () => {
    welcomeBox.style.display = 'none';
  });
