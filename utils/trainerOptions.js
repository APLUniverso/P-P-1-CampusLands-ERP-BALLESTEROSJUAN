const trainerForm = document.getElementById("trainerlogin")
const trainers = [{
    "nombre":"Pedro",
    "correo":"a",//pedro@gmail.com
    "contraseña":"a"
}]

trainerForm.addEventListener("submit", function(e){
    e.preventDefault();

    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;

    const trainerEncontrado = trainers.find(trainer =>
        trainer.correo === correo && trainer.contraseña === contraseña
    );

    if (trainerEncontrado) {
        alert("Bienvenido " + trainerEncontrado.nombre);

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        console.log();
        var option = Number(prompt("1.  Ver notas de los estudiantes\n2.  Modificar nota de estudiante"));

        switch (option) {
            case 1:
                console.log("Elegiste 1");
                console.table(usuarios);
                break;

            case 2:
                console.log("Elegiste 2");

                let camperNames = usuarios.map(camper => camper.nombre);
                console.table(camperNames)
                var IDcamper = prompt("Digite el ID del estudiante al cual quiere modificarle la nota")

                var skill = prompt(Object.keys(usuarios[IDcamper].notas).map((skill,index) => index +".  " + skill+"\n")+"seleccione una")
                console.table(skill)
                break;

            case 3:
                console.log("Elegiste 3");
                break;

            default:
                console.log("Opción no válida");
        }
        
        console.log(option);

        
    } else {
        alert("Credenciales incorrectas");
    }
});

function encontrar(array,object){
    const objectEncontrado = array.find(trainer =>
        trainer.correo === object
    );

    if (objectEncontrado){
        return objectEncontrado
    }

    return false
}
