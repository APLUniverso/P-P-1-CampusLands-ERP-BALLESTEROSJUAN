const signInForm = document.getElementById("signInForm");
const logInForm = document.getElementById("logInForm");

signInForm.addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("nombreSI").value;
    const contraseña = document.getElementById("contraseñaSI").value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push({ nombre, contraseña });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario registrado");
});

logInForm.addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("nombreLI").value;
    const contraseña = document.getElementById("contraseñaLI").value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(user =>
        user.nombre === nombre && user.contraseña === contraseña
    );

    if (usuarioEncontrado) {
        alert("Bienvenido " + nombre);
    } else {
        alert("Credenciales incorrectas");
    }
});
