function checkPassword() {
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("error");
    
    // Замените "мой_пароль" на свой реальный пароль
    if (password === "мой_пароль") {
        window.location.href = "index.html"; // Успешный вход
    } else {
        errorElement.textContent = "Неверный пароль!";
    }
}
