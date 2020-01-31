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
  main2.classList.toggle('show');
  main1.classList.toggle('hidden');
}

navGroup.addEventListener('click', handleNavClick);
close.addEventListener('click', hideBanner);
elephant.addEventListener('click', toggleMainViews);
