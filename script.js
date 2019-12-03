var ui =0;
var cpu=0;

//1 rock | 2 paper | 3 scissors
// 1-2 L | 1-3 W | 2-1 W | 2-3 L | 3-1 L | 3-2 W

function store_ui(uin){

    ui = uin;

    randrand_rps();
}

function randrand_rps(){

    cpu = Math.floor(Math.random() * 3)+1;
    var text = "";

    switch (cpu) {


        case 1:
            text = "ROCK"; 
            break;
        case 2:
            text = "PAPER";
            break;

        case 3:
            text = "SCISSORS";
            break;
        default:
            text = "OOF";

    }

    document.getElementById("cpu_out").innerText = "CPU: " + text;
  
    evaluate();
}

function evaluate(){

    var out_msg ="";
    if (ui==cpu) {
        out_msg = "DRAW";
    }else if (ui == 1){
        if (cpu==2){ //1-2
            out_msg = "LOSS";
        } else { out_msg = "WIN"; } //1-3
    }else if (ui == 2) { 
        if (cpu == 1) { //2-1
            out_msg = "WIN";
        } else { out_msg = "LOSS"; } //2-3
    } else{
        if (cpu == 1) {
            out_msg = "LOSS"; // 3 -1
        } else { out_msg = "WIN"; } //3-2
    }

    document.getElementById("results").innerText = "RESULTS: " + out_msg;

}