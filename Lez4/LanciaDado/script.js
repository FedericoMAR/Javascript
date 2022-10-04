const dado1 = {
    facce: 6,
    faccia: 1,
    lancia:function(){
        console.log("funziona");
    }
};

const btnLancia = document.createElement("button");
btnLancia.textContent = 'Lancia dadi';

const imgDado1 = document.createElement('img');
imgDado1.src = './dado.png';

document.body.appendChild(btnLancia);
document.body.appendChild(imgDado1);