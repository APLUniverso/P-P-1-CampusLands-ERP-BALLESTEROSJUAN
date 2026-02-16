const signInForm = document.getElementById("signInForm");
const logInForm = document.getElementById("logInForm");

signInForm.addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("emailSI").value;
    const contraseña = document.getElementById("contraseñaSI").value;
    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let infoUser = {
        'email':email,
        'contraseña':contraseña,
        'nombre':nombre,
        'direccion':direccion,
        'telefono':telefono,
        'estado':'Inscrito'
    }
    usuarios.push(infoUser);
    
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    console.log(usuarios)

    alert("Usuario registrado");

    email.value = "";
    contraseña.value = "";
});

logInForm.addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("emailLI").value;
    const contraseña = document.getElementById("contraseñaLI").value;

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(user =>
        user.email === email && user.contraseña === contraseña
    );

    if (usuarioEncontrado) {
        alert("Bienvenido");
    } else {
        alert("Credenciales incorrectas");
    }

    return usuarioEncontrado
});
