var ui =0;
var cpu=0;
var pressing = false;
var cpu_score = 0;
var p_score = 0;
var end = false;

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

    document.getElementById("cpu").innerText = text;
  
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

    assess(out_msg)
    document.getElementById("results").innerText = "CPU: " + cpu_score + " YOU: " + p_score;

}

function assess(inp){

    if (p_score < 5 && cpu_score < 5){

        if (inp == "WIN") {
            p_score += 1;
        }

        if (inp == "LOSS") {
            cpu_score += 1
        }

        if (inp == "DRAW") {
            cpu_score += 1
            p_score += 1;
        }

    }else {

        if (cpu_score<p_score){
            document.getElementById("cpu").innerText = "YOU WON -- press any button to continue";
        }else{
            document.getElementById("cpu").innerText = "YOU LOST -- press any button to continue";
        }

        end = true;

    }

    return inp;

}

function buttonPress(e){

    if (!end){
        const button = document.querySelector(`button[data-key="${e.keyCode}"]`);
        button.classList.add('animating');

        if (!pressing) {
            store_ui(e - 36);
        }

        pressing = true; //todo make pressing a list with currently pressed buttons
    }else {
        reset();
    }
    
}

function buttonUnpress(e) {

    const button = document.querySelector(`button[data-key="${e.keyCode}"]`);
    button.classList.remove('animating');
    pressing=false;

}

function reset(){

    ui = 0;
    cpu = 0;
    pressing = false;
    cpu_score = 0;
    p_score = 0;
    end = false;


}

const buttons = Array.from(document.querySelectorAll('.button'));



window.addEventListener('keydown', buttonPress);
window.addEventListener('keyup', buttonUnpress)
