console.log(25);
        console.log("Hola Mundo");
        
        let algo = "Jhon";
        
        console.log("Hola " + algo);
        
        function prueba() {
            return(9*10)}
        console.log(prueba());
        
        function saludar() {
        console.log("Hola mundo");
        }
        function calcular(num1, num2) {
        
            var suma = num1 + num2;
            
            console.log(suma);
        }
for (x=1; x<5; x++){

    console.log("Hola");
    console.log("Mundo");
    console.log("Vuelta número "+x);

    document.write("<h" + x +">Hola Mundo</h" + x + ">");
}

function testLoop() {

    for(x=1; x<6; x++){
        document.write("<p>Vuelta número: "+ x + "</p>");
    }

}

function multiplicar(){

    let iUno = +document.getElementById("iUno").value;
    
        if(iUno>0 && iUno<11){
            
            alert("Funciona");

        }else {

            alert("Ingrse un valor válido 1-10");
        }

        
    }

    alert("Numero "+iUno);

    
    