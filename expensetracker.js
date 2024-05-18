const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;

    if (isNaN(amount) || amount <= 0 || !category || !date) {
        alert('Please enter valid expense details.');
        return;
    }

    const expense = {
        amount,
        category,
        date
    };

    addExpense(expense);
    expenseForm.reset();
});

function addExpense(expense) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${expense.date}</td>
        <td>${expense.amount}</td>
        <td>${expense.category}</td>
        <td><button onclick="editExpense(this)">Edit</button></td>
        <td><button onclick="deleteExpense(this)">Delete</button></td>
    `;
    expenseList.appendChild(row);
}

function editExpense(button) {
    const row = button.parentNode.parentNode;
    const cells = row.querySelectorAll('td');
    const amount = parseFloat(cells[1].textContent);
    const category = cells[2].textContent;
    const date = cells[0].textContent;

    document.getElementById('amount').value = amount;
    document.getElementById('category').value = category;
    document.getElementById('date').value = date;

    row.remove();
}

function deleteExpense(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}
