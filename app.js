let totalamt = 0;
const expenseForm = document.querySelector(".expenseform");
const expenseName = document.querySelector("#expenseName");
const amount = document.querySelector("#expenseAmount");
const category = document.querySelector("#expenseCategory");
const expenselsit = document.querySelector("#expenseList");
const total = document.querySelector("#totalamount");
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = expenseName.value;
    const expenseAmount = amount.value;
    const expensecategory = category.value;
    //check input
    if (expensecategory === "" || expenseAmount <= 0) {
        alert("plese enter a valid category and amount")
    }
    //update total
    const numericamount = Number(expenseAmount);
    
    totalamt = totalamt + numericamount;
    total.textContent = `${totalamt}`;
    const expenseItem = document.createElement("li");
    expenseItem.textContent = `${name} => ₹${expenseAmount} =>${expensecategory}`;
    expenseList.appendChild(expenseItem);
    expenseForm.reset();
    

});
