//array para pruebas de localStorag
const notaArray= [
        
]

const cartNote={}

function newNote (){
    //revisa que el input tenga contenido
    const inputs= document.querySelectorAll('.inputNote')
    const inputLleno=true;
    for(var i=0; i < inputs.length ; i++) {
        if (inputs[i].value==="") {
            alert("Añade una Tarea Bobo HPTA")
            inputLleno= false;
            break;
        }
        if(inputLleno){
            const note= document.getElementById("textNote").value;//toma el valor del input
            const cardNote= document.createElement("H2");//crea un H2
            //crea un boton y se le da clases 
            const elmButton= document.createElement("button")
            elmButton.classList.add("elmButtom")
            elmButton.textContent = "-"
            cardNote.textContent= note;
            //toma el contenedor de HTML y añade cardNote y elmButton
            const contenedor= document.getElementById("container");
            contenedor.appendChild(cardNote);
            cardNote.appendChild(elmButton);
            //el input queda sin contenido
            document.getElementById("textNote").value="";

            //si se da clic al boton se activa la funcion elmNote
            elmButton.addEventListener("click", elmNote);
        } 
    }
    
}
function elmNote() {
     // Obtener el padre del botón (que es el H2) y eliminarlo
     this.parentElement.remove();
}



