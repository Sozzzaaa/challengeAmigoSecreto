// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

const listaHTML = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const inputNewAmigo = document.getElementById("amigo");
const botonAgregar = document.getElementById("botonAgregar");

function limpiarHTML(elementoID)
{
    let elementoBorrar = document.getElementById(elementoID);
    elementoBorrar.innerHTML="";
}
function limpiarElemento(elementoID)
{
    document.getElementById(elementoID).value = "";

}

function generarListaHTML()
{
    listaHTML.innerHTML="";    
    for( let i = 0 ; i<amigos.length; i++)
    {
        let newListItem = document.createElement('li');
        newListItem.innerHTML = amigos[i];
        listaHTML.appendChild(newListItem);
    }
}

function sortearAmigo()
{
    if(amigos.length === 0)
    {
        alert("La lista de amigos esta vacia!");
    }
    else
    {
        let indexNombreSeleccionado = Math.floor(Math.random()*amigos.length);
        console.log(amigos[indexNombreSeleccionado]);

        resultado.innerHTML = "Amigo seleccionado: " + amigos[indexNombreSeleccionado] + "!";
    }
    
}
function agregarAmigo()
{
    let newName = inputNewAmigo.value;
    if (newName == "")
    {
        alert("No puedes dejar vacio este campo!");
    }
    else if(amigos.includes(newName))
    {
        alert("Ya ingresaste a un amigo con ese nombre!");
        limpiarElemento("amigo");
    }
    else
    {
        //agregar a mi array
        amigos.push(newName);
        console.log(amigos);

        //borrar contrenido existente
        limpiarElemento("amigo");

        //agregar a la listaHTML
        generarListaHTML();
    }

}

inputNewAmigo.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      //event.preventDefault();   // stop default behavior
      botonAgregar.click();           // simulate button click
    }
  });
