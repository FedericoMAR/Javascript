

    document.getElementById("findmaximum").onclick = function() {
        var x = document.getElementById("number1").value;
        var y = document.getElementById("number2").value;
        findMaximum(x,y);
    }

function findMaximum(number1, number2){
    let result;
    console.log(number1);
    let difference = number1 - number2;
    console.log(difference);
    if(difference<0){
        result = number2;
    }
    else if(difference>0){
        result = number1;
    }
    else if(difference==0){
        result = "the numbers are equal";
    }
    document.getElementById("maximum_number").innerHTML = result;
}