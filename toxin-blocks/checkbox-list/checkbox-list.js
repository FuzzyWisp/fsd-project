function checkboxListOpen(){
    let checkboxListArr = document.querySelectorAll('.checkbox-list');

    checkboxListArr.forEach(item => {
        item.addEventListener('click', function(){
            let checkboxListMenu = this.querySelector('.checkbox-list__menu');
            let checkboxListIcon = this.querySelector('.checkbox-list__icon');
            checkboxListMenu.classList.toggle('checkbox-list__menu_active');
            checkboxListIcon.classList.toggle('checkbox-list__icon_active');
        })
    })
};

checkboxListOpen();