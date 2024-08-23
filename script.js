document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Formulario de registro enviado');
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Formulario de inicio de sesión enviado');
});

console.log("El archivo script.js está enlazado correctamente");