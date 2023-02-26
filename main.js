//INGRESO AL SISTEMA (CONTRASENA 12345678)

let nombreAlumno = (prompt("Bienvenido! Ingrese nombre del alumno:"));
let contraseniaAlumno = (parseInt(prompt(nombreAlumno + " ingrese su contrasena (Numero de DNI)")));
const contraseniaCorrecta = 12345678;

for(i = 0 ; i < 2 ; i++){
    if (contraseniaAlumno === contraseniaCorrecta){
        alert("Has ingresado al sistema de notas");
        break 
        } else {
        contraseniaAlumno=parseInt(prompt("Contrasenia incorrecta, ingrese de nuevo"));
        }
};

//PROMEDIO DE CUATRIMESTRES

function sumarNotas (notaPrimerCuatri, notaSegundoCuatri, notaTercerCuatri, notaCuartoCuatri){
let sumarNotas = notaPrimerCuatri + notaSegundoCuatri + notaTercerCuatri + notaCuartoCuatri;
return sumarNotas;
}

let notaPrimerCuatri = (parseFloat(prompt("Ingrese la nota del primer cuatrimestre")));
let notaSegundoCuatri = (parseFloat(prompt("Ingrese la nota del segundo cuatrimestre")));
let notaTercerCuatri = (parseFloat(prompt("Ingrese la nota del tercer cuatrimestre")));
let notaCuartoCuatri = (parseFloat(prompt("Ingrese la nota del cuarto cuatrimestre")));

let sumaDeNotas = sumarNotas(notaPrimerCuatri, notaSegundoCuatri, notaTercerCuatri, notaCuartoCuatri);

let promedio = sumaDeNotas / 4;
alert("Su promedio es: " + promedio);

//PASAR DE ANIO

if (promedio >= 6){
    alert ("FELICITACIONES!!! HAS PASADO DE ANIO");
} else{
    alert ("Lo sentimos :( No has llegado al promedio para pasar de anio.");
}