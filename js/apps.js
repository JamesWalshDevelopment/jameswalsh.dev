//Selecting buttons and modal
const modal = document.querySelector('.modal');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.querySelector('.close-modal-btn');

//Listen for click on openModalBtn to open modal
openModalBtn.addEventListener('click', openModal);

//Function to open modal
function openModal() {
  modal.style.display = 'block';
}

//Listen for click on closeModalBtn to close modal
closeModalBtn.addEventListener('click', closeModal);

//Function to close modal
function closeModal() {
  modal.style.display = 'none';
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}