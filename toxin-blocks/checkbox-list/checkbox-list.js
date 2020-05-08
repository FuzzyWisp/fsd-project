function checkboxListOpen(){
    let checkboxListArr = document.querySelectorAll('.checkbox-list');

    checkboxListArr.forEach(item => {
        item.addEventListener('click', function(){
            let checkboxListMenu = this.querySelector('.checkbox-list__menu');
            let checkboxListHeader = this.querySelector('.checkbox-list__header');
            checkboxListMenu.classList.toggle('checkbox-list__menu_active');
            checkboxListHeader.classList.toggle('checkbox-list__header_active');
        })
    })
};

checkboxListOpen();