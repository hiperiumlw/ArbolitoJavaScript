//var altura = prompt("Introduce la altura")


function generarArbolito() {
    var altura = document.getElementById("altura").value;
    if (altura.length === 0){
        alert("No ha introducido ninguna altura");
    } else if (isNaN(altura)) {
        alert("No es un numero , porfavor , introduce un numero")
    } else{


        var arbol = "";
        for (let i = 1; i <= altura; i++) {
            for (let j = i; j < altura; j++) {
                arbol += " ";
            }

            for (let j = 1; j < i + i; j++) {
                arbol += "*";
            }
            arbol += "\n";
        }
        /*let tabla_vieja = document.getElementById("arbolito_viejo");
        tabla_vieja.hidden = true;
        let tabla_nueva = document.getElementById("arbolito_nuevo");
        tabla_nueva.hidden = false;*/
        var arbolito = document.createElement("TEXTAREA");
        var textoArbolito = document.createTextNode(arbol);
        arbolito.appendChild(textoArbolito);
        var tabla = document.getElementById("arbolito");
        tabla.appendChild(arbolito);

    }
}

//console.log(arbol);