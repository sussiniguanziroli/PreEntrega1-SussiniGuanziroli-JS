function ingresarNumero(mensaje) {
    let numeroIngresado;
    do {
        numeroIngresado = prompt(mensaje);
        if (isNaN(numeroIngresado)) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (isNaN(numeroIngresado));
    return parseFloat(numeroIngresado);
}

function calcularPromedioNotas() {
    let numCursos = ingresarNumero("Ingrese el número de cursos a evaluar:");

    let totalNotas = 0;

    for (let i = 1; i <= numCursos; i++) {

        let numAlumnosCurso = ingresarNumero(`Ingrese el número de alumnos para el curso ${i}:`);
        let sumaNotasCurso = 0;


        console.log(`El curso ${i} tiene ${numAlumnosCurso} alumnos.`);

        for (let j = 1; j <= numAlumnosCurso; j++) {
            let nota = ingresarNumero(`Ingrese la nota del alumno ${j} para el curso ${i}:`);


            sumaNotasCurso += nota;
        }

        let promedioCurso = sumaNotasCurso / numAlumnosCurso;
        totalNotas += promedioCurso;
        console.log(`El promedio de notas para el curso ${i} es: ${promedioCurso.toFixed(2)}`);
    }


    let promedioTotal = totalNotas / numCursos;
    console.log(`El promedio total de notas de todos los cursos es: ${promedioTotal.toFixed(2)}`);
}


calcularPromedioNotas();