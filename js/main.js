let boton = document.querySelector("#icono");
let enlaces = document.querySelector(".enlaces");

boton.addEventListener("click", () => {
   enlaces.classList.toggle("dos");
});

window.addEventListener("resize", () => {
       enlaces.classList.remove("dos");
  });





let enlaces = document.getElementById("enlaces");


const menuItems = document.querySelectorAll('.enlaces a[href^="#"]');

function getScrollTopByHref(element) {
const id = element.getAttribute('href');
return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  // Si quieres el nativo solo
  // window.scroll({
  // top: to,
  // behavior: "smooth",
  // })
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.currentTarget) - 80;
  scrollToPosition(to);
}
menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
});
// Si desea compatibilidad con navegadores antiguos / que no admiten el desplazamiento suave nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();
  duration = typeof duration !== 'undefined' ? duration : 400;
  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };
  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};
$(function() {
  $("#button2").click(function() {
    $("#button2").addClass("onclic", 250, validate);
  });

  function validate() {
    setTimeout(function() {
      $("#button2").removeClass("onclic");
      $("#button2").addClass("validate", 450, callback);
    }, 2250);
  }

  function callback() {
    setTimeout(function() {
      $("#button2").removeClass("validate");
    }, 1250);
  }
});