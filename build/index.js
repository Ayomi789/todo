"use strict";
class TodoList {
    constructor(inputId, buttonId, listId) {
        this.inputId = inputId;
        this.buttonId = buttonId;
        this.listId = listId;
        this.tasks = [];
        this.initialize();
    }
    initialize() {
        const addButton = document.getElementById(this.buttonId);
        addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener('click', () => this.addTask());
        const inputField = document.getElementById(this.inputId);
        inputField.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.addTask();
            }
        });
    }
    addTask() {
        const inputField = document.getElementById(this.inputId);
        const task = inputField.value.trim();
        if (task !== '') {
            this.tasks.push(task);
            this.renderTasks();
            inputField.value = '';
        }
    }
    renderTasks() {
        const list = document.getElementById(this.listId);
        if (!list)
            return;
        list.innerHTML = '';
        this.tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = task;
            list.appendChild(listItem);
            // Add functionality to remove tasks
            listItem.addEventListener('click', () => {
                this.tasks.splice(index, 1);
                this.renderTasks();
            });
        });
    }
}
// Create an instance of the TodoList class
const todoList = new TodoList('taskInput', 'addTaskButton', 'taskList');
