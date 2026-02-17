const signInForm = document.getElementById("signInForm");
const logInForm = document.getElementById("logInForm");

signInForm.addEventListener("submit", function(e){
    e.preventDefault(); 

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let infoUser = {
        email:document.getElementById("emailSI").value,
        contraseña:document.getElementById("contraseñaSI").value,
        nombre:document.getElementById("nombre").value,
        direccion:document.getElementById("direccion").value,
        telefono:document.getElementById("telefono").value,
        estado:'Inscrito',
        notas:{
            software:{
                python: null,
                javaScript:null,
                github:null
            },
            ser:{
                autolab:null,
            },
            ingles:{
                b11:null
            }
        }
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
