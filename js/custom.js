
// ========== preloader ===========
  // $(window).load(function() { // makes sure the whole site is loaded
  //  $("#status").fadeOut(); // will first fade out the loading animation
   // $("#preloader").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.
// })

// ======== Skill Bar ======= 
    // Progress bars
	$(document).ready(function() {
		$('.progress .progress-bar').css("width",
				  function() {
					  return $(this).attr("aria-valuenow") + "%";
				  }
		  )
	});

	$(window).scroll(function() {
		var hT = $('#skill-bar-wrapper').offset().top,
			hH = $('#skill-bar-wrapper').outerHeight(),
			wH = $(window).height(),
			wS = $(this).scrollTop();
		if (wS > (hT+hH-1.4*wH)){
			jQuery(document).ready(function(){
				jQuery('.skillbar-container').each(function(){
					jQuery(this).find('.skills').animate({
						width:jQuery(this).attr('data-percent')
					}, 5000); // 5 seconds
				});
			});
		}
	 });
// smooth scrolling 
// =========================
// =========================


	$(document).ready(function() {
	
		var headerHeight = $('header').outerHeight(); // Target your header navigation here
		  
		$('#navbarSupportedContent li a').click(function(e) {
			
			var targetHref   = $(this).attr('href');
			
		  $('html, body').animate({
			  scrollTop: $(targetHref).offset().top - headerHeight // Add it to the calculation here
		  }, 1000);
		  
		  e.preventDefault();
		});
	  });



	//   Navbar Fixed When Body scroll 
	// ============================
	// ===========================

	$(window).scroll(function () { 

		console.log($(window).scrollTop());
	
		if ($(window).scrollTop() > 300) {
		  $('#header_area').addClass('fixed_menu');
		}
	
		if ($(window).scrollTop() < 301) {
		  $('#header_area').removeClass('fixed_menu');
		}
	  });

// Hightlight Links Effect here 
// ==============================
// ==============================

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 90;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navbar-collapse a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navbar-collapse a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

// Back to Top button 
// ============================
// ============================
var btn = $('.backToTop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('backToTopShow');
  } else {
    btn.removeClass('backToTopShow');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



// bootstrap mobile manu edit js 

$(function(){ 
	var navMain = $(".navbar-collapse"); // avoid dependency on #id
	// "a:not([data-toggle])" - to avoid issues caused
	// when you have dropdown inside navbar
	navMain.on("click", "a:not([data-toggle])", null, function () {
		navMain.collapse('hide');
	});
});



// WOW Animation 
new WOW().init();

$('.reset').click(function(){
  new WOW().init();
})




////// 
document.addEventListener('contextmenu', event => event.preventDefault());

// f12 disble 
document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
    return false;
    }
    }
    document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
    return false;
    }
    }
    document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
    return false;
    }
    }

// ctrl + u 
document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
        alert('not allowed');
    }
    return false;
};
