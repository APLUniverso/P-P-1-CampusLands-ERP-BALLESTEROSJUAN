const trainerForm = document.getElementById("trainerlogin")
const trainers = [{
    "nombre":"Pedro",
    "correo":"pedro@gmail.com",
    "contraseña":"1234"
}]

trainerForm.addEventListener("submit", function(e){
    e.preventDefault();

    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;

    const trainerEncontrado = trainers.find(trainer =>
        trainer.correo === correo && trainer.contraseña === contraseña
    );

    if (trainerEncontrado) {
        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        alert("Bienvenido ");
        console.log(usuarios)
    } else {
        alert("Credenciales incorrectas");
    }
});
