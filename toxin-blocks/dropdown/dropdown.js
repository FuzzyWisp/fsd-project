let dropdown = function(){
    let dropdownArr = document.querySelectorAll('.dropdown');
    
    dropdownArr.forEach(item => {
      item.addEventListener('click', function(){
        let dropdownMenu = this.querySelector('.dropdown__menu');
        let fieldBorder = this.querySelector('.field-border');
        dropdownMenu.classList.toggle('dropdown__menu_active');
        fieldBorder.classList.toggle('dropdown__field-border_active');
      })
    })
  };
  
dropdown();