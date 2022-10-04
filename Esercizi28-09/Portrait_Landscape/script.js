

    document.getElementById("findout").onclick = function() {
        var x = document.getElementById("height").value;
        var y = document.getElementById("width").value;
        findMaximum(x,y);
    }

function findMaximum(number1, number2){
    let result;
    let difference = number1 - number2;
    if(difference<0){
        result = "It's a landscape";
    }
    else if(difference>0){
        result = "It's a portrait";
    }
    else if(difference==0){
        result = "Il quadro è quadrato";
    }
    document.getElementById("maximum_number").innerHTML = result;
}