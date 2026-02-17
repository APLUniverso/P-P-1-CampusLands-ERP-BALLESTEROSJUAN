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
                console.table(camperNames);
                //PEDIMOS EL ID DEL ESTUDIANTE QUE QUIERE CAMBIAR
                const IDcamper = prompt("Digite el ID del estudiante al cual quiere modificarle la nota");

                let skills = Object.keys(usuarios[IDcamper].notas)
                //PEDIMOS LA SKILL A LA QUE QUIERE CAMBIAR LA NOTA
                const skill = prompt(skills.map((skill,index) => index +".  " + skill).join("\n")+"\nseleccione una");

                let subSkills = Object.keys(usuarios[IDcamper].notas[skills[skill]]);
                //PEDIMOS LA SUBSKILL A PARA QUE CAMBIE LA NOTA
                const subSkill = prompt(subSkills.map((subSkill,index)=>index +".  " + subSkill).join("\n")+"\nseleccione una");

                //PEDIMOS LA NOTA NUEVA
                const nota = Number(prompt("Digite la nota del estudiante"));
                var usuariosNuevo = usuarios;
                //ESTUDIANTE            NOTAS SKILL          SUBSKILL
                usuariosNuevo[IDcamper].notas[skills[skill]][subSkills[subSkill]] = nota;

                //SE GUARDA LA INFORMACION EN LA BASE DE DATOS
                localStorage.setItem("usuarios", JSON.stringify(usuariosNuevo));
                break;

            case 3:
                console.log("Elegiste 3");
                break;

            default:
                console.log("Opción no válida");
        }

        
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
