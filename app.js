// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let listaAuxiliar = [];
function agregarAmigo()
{
    
    let amigoNuevo = nombrePropio(manejadorCampoTextoAmigo());
    if (amigoNuevo == ""){
        alert('Debe ingresar un nombre válido');
    }
    else if (amigos.map(amigo => amigo.toLowerCase()).includes(amigoNuevo.toLowerCase()))
    {       /*convierte la palabra ingresada a minúsculas y verifica si ya existe con includes 
              y en minúsculas con toLowerCase()  
            */
        //Se valida que el nombre no se repita y de ser así lo omite (valida minúculas)
        alert(`El amigo ${amigoNuevo} ya está incluido`);
    }
    else{
        amigos.push(amigoNuevo);
        actualizarListaDeAmigos(amigos);

     

        console.log(amigos)
    }

    return;
}

function actualizarListaDeAmigos(amigos) 
{   
    limpiarListas();
    //Se crea una variable lista que se obtiene del id 'listaAmigos del HTML'
    let lista = document.getElementById('listaAmigos');
    
    //lista.innerHTML = ''; //Se limpia la lista existente y se deja vacía con ="""

    for(let i = 0; i < amigos.length; i++)
    {
        //Se crea un elemento de lista 'li'
        let amigo = document.createElement('li');
        
        //Se convierte el elemento amigo a texto
        amigo.textContent = amigos[i];

        //Utilizando la función appendChild se agrega el elemento amigo a la lista
        lista.appendChild(amigo);
    }

    return;
}

function sortearAmigo()
{
    
    limpiarListas();
    let lista = document.getElementById('resultado');
    let ultimoIndice = null;
    let indice,  textoCompleto;
    let elemento = document.createElement('li');


    if (amigos.length == 0)
    {
        //let lista = document.getElementById('resultado');
        //elemento = document.createElement('li');
        textoCompleto = document.createTextNode(`No hay amigos para sortear`);
        elemento.appendChild(textoCompleto);
        lista.appendChild(elemento);    
    }
    else if (listaAuxiliar.length >= amigos.length )
    {  
        textoCompleto = document.createTextNode("Fin del sorteo, no hay más amigos");
        elemento.appendChild(textoCompleto);
        document.getElementById('button-sortear').setAttribute('disabled', 'true');
        lista.appendChild(elemento);
    }
    else    
    {    
     do 
     {
        indice = Math.floor(Math.random() * (amigos.length));
        console.log(indice);    
    } while (listaAuxiliar.includes(amigos[indice]));
        
        //ultimoIndice = indice;
        amigoSeleccionado = amigos[indice];
        listaAuxiliar.push(amigoSeleccionado);
        console.log(listaAuxiliar);

        //Con la función createTextNode() se crea un elemento para concatenar el texto solicitado con el amigo seleccionado
        
        textoCompleto = document.createTextNode(`El amigo sorteado es: ${amigoSeleccionado}`);
        
        elemento.appendChild(textoCompleto);
        lista.appendChild(elemento);
    }
}

function manejadorCampoTextoAmigo()
{   
    //Se crea una variable que es igual al campo de texto en donde se escribirá el nombre del amigo nuevo
    let campoAmigo = document.getElementById('amigo');
    //Se crea una variable para obtener el nombre escrito en el campo del texto
    let textoCampoAmigo = campoAmigo.value;
    //Se deja el campo en blanco luego de tmar el texto
    campoAmigo.value = "";
    //Se retorna el cursor al campo para ingresar el nombre luego de oprimir el botón Añadir
    campoAmigo.focus();
    //Se retorna el texto leído en la variable textoCampoamigo
    return textoCampoAmigo;
}

function nombrePropio(nombre)
{
    return  nombre.split(' ').map(palabra => palabra.charAt(0).toUpperCase() +
            palabra.slice(1).toLowerCase()).join(' '); 
    
    /*
     nombre.split(' ') divide un nombre compuesto por el espacio.
     
     map convierte en una especie de subvector los nombres seaprados y cada nombre 
         lo toma como un elemento de ese subvector.
     chartAt(0).ToUpperCase(0) toma el primer caracter de cada nombre y lo convierte a mayúscula.
     slice(1).ToLowererCase(1) toma desde segundo caracter de cada nombre y lo convierte a minúscula.
     + sirve para concatenar cada caracter
     .join(' ') une las palabras o nombres resultantes lusgo de transformarlos.    
    */ 
}

function limpiarListas() 
{
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    let listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';
}




