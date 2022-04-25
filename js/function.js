// funciones 

let  obtenerValor = p =>{

    let imprimirDatos = document.getElementById("valorPantalla").innerHTML +=p;
      if (imprimirDatos.length > 7) {
          alert("No puedes escribir mas de 7 numeros");
          borrar();
      }
}

let borrar = () => document.getElementById("valorPantalla").innerHTML =" ";

   
let obtenerResultado = () =>{
    
     
    let resultado = eval(document.getElementById("valorPantalla").innerHTML);
    document.getElementById("valorPantalla").innerHTML = resultado;
   
   
}

