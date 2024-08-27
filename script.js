document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const reminderInput = document.getElementById('reminder-input');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const taskText = taskInput.value.trim();
        const reminderTime = reminderInput.value;
        
        if (taskText) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${taskText} ${reminderTime ? - Reminder: ${new Date(reminderTime).toLocaleString()} : ''}</span>
                <button class="remove">Remove</button>
            `;
            
            listItem.querySelector('.remove').addEventListener('click', () => {
                taskList.removeChild(listItem);
            });
            
            taskList.appendChild(listItem);
            taskInput.value = '';
            reminderInput.value = '';
        }
    });
});