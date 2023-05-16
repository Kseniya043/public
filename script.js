window.addEventListener("DOMContentLoaded", (event) => {
		
document.addEventListener('click', function(event){
      const headerBottom = event.target.closest('.header_bottom');
	  const headerMenu = document.querySelector('.header_menu');
      console.log(headerBottom);
      if (headerBottom) {
        if (headerMenu.classList.contains('active')){
          headerMenu.classList.remove('active')
        } else {
          headerMenu.classList.add('active')
        }
      }
})				
		
		
});
 
