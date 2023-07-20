//Добавляем прослушку на всем окне
window.addEventListener('click', function(event){

    //Обьявляем переменную для счетчика
    let counter;

    //Проверяем клик строго по кнопкам +-
    if (event.target.dataset.action==='plus' || event.target.dataset.action==='minus'){
       
     //Находим обертку счетчика
    const counterWrapper = event.target.closest('.counter-wrapper');

    //Находим див с числом счетчика
    counter = counterWrapper.querySelector('[data-counter]');
    console.log(counter)

    }

    //Проверяем является ли элементом кнопкой+  
   if(event.target.dataset.action==="plus"){
    counter.innerText = ++counter.innerText;
   }


    //Проверяем является ли элементом кнопкой-
    if(event.target.dataset.action==="minus"){
     if (parseInt(counter.innerText) > 1){
     counter.innerText = --counter.innerText;
    }
   }
})  