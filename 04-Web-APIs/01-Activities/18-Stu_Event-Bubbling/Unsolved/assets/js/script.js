// TODO: Which element is the following line of code selecting?
// div class=carouselbox 
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
//referring to buttons child elements
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// clicking the carousel box directs us to the url of the image on the screen
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
//clicking next will navigate us to the next image 
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  // this stop propagation prevents the bubbling effect from happening where the line of code will run through the entire index of images when you click next, 
  // so this command line prevents the event from bubbling so you go through each inage click by click
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// go back to prev image
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
    //your website will break 
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
