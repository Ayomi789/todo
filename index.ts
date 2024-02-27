class TodoList {
    private tasks: string[] = [];

    constructor(private inputId: string, private buttonId: string, private listId: string) {
        this.initialize();
    }

    private initialize() {
        const addButton = document.getElementById(this.buttonId);
        addButton?.addEventListener('click', () => this.addTask());

        const inputField = <HTMLInputElement>document.getElementById(this.inputId);
        inputField.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.addTask();
            }
        });
    }

    private addTask() {
        const inputField = <HTMLInputElement>document.getElementById(this.inputId);
        const task = inputField.value.trim();
        if (task !== '') {
            this.tasks.push(task);
            this.renderTasks();
            inputField.value = '';
        }
    }

    private renderTasks() {
        const list = document.getElementById(this.listId);
        if (!list) return;

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

