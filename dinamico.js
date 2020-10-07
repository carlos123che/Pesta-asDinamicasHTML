var numeros = [1];
var areaSelect = ""
window.onload = function(){

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
        newContent.setAttribute("value", nombre);
        newContent.setAttribute("onClick", "test();")
        const contenido = document.getElementById("content");
        contenido.appendChild(newContent);

        var newDiv = document.createElement("div");
        nombre2 = "tab" + String((numeros[numeros.length - 1]));
        newDiv.setAttribute("class", "tab");
        newDiv.setAttribute("id", nombre2);
        var texto = document.createElement("p");
        texto.textContent = "texto prueba pela la verga";
        newDiv.appendChild(texto);
        contenido.appendChild(newDiv);

    });

    function $(selector){
        return document.querySelector(selector);
    }
}

function $(selector){
    return document.querySelector(selector);
}



function test(){
   var seleccion =  $("input[class='radio']:checked").val();
   seleccion2 = seleccion.replace("radio", "");
   seleccion2 = "tab" + seleccion2;
   seleccion = "#" + seleccion
   $(seleccion).prop("checked", false);

   if(areaSelect==""){
        const div = document.getElementById(seleccion2);
        div.classList.remove('tab');
        div.classList.add('tabS');
   }else{
       const divAnterior = document.getElementById(areaSelect);
       const divActual = document.getElementById(seleccion2);
       divAnterior.classList.remove('tabS');
       divAnterior.classList.add('tab');

       divActual.classList.remove('tab');
       divActual.classList.add('tabS');
   }
   areaSelect = seleccion2;

}