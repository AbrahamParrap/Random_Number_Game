window.alert("Bienvenidos a este practica que he realizado con Html/Css/Js");

//Variables que utilizaremos para seleccionar el rango de el juego.
let Num_Max;
let Num_Min;

/*
Con este codigo conectamos nuestro
H1 con el id que le colocamos y con 
la funcion .textContent
colocamos lo que queremos que diga.
*/
document.getElementById("Titulo").textContent = "Generador de Numeros Randoms";


/*Codigo para programar nuestro boton Submit,
este boton tiene la funcionalidad de guardar
los valores de los textbox en una variable
*/
document.getElementById("Submit").onclick = function(){


    //Aqui guardamos los datos de el textbox en las variables.
    Num_Max = document.getElementById("Numero_Max").value;
    Num_Min = document.getElementById("Numero_Min").value;

    //Aqui cambiamos el tipo de variable a una numerica.
    Num_Min = Number(Num_Min);
    Num_Max = Number(Num_Max);


    //Con estos if confirmaremos que los numeros dados esten en el orden correcto, para que el programa no de error.
    if(Num_Min == Num_Max){
        window.alert("Confirma que los numeros no sean iguales o que los campos no esten vacios.");
    }
    else if(Num_Max <= Num_Min){
        window.alert("El numero maximo no puede ser menor o igual que el minimo");
    }
    else if(Num_Min >= Num_Max){
        window.alert("El numero minimo no puede ser mayor o igual que el maximo");
    }
    else{
        //Esta es la formula para generar nuestro numero random con el rango de numeros dados.
    let Num_Rand = Math.floor(Math.random() * Num_Max) + Num_Min;
    
    //Con esto mostramos el numero en pantalla.
    document.getElementById("Random_Num").textContent = Num_Rand;

    }
}

