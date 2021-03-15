
var cont = 0;

function changePosition(){
    let button_1 = document.getElementById("button_1");
    let button_2 = document.getElementById("button_2");
    if(cont % 2 === 0 ){
        button_1.style.order = "2";
        button_2.style.order = "1";
        cont++;
    }
    else{
        button_1.style.order = "1";
        button_2.style.order = "2";
        cont++;
    }
};

function sacarAlerta(){
    alert("YEEEES YOU ARE THE CUTEST!");
};
