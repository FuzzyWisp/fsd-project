let inputLeft = document.getElementById('input-left');
let inputRight = document.getElementById('input-right');

let thumbLeft = document.querySelector('.range-slider__thumb_left');
let thumbRight = document.querySelector('.range-slider__thumb_right');
let range = document.querySelector('.range-slider__range');

function setLeftValue(){
  let current = inputLeft,
    min = parseInt(current.min),
    max = parseInt(current.max);

  current.value = Math.min(parseInt(current.value), parseInt(inputRight.value) - 1);

  let persent = (current.value - min) / (max - min) * 100;

  thumbLeft.style.left = persent + '%';
  range.style.left = persent + '%';
}
setLeftValue()

function setRightValue(){
  let current = inputRight,
    min = parseInt(current.min),
    max = parseInt(current.max);

  current.value = Math.max(parseInt(current.value), parseInt(inputLeft.value) + 1);

  let persent = (current.value - min) / (max - min) * 100;

  thumbRight.style.right = (100 - persent) + '%';
  range.style.right = (100 - persent) + '%';
}
setRightValue()

inputLeft.addEventListener('input', setLeftValue);
inputRight.addEventListener('input', setRightValue);

inputLeft.addEventListener('mouseover', function(){
  thumbLeft.classList.add('range-slider__thumb_hover');
});
inputLeft.addEventListener('mouseout', function(){
  thumbLeft.classList.remove('range-slider__thumb_hover');
});
inputLeft.addEventListener('mousedown', function(){
  thumbLeft.classList.add('range-slider__thumb_active');
});
inputLeft.addEventListener('mouseup', function(){
  thumbLeft.classList.remove('range-slider__thumb_active');
});
inputRight.addEventListener('mouseover', function(){
  thumbRight.classList.add('range-slider__thumb_hover');
});
inputRight.addEventListener('mouseout', function(){
  thumbRight.classList.remove('range-slider__thumb_hover');
});
inputRight.addEventListener('mousedown', function(){
  thumbRight.classList.add('range-slider__thumb_active');
});
inputRight.addEventListener('mouseup', function(){
  thumbRight.classList.remove('range-slider__thumb_active');
});