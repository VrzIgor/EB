function checkPassword() {
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("error");
    
    if (password === "3647") {
        sessionStorage.setItem("authenticated", "true");
        window.location.href = "index.html";
    } else {
        errorElement.textContent = "Неверный пароль!";
    }
}
