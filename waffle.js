const quantity = document.getElementById("quantity")
const Form = document.getElementById("form");
const error = document.getElementById("error");
Form.addEventListener("submit", (e) => {
    let messege = [];
    if (quantity.value > 10 || quantity.value == "" || quantity.value < 1) {
        e.preventDefault();
        messege.push('Please enter a proper quantity');
        error.innerText = messege.join(', ');
    }
    else {
        Form.submit()
    }
})