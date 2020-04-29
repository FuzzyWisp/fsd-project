function checkboxListOpen(){
    let checkboxListArr = document.querySelectorAll('.checkbox-list');

    checkboxListArr.forEach(item => {
        item.addEventListener('click', function(){
            let checkboxListMenu = this.querySelector('.checkbox-list__menu');
            checkboxListMenu.classList.toggle('checkbox-list__menu_active');
        })
    })
};

checkboxListOpen();