let like = function () {
  
  let likeButtons = document.querySelectorAll('.like-button');

  likeButtons.forEach(item => {
    item.addEventListener('click', function() {    
      let likeCounter = this.querySelector('.like-button__counter');
      let likes = likeCounter.innerHTML;
      
      if (this.classList == 'like-button'){
        likes++;
      }
      else{        
        likes--;
      }
      this.classList.toggle('like-button_active');
      likeCounter.innerHTML = likes;
      console.log(this.classList)
    })
  })
};

like();

