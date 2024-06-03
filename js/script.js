function addTask() {
    const name = document.getElementById('task-name').value.trim();
    const title = document.getElementById('task-title').value.trim();
    const description = document.getElementById('task-description').value.trim();
    const cash = parseFloat(document.getElementById('Total Cash').value);
    const cost = parseFloat(document.getElementById('cost').value);

    if (!name || !title || !description) {
        alert("Please fill out all fields.");
        return;
    }

    const costCash = cash - cost;
    const task = { name, title, description, costCash };

    displayTasks(task);
    clearFields();
}

function displayTasks(task) {
    const tableBody = document.getElementById('task-table-body');
    const row = tableBody.insertRow();
    row.innerHTML = `<td>${task.name}</td><td>${task.title}</td><td>${task.description}</td><td>${task.costCash}</td>`;
}

function clearFields() {
    document.getElementById('task-name').value = '';
    document.getElementById('task-title').value = '';
    document.getElementById('task-description').value = '';
    document.getElementById('Total Cash').value = '';
    document.getElementById('cost').value = '';
}
