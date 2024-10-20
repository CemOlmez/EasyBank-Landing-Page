const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn img');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = () => {
  
  dropDownMenu.classList.toggle('open');
  
  const isOpen = dropDownMenu.classList.contains('open');

  toggleBtnIcon.src = isOpen
    ? '/images/icon-close.svg'
    : '/images/icon-hamburger.svg'; 
};

