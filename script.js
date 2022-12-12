var toDoListInput = document.getElementById('toDoListInput')
toDoListInput.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    addToDoListItem(this.value);
    this.value = '';
  }
});

document.body.insertBefore(toDoListInput, toDoList);
var toDoList = document.getElementById('toDoList');
document.body.appendChild(toDoList);

var toDoListItems = [];
var toDoListItemCount = 0;
var toDoListItem = function(text) {
  this.text = text;
  this.id = toDoListItemCount++;
  this.element = document.createElement('li');
  this.element.innerHTML = this.text;
  this.element.id = this.id;
  this.element.className = 'listItems'; 
  this.element.addEventListener('click', function() {
    toDoList.removeChild(this);
    toDoListItems.splice(this.id, 1);
    for (var i = this.id; i < toDoListItems.length; i++) {
      toDoListItems[i].id--;
      toDoListItems[i].element.id--;
    }
    toDoListItemCount--;
  });
  toDoList.appendChild(this.element);
};
var addToDoListItem = function(text) {
  toDoListItems.push(new toDoListItem(text));
};
