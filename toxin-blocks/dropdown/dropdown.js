let dropdown = function(){
  let dropdownArr = document.querySelectorAll('.dropdown');
  
  dropdownArr.forEach(item => {
    item.addEventListener('click', function(){
      let dropdownBody = this.querySelector('.dropdown__body');
      let dropdownMenu = this.querySelector('.dropdown__menu');
      dropdownMenu.classList.toggle('dropdown__menu_active');
      dropdownBody.classList.toggle('dropdown__body_active');
    })
  })
};
  
dropdown(); 