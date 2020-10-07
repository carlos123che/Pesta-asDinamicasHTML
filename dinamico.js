window.onload = function(){

    var numeros = [1];
    $('#btn').addEventListener("click", function(){
        var nuevaLab = document.createElement("label");
        var nombre = "radio" + String((numeros[numeros.length -1] + 1));
        nuevaLab.setAttribute("for", nombre);
        nuevaLab.textContent = "Pagina" + (numeros[numeros.length -1] + 1);
        numeros.push(numeros.length + 1);
        const c = document.getElementById('lbl');
        c.appendChild(nuevaLab);

        var newContent = document.createElement("input");
        newContent.setAttribute("type", "radio");
        newContent.setAttribute("class", "radio");
        newContent.setAttribute("id", nombre);
        const contenido = document.getElementById("content");
        contenido.appendChild(newContent);

        var newDiv = document.createElement("div");
        nombre2 = "tab" + String((numeros[numeros.length - 1]));
        newDiv.setAttribute("class", nombre2);
        var texto = document.createElement("p");
        texto.textContent = "texto prueba pela la verga";
        newDiv.appendChild(texto);
        contenido.appendChild(newDiv);

    });

    function $(selector){
        return document.querySelector(selector);
    }


    function test(){
        numeros.forEach(numero => {
            var seleccion = "#radio" + String(numero);
            $(seleccion).click(function(){
                alert(seleccion);
            });
        });
    }
}