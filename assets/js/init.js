//topbar size reduce
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
	if(document.body.scrollTop>80||document.documentElement.scrollTop>80) {
		document.querySelector('.logo').style.width = "120px"; //how to push css value in js
		document.querySelector('.logo').style.padding = "10px";
		document.querySelector('.topbar').style.lineHeight = "40px";
		document.querySelector('.topbar').style.height = "40px";
	} else {
		document.querySelector('.logo').style.width = "140px";
		document.querySelector('.logo').style.padding = "20px";
		document.querySelector('.topbar').style.lineHeight = "48px";
		document.querySelector('.topbar').style.height = "48px";
	}
}

//sidebar show and hide
let menuButton = document.querySelector('.side-nav-btn');
let sideBar = document.querySelector('.main-sidebar');

menuButton.addEventListener('click', function(){
	sideBar.classList.add('active');
});

let menuCloseButton = document.querySelector('.sidebar-close-btn');
// let sidebarClosing = document.querySelector('#sidebar-closing');

menuCloseButton.addEventListener('click', sidebarCloseFunction);
// sidebarClosing.addEventListener('click', sidebarCloseFunction);

function sidebarCloseFunction(){
	sideBar.classList.remove('active');
};


//mobile menu trigger
let mobileMenuTrigger = document.querySelector('.mobile-menu-trigger');
let mobileMenu = document.querySelector('nav');
let mobileMenuClose = document.querySelector('.mobile-menu-close-btn');

mobileMenuTrigger.addEventListener('click', function(){
	mobileMenu.classList.add('active');
});
mobileMenuClose.addEventListener('click', function(){
	mobileMenu.classList.remove('active');
});



//banner owlCarousel slider
$(document).ready(function(){
	const nextIcon = '<i class="fas fa-angle-right"></i>';
    const prevIcon = '<i class="fas fa-angle-left"></i>';

  $('.banner-slider-wrapper').owlCarousel({
            loop:true,
            items:1,
            margin:0,
            nav:true,
            dots:false,
            autoplay:false,
            autoplayTimeout:3000,
            autoplaySpeed:800,
            autoplayHoverPause:false,
            navText: [
                prevIcon,
                nextIcon
            ]
        });
});

//explore-destination section tab
function openDestination(evt, countryName) {
	let i, destinationTabcontent, destinationTablinks;
	destinationTabcontent = document.getElementsByClassName('destinationTabcontent');

	for (i=0;i<destinationTabcontent.length;i++) {
		destinationTabcontent[i].style.display="none";
	}

	destinationTablinks = document.querySelectorAll('.destinationTablinks');
	for (i=0;i<destinationTablinks.length;i++) {
		destinationTablinks[i].className = destinationTablinks[i].className.replace("active", "")
	}
	document.getElementById(countryName).style.display="block";
	evt.currentTarget.className += "active";
}
document.querySelector(".explore-destination #defaultOpen").click();


//trip tabs
function openPackage(evt, packageName) {
  let i, triptabcontent, triptablinks;
  triptabcontent = document.getElementsByClassName("triptabcontent");
  for (i = 0; i < triptabcontent.length; i++) {
    triptabcontent[i].style.display = "none";
  }
  triptablinks = document.getElementsByClassName("triptablinks");
  for (i = 0; i < triptablinks.length; i++) {
    triptablinks[i].className = triptablinks[i].className.replace(" active", "");
  }
  document.getElementById(packageName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.querySelector(".trips #defaultOpen").click();


// deals tab
function openDeal(evt, dealName) {
  let i, dealtabcontent, dealtablinks;
  dealtabcontent = document.getElementsByClassName("dealtabcontent");
  for (i = 0; i < dealtabcontent.length; i++) {
    dealtabcontent[i].style.display = "none";
  }
  dealtablinks = document.getElementsByClassName("dealtablinks");
  for (i = 0; i < dealtablinks.length; i++) {
    dealtablinks[i].className = dealtablinks[i].className.replace(" active", "");
  }
  document.getElementById(dealName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.querySelector(".deals #defaultOpen").click();


// featured trip of the month slider
$(document).ready(function(){
	const nextIcon = '<i class="fas fa-angle-right"></i>';
    const prevIcon = '<i class="fas fa-angle-left"></i>';

  $('.featured-slider-wrapper').owlCarousel({
            loop:true,
            items:1,
            margin:0,
            nav:true,
            dots:false,
            autoplay:false,
            autoplayTimeout:3000,
            autoplaySpeed:800,
            autoplayHoverPause:false,
            navText: [
                prevIcon,
                nextIcon
            ]
        });
});

//review slider
$(document).ready(function(){
  $('.review-slider-wrapper').owlCarousel({
            loop:true,
            items:1,
            margin:0,
            nav:false,
            dots:true,
            autoplay:false,
            autoplayTimeout:3000,
            autoplaySpeed:800,
            autoplayHoverPause:false
            // navText: [
            //     prevIcon,
            //     nextIcon
            // ]
        });
});