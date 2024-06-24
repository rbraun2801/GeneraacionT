//EJERCICIO 1

//lert("Bienvenidos!!")
//let nombre=prompt("Por favor ingrese su nombre")
//alert(`Bienvenido ${nombre}`)
//let edad=prompt("Por favor ingrese su edad")
//alert(`Su nombre es ${nombre} y su edad es ${edad}`)

//EJERCICIO 2

/*let nombre="Roberto",
edad=20,
cumple="28/01/87",
ciudad="Cinco Saltos",
ocupacion="Administrativo",
pasatiempos="jugar al futbol"

console.log(`
    Mi nombre es ${nombre}, tengo ${edad}, cumplo años el dia ${cumple}.
    Vivo en ${ciudad}, mi ocupacion actual es ${ocupacion}, 
    y mi pasatiempos es ${pasatiempos}
    `)*/

//EJERCICIO 3

/*let cadena= prompt("Por favor ingrese un texto")

console.log("La cantidad de caracteres del texto ingresado es "+ cadena.length);*/

/*EJERCICIO 4
UTILIZO LA VARIABLE CREADA EDAD ANTERIORMENTE*/

//let edadEnDias= edad*365

//alert(`Su edad representa ${edadEnDias} dias`)
/*
number1= prompt("Por favor ingrese el primer numero de la suma")
number2= prompt("Por favor ingrese el segundo numero de la suma")
let result= Number(number1)+Number(number2)

alert("El resultado de la suma es:" + result)*/

//EJERCICIO 5

/*let edad = 37,
edadMaxima=79,
snackDiario=6,
precioSnack=700;

let snackFaltantes= (edadMaxima - edad)*snackDiario;

alert(`Necesitarás ${snackFaltantes} snacks para que te alcancen hasta los ${edadMaxima} años.`)

alert(`El costo de los snack faltantes es ${precioSnack*snackFaltantes}`) */

let diasVacas=30,
comidasViaje=60,
gastoComida,
presupuesto=30000;

gastoComida=30000/(30*60)

alert(`Podés gastar ${gastoComida.toFixed(2)} en cada comida para que te alcance la plata durante los ${diasVacas} días de viaje`)