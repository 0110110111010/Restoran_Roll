//Отслеживаем клик на странице
window.addEventListener('click', function(event){
    //Проверяем что клик был совершен
    if(event.target.hasAttribute('data-cart')){
        
        //Находим карточку товара в которой был совершен клик
       const card = event.target.closest('.card');
       
       console.log('zxc')

    }
})