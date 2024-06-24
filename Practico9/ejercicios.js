/*function test1(x, y) {
    return y - x
  }
  
  test1(10, 40)
  //Retorna 30
  
  function test2(x, y) {
    return x * 2
    console.log(x)
    return x / 2
  }
  
  test2(10)
 //RETORNA 20 */


 /*function triplicador(num) {
    return num * 3
 }
 function multiplicador(num1, num2) {
    return num1 * num2
 }
 function division(num1, num2) {
    return num1 / num2
 }
 function resto(num1, num2) {
    return num1 % num2
 }

 let resultado = triplicador(5)
 resultado= multiplicador(resultado,12)
 resultado= division(resultado,12)
 resultado= resto(resultado,3)

 console.log("El resultado es"+resultado)*/

function contarDeA_n(contar_de_a,contar_hasta) {
        for (let index = 0; index <= contar_hasta; index+=contar_de_a) {
           console.log(index)
            
        }
 }

 contarDeA_n(2,10);

 /*function fizzBuzz2() {
    let palabra1="SANTOS"
    let palabra2="MULTIPLOS",
    fizz_num= prompt("Ingrese un numero para buscar el multiplo"), 
    buzz_num= prompt("Ingrese otro numero para buscar el multiplo"),
    num_hasta=prompt("Ingrese el numero hasta el cual contar")
    for (let index = 0; index <= num_hasta; index++) {
       
       if (index % buzz_num==0 && index % fizz_num==0) {
        console.log(palabra1, palabra2)
       }
       else if (index % fizz_num ==0 ) {
        console.log(palabra1)
       }
       else if (index % buzz_num ==0) {
        console.log(palabra2)
       }else{
        console.log(index)
       }
       
    }
 }
 fizzBuzz2()*/