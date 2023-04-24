/* Новые элементы должны добавляться в список по нажатию на Enter */
const inputWrapper=document.querySelector('.input-wrapper');
const sendInput=document.querySelector('#input');
const sendItems=document.querySelector('.items');
const sendButton=document.createE
inputWrapper.addEventListener('keydown', function(event) {
if (event.key == 'Enter') 
   return (sendItems);
});


/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
