// Элемент на странице
console.log("Hello from Counter JS");

const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]'); 
const counter = document.querySelector('[data-counter]');

//Отслеживаем клик на кнопку -
btnMinus.addEventListener('click', function(){
    //Проверка счетчика >1
   if (parseInt(counter.innerText) > 1){
    //Увеличиваем счетчик на 1
    counter.innerText = --counter.innerText;
    }
});

//Отслеживаем клик на кнопку +
btnPlus.addEventListener('click', function(){
    counter.innerText = ++counter.innerText;
});

