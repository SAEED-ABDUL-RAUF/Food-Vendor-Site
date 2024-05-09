let hamburger = document.querySelector('.hamburger');
let navigations = document.querySelector('.home_navigations');


// hamburger.addEventListener('click', () => {
//   navigations.classList.toggle('slide_navigation')

// })

hamburger.addEventListener('click', myFunction)

function myFunction(){
  if (navigations.style.display == 'none'){
    navigations.style.display = 'block';
  } else{
    navigations.style.display = 'none'
  }
}