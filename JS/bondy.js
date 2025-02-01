

document.addEventListener('DOMContentLoaded',function () {

  let search=document.querySelector('.search-icon');
  let searchInput=document.querySelector('.search-input');

  search.onclick=function (event) {
    searchInput.classList.toggle("activation");
  }
})

//START VALUE WORKS

document.addEventListener('DOMContentLoaded',function () {
  
  let buttons=document.querySelectorAll('.btn');
  
  buttons.forEach(button =>{
    button.addEventListener('click',function () {
      buttons.forEach(btn=>btn.classList.remove('active'));
      this.classList.add('active');
    }) 
  });
});

//END VALUE WORKS

//START TEAM

document.addEventListener('DOMContentLoaded',function () {
  let fullscreenContainer=document.getElementById('fullscreen-container');
  let fullscreenImage=document.getElementById('fullscreen-image');

  let images=document.querySelectorAll('.box img');

  fullscreenContainer.addEventListener('click',function () {
    fullscreenContainer.style.display='none';
  })

  images.forEach(image=>{
    image.addEventListener('click',function () {
      fullscreenImage.src=image.src;
      fullscreenContainer.style.display='flex';
    })
  })
})

//END TEAM