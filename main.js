  const body = document.querySelector('body');
  const close = body.querySelector('.close');
  const welcomeBox = body.querySelector('.welcome');
  const navGroup = body.querySelector('.navgroup');
  const navButtons = navGroup.querySelectorAll('.nav_butts img');
  const main1 = body.querySelector('.main1');
  const main2 = body.querySelector('.main2');
  const dashboardBtn = body.querySelector('.nav_dashboard');
  const transactionsBtn = body.querySelector('.nav_transactions');


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

function toggleMainViews(e) {
  if (e.target === dashboardBtn) {
    main1.classList.remove('hidden');
    main2.classList.add('hidden');
  }
  if (e.target === transactionsBtn) {
    main1.classList.add('hidden');
    main2.classList.remove('hidden');
  }
}

dashboardBtn.addEventListener('click', toggleMainViews);
transactionsBtn.addEventListener('click', toggleMainViews);
navGroup.addEventListener('click', handleNavClick);
close.addEventListener('click', hideBanner);
