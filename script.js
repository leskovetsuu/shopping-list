/* Новые элементы должны добавляться в список по нажатию на Enter */
const sendInput=document.querySelector('#input');
const sendItems=document.querySelector('.items');
sendInput.addEventListener('keydown', function(event) {
if (event.key == 'Enter'){
  const massageText = sendInput.value;
  
  const newText = document.createElement('div');
  newText.textContent = massageText;
  newText.addEventListener('click', function(){
   newText.classList.toggle('done');
  })
  if (massageText != '') {
   sendItems.append(newText);
  }
  sendInput.value = '';
  }
})
/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
