var list = document.getElementById('list');
var addBtn = document.getElementById('js-addItem');
var removeBtn = document.getElementById('js-removeItem');


addBtn.addEventListener('click', function() {
	var listLength = list.getElementsByTagName('li').length;
	var listItem = document.createElement('li');
	listItem.innerHTML = 'item ' + listLength;
	list.appendChild(listItem);
});

removeBtn.addEventListener('click', function() {
	if (list.lastChild) {
		list.removeChild(list.lastChild); 
	}
});