// selecting queryElements, specifically classes from HTML

const addText = document.querySelector('.addText');
const addButton = document.querySelector('.addBtn');
const todoList = document.querySelector('.todoList');


//adding eventListeners where I used the const variables above

addButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteInput);
todoList.addEventListener('click', completeInput);


// creating functions for the eventListeners

function addTodo(event){
	event.preventDefault(); //prevents browser from refreshing page.

	// creates DIV element in HTML todo line 24
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todoList');

	// creates an LI element inside todoList div
	const todoLi = document.createElement('li');
	todoLi.innerText = addText.value; // This adds the text inside the input value 
	todoLi.classList.add('todo');
	todoDiv.appendChild(todoLi);

	// creates a button called complete and add its to the todoDiv
	const completeButton = document.createElement('button');
	completeButton.innerHTML = '<i class="fa fa-check"></i>'; //add check mark icon to button
	completeButton.classList.add("completeBtn");
	todoDiv.appendChild(completeButton);

	// creates a button, delete button and is added to the todoDiv
	const deleteButton = document.createElement('button');
	deleteButton.innerHTML = '<i class="fa fa-trash"></i>'; //add trash-can icon to button
	deleteButton.classList.add("deleteBtn");
	todoDiv.appendChild(deleteButton);

	// adds whatever in the todoList class to div > list
	todoList.appendChild(todoDiv);
}

function deleteInput(event){   //function that deletes item inside the todoList class
	let items = event.target;
	if(items.classList[0] === 'deleteBtn') {
		let todo = items.parentElement;
		todo.remove();
	}
}

function completeInput(event){ //function that strikes through item onces done.
	let items = event.target;
	if(items.classList[0] === 'completeBtn');
		let todo = items.parentElement; 
		todo.classList.toggle('finished');  //toggles between class name for an element. if the class does not exisit, its added to the element and returns 'true'
}
