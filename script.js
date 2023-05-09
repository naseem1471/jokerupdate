$("#slider").on("input change", (e)=>{
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  $('.foreground-img').css('width', `${sliderPos}%`)
  // Update the position of the slider button
  $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
});

// js; change images


let currentBackgroundImgIndex = 0;
let currentForegroundImgIndex = 1;

function next() {
  const currentBackgroundImg = document.querySelector('.background-img');
  const currentForegroundImg = document.querySelector('.foreground-img');
  const images = ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg', 'f.jpg','g.jpg', 'h.jpg', 'i.jpg', 'j.jpg', 'k.jpg', 'l.jpg', 'm.jpg', 'n.jpg', 'o.jpg', 'p.jpg', 'q.jpg', 'r.jpg','s.jpg', 't.jpg', 'u.jpg', 'v.jpg' ];


  // Increment the current image indices by 2
  currentBackgroundImgIndex += 2;
  currentForegroundImgIndex += 2;

  // Wrap around to the beginning of the images array if we go past the end
  if (currentBackgroundImgIndex >= images.length) {
    currentBackgroundImgIndex = 0;
  }
  if (currentForegroundImgIndex >= images.length) {
    currentForegroundImgIndex = 1;
  }

  // Set the new background and foreground images
  currentBackgroundImg.style.backgroundImage = `url('images/${images[currentBackgroundImgIndex]}')`;
  currentForegroundImg.style.backgroundImage = `url('images/${images[currentForegroundImgIndex]}')`;
}




  



