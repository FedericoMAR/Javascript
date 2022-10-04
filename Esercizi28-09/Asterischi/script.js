

    document.getElementById("stampa").onclick = function() {
        var x = document.getElementById("number").value;
        stampaAsterischi(x);
    }

function stampaAsterischi(number){
    console.log(number);
   for(var i=1;i<=number;i++){
        for(var j=1;j<=i;j++){
        document.write('*');
        }
        document.write('</br>');
   }
}