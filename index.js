document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formlogin");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const senha = document.getElementById("password").value;

        if (senha.length < 8) {
            window.alert("A senha deve conter pelo menos 8 caracteres.")
        } else if (!/[A-Z]/.test(senha)) {
            window.alert("A senha deve conter pelo menos uma letra maiúscula.")
        } else if (!/[0-9]/.test(senha)) {
            window.alert("A senha deve conter pelo menos um número.")
        } else {
            window.alert("Senha válida!")
            form.submit();
        }
    });
});