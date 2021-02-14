  const toTop = document.querySelector(".ir-arriba");

  window.addEventListener("scroll", () => {
  	if (window.pageYOffset > 100) {
  		toTop.classList.add("active");
  	} else {
  		toTop.classList.remove("active");
  	}
  })

  jQuery('document').ready(function($){

    var menuBtn= $('.menu-icon'),
        menu=$('.navigation ul');

    menuBtn.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }else{
            menu.addClass('show');
        }

    });

});