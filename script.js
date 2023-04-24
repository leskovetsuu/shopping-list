/* Новые элементы должны добавляться в список по нажатию на Enter */
const inputWrapper=document.querySelector('.input-wrapper');
const sendInput=document.querySelector('#input');
const sendItems=document.querySelector('.items');
const newItems=document.createElement('div');
newItems.textContent=inputWrapper;
newItems.addEventListener('keydown', function(event){
if (event.keyCode == 'Enter'){
   sendItems=newItems.value;
}
})
inputWrapper.addEventListener('click', function(){
   const newMMassege=sendInput.value;
})
sendInput.addEventListener('keydown', function(event) {
if (event.keyCode == 'Enter'){
newMMassege.click();
}
});


/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
