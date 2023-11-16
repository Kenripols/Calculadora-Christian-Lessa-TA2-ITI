function init() {
    /* Variables */
    var num1;
    var num2;
    var operando;
    var operacion = document.getElementById("numactual");
    var resultado= document.getElementById("numguardado");
    var borrarnum = document.getElementById("btnborrar");
    var reset = document.getElementById("btnreset");
    var dividir = document.getElementById("btndividir");
    var siete = document.getElementById("btnsiete");
    var ocho = document.getElementById("btnocho");
    var nueve = document.getElementById("btnnueve");
    var multiplicar = document.getElementById("btnmultiplicar");
    var cuatro = document.getElementById("btncuatro");
    var cinco = document.getElementById("btncinco");
    var seis = document.getElementById("btnseis");
    var restar = document.getElementById("btnrestar");
    var uno = document.getElementById("btnuno");
    var dos = document.getElementById("btndos");
    var tres = document.getElementById("btntres");
    var suma = document.getElementById("btnsuma");
    var cero = document.getElementById("btncero");
    var coma = document.getElementById("btncoma");
    var igual = document.getElementById("btnigual");
/* Eventos */
    btncero.onclick = function(e) {
        operacion.textContent = numactual.textContent + "0";
    }

    btnuno.onclick = function(e) {
        operacion.textContent = numactual.textContent + "1";

    }

    btndos.onclick = function(e) {
        operacion.textContent = numactual.textContent + "2";

    }

    btntres.onclick = function(e) {
        operacion.textContent = numactual.textContent + "3";

    }

    btncuatro.onclick = function(e) {
        operacion.textContent = numactual.textContent + "4";

    }

    btncinco.onclick = function(e) {
        operacion.textContent = numactual.textContent + "5";

    }

    btnseis.onclick = function(e) {
        operacion.textContent = numactual.textContent + "6";
    }
    
    btnsiete.onclick = function(e) {
        operacion.textContent = numactual.textContent + "7";
    }
    
    btnocho.onclick = function(e) {
        operacion.textContent = numactual.textContent + "8";
    }
    
    btnnueve.onclick = function(e) {
        operacion.textContent = numactual.textContent + "9";
    }

    btncoma.onclick = function(e) {
        operacion.textContent = numactual.textContent + ".";
    }

    function borrar() {
        var valoractual = numactual.textContent;
        var valorborrado = valoractual.substring(0, valoractual.length - 1);
        numactual.textContent = valorborrado;
    }

    btnborrar.onclick = function(e) {
        borrar();
    }


    function resetear() {
        numactual.textContent=""
        num1 = 0;
        num2 = 0;
        operando = "";
    }


    function limpiar() {
        numactual.textContent="";
    }
    
    
    
   

    function resolucion() {
        if (operando == "+") {
            var res = parseFloat(num1) + parseFloat(num2);
        numactual.textContent = res;
        } else {
            if (operando == "-") {
                 var res = parseFloat(num1) - parseFloat(num2);
            numactual.textContent = res;
            } else {
                if (operando == "*") {
                    var res = parseFloat(num1) * parseFloat(num2);
                    numactual.textContent = res;
                } else {
                    if (operando == "/") {
                        if (parseFloat(num2) !== 0) {
                            var res = parseFloat(num1) / parseFloat(num2);
                        numactual.textContent = res;
                        } else {
                            numactual.textContent = "Error, no se puede dividir entre 0";
                        }
                    }
                    
                }
            }  
        }

                
            
            

        

    }

    btnsuma.onclick = function(e) {
        num1 = numactual.textContent;
        operando = "+";
        limpiar()
    }

    btnrestar.onclick = function(e) {
        num1 = numactual.textContent;
        operando = "-";
        limpiar();
    }
    
    btnmultiplicar.onclick = function(e) {
        num1 = numactual.textContent;
        operando = "*";
        limpiar();
    }
    
    btndividir.onclick = function(e) {
        num1 = numactual.textContent;
        operando = "/";
        limpiar();
    }

    btnigual.onclick  = function(e) {
        num2 = numactual.textContent;
        resolucion();
    }
    btnreset.onclick = function(e) {
        resetear();
    }

    
}



















