// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add task to the list
addTaskButton.addEventListener('click', () => {
    const task = taskInput.value.trim();

    if (task === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    // Add event listener to the delete button
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    // Append elements to the list item
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);

    // Add list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
});
