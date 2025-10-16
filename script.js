let slideIndex = 1;
selected = false;

automaticSlides();

// Next/previous controls
function plusSlides(n) {
  if (!selected) {
    let fades = document.getElementsByClassName("fade");
    for (i = 0; i < fades.length; i++) {
      fades[i].style.animationName = "fade-in";
    }

    n -= 1;
    selected = true;
  }

  showSlides(slideIndex += n);
}

// For automatic slideshow
function automaticSlides() {
  if (!selected) {
    showSlides(slideIndex);
    setTimeout(automaticSlides, 3500);
  }

  slideIndex++;
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}

function resize(n) {
  let columns = document.getElementsByClassName("column");
  let cardContent = document.getElementsByClassName("card-content");
  //const style = getComputedStyle(document.querySelector(".row"));

  for (i = 0; i < columns.length; i++) {
    if (n == -1) {
      columns[i].style.width = "16.67%";
      cardContent[i].style.visibility = "hidden";
    } else if (i == n) {
      columns[i].style.width = "20.67%";
      cardContent[i].style.visibility = "visible";
    } else {
      columns[i].style.width = "15.67%";
      cardContent[i].style.visibility = "hidden";
    }
  }
}