  const body = document.querySelector('body');
  const close = body.querySelector('.close');
  const welcomeBox = body.querySelector('.welcome');
  const navGroup = body.querySelector('.navgroup');
  const navButtons = navGroup.querySelectorAll('.nav_butts img');
  const main1 = body.querySelector('.main1');
  const main2 = body.querySelector('.main2');
  const elephant = body.querySelector('.el_img');


  function hideBanner() {
    welcomeBox.classList.add('hidden');
  }

  function clear() {
    navButtons.forEach((button) => {
      button.classList.remove('highlight');
    });
  }

function handleNavClick(e) {
  clear();
  if (e.target.matches('img')) {
    e.target.classList.add('highlight');
  }
}

// add click listener to elephant with below function

function toggleMainViews() {
  if (main2.style.display = 'none') {
    main1.style.display === 'initial';
  } else if (main1.style.display = 'none') {
    main2.style.display = 'initial';
  }
}

navGroup.addEventListener('click', handleNavClick);
close.addEventListener('click', hideBanner);
