

    document.getElementById("findout").onclick = function() {
        var x = document.getElementById("number").value;
        fizzBuzz(x);
    }

function fizzBuzz(number){
    console.log(number);
    if(number%3 == 0){
        result = "fizz";
        if(number%5==0){
            result="fizzbuzz";
        }
    }
    else if(number%5 == 0){
        result = "buzz";
    }
    else{
        result = "Non divisibile";
    }
    document.getElementById("Fizzbuzz").innerHTML = result;
}