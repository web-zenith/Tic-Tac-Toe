let box = document.querySelector(".table_gird");
let score = document.querySelector(".score_box");
let x_img = `<img src="image/x.png" alt="Check Your Internet Connection.">`;
let o_img = `<img src="image/o.png" alt="Check Your Internet Connection.">`;
let box_data = [,,,,,,,,];
let turn_count = 0;
let plop = new Audio("sound/Plop.mp3")
let win = new Audio("sound/Win.mp3")
// let turn = 0;
//render function()
function render(){
    if (box_data[0] === 1) {
        box.children[0].innerHTML = o_img;
    }
    if (box_data[0] === 0){
        box.children[0].innerHTML = x_img;
    }
    
    if (box_data[1] === 1) {
        box.children[1].innerHTML = o_img;
    }
    if (box_data[1] === 0){
        box.children[1].innerHTML = x_img;
    }
    
    if (box_data[2] === 1) {
        box.children[2].innerHTML = o_img;
    }
    if (box_data[2] === 0){
        box.children[2].innerHTML = x_img;
    }
    
    if (box_data[3] === 1) {
        box.children[3].innerHTML = o_img;
    }
    if (box_data[3] === 0){
        box.children[3].innerHTML = x_img;
    }
    
    if (box_data[4] === 1) {
        box.children[4].innerHTML = o_img;
    }
    if (box_data[4] === 0){
        box.children[4].innerHTML = x_img;
    }

    if (box_data[5] === 1) {
        box.children[5].innerHTML = o_img;
    }
    if (box_data[5] === 0){
        box.children[5].innerHTML = x_img;
    }
    
    if (box_data[6] === 1) {
        box.children[6].innerHTML = o_img;
    }
    if (box_data[6] === 0){
        box.children[6].innerHTML = x_img;
    }
    
    if (box_data[7] === 1) {
        box.children[7].innerHTML = o_img;
    }
    if (box_data[7] === 0){
        box.children[7].innerHTML = x_img;
    }
    
    if (box_data[8] === 1) {
        box.children[8].innerHTML = o_img;
    }
    if (box_data[8] === 0){
        box.children[8].innerHTML = x_img;
    }
}
function turn() {
    plop.play()
    turn_count = 1-turn_count;
    if (turn_count == 0) {
        score.innerHTML = "<b>O</b>&nbsp;&nbsp; Turn"
    }
    else{
        score.innerHTML = "<b>X</b>&nbsp;&nbsp; Turn"
    }
}
function main(e){
    console.log(e)
    box_data[e.getAttribute("boxId")] = turn_count;
    e.setAttribute("disabled", "true")
    render();
    check_winner();
    // check_draw();
}
function check_draw(){
    if (box.children[0].getAttribute("disabled")==="true" && box.children[1].getAttribute("disabled")==="true" && box.children[2].getAttribute("disabled")==="true" && box.children[3].getAttribute("disabled")==="true" && box.children[4].getAttribute("disabled")==="true" && box.children[5].getAttribute("disabled")==="true" && box.children[6].getAttribute("disabled")==="true" && box.children[7].getAttribute("disabled")==="true" && box.children[8].getAttribute("disabled")==="true") {
        score.innerHTML = "Its Draw!"
        disableAll()
    }
}
function check_winner() {
    // Circle Check
    if (box_data[0] === 1 && box_data[1] === 1 && box_data[2] === 1) {
        score.innerHTML = `<b>O</b>&nbsp;&nbsp;Wins!`;
        disableAll();
    }
    else if (box_data[3] === 1 && box_data[4] === 1 && box_data[5] === 1) {
        score.innerHTML = `<b>O</b>&nbsp;&nbsp;Wins!`;
        disableAll();
    }
    else if (box_data[6] === 1 && box_data[7] === 1 && box_data[8] === 1) {
        score.innerHTML = `<b>O</b>&nbsp;&nbsp;Wins!`;
        disableAll();
    }
    else if (box_data[0] === 1 && box_data[3] === 1 && box_data[6] === 1) {
        score.innerHTML = `<b>O</b>&nbsp;&nbsp;Wins!`;
        disableAll();
    }
    else if (box_data[1] === 1 && box_data[4] === 1 && box_data[7] === 1) {
        score.innerHTML = `<b>O</b>&nbsp;&nbsp;Wins!`;
        disableAll();
    }
    else if (box_data[2] === 1 && box_data[5] === 1 && box_data[8] === 1) {
        score.innerHTML = `<b>O</b>&nbsp;&nbsp;Wins!`;
        disableAll();
    }
    else if (box_data[0] === 1 && box_data[4] === 1 && box_data[8] === 1) {
        score.innerHTML = `<b>O</b>&nbsp;&nbsp;Wins!`;
        disableAll();
    }
    else if (box_data[2] === 1 && box_data[4] === 1 && box_data[6] === 1) {
        score.innerHTML = `<b>O</b>&nbsp;&nbsp;Wins!`;
        disableAll();
    }
    // Cross Check
    else if (box_data[0] === 0 && box_data[1] === 0 && box_data[2] === 0) {
        score.innerHTML = `<b>X</b>&nbsp;&nbsp;Wins!`;
        disableAll();
    }
    else if (box_data[3] === 0 && box_data[4] === 0 && box_data[5] === 0) {
        score.innerHTML = `<b>X</b>&nbsp;&nbsp;Wins!`;
        disableAll();
    }
    else if (box_data[6] === 0 && box_data[7] === 0 && box_data[8] === 0) {
        score.innerHTML = `<b>X</b>&nbsp;&nbsp;Wins!`;
        disableAll();
    }
    else if (box_data[0] === 0 && box_data[3] === 0 && box_data[6] === 0) {
        score.innerHTML = `<b>X</b>&nbsp;&nbsp;Wins!`;
        disableAll();
    }
    else if (box_data[1] === 0 && box_data[4] === 0 && box_data[7] === 0) {
        score.innerHTML = `<b>X</b>&nbsp;&nbsp;Wins!`;
        disableAll();
    }
    else if (box_data[2] === 0 && box_data[5] === 0 && box_data[8] === 0) {
        score.innerHTML = `<b>X</b>&nbsp;&nbsp;Wins!`;
        disableAll();
    }
    else if (box_data[0] === 0 && box_data[4] === 0 && box_data[8] === 0) {
        score.innerHTML = `<b>X</b>&nbsp;&nbsp;Wins!`;
        disableAll();
    }
    else if (box_data[2] === 0 && box_data[4] === 0 && box_data[6] === 0) {
        score.innerHTML = `<b>X</b>&nbsp;&nbsp;Wins!`;
        disableAll();
    }
    else{
        check_draw()
    }
}
function disableAll() {
    win.play()
    score.innerHTML += "<br><button class='play_again' onclick='location.reload()'>Play Again!</button>"
    box.children[0].setAttribute("disabled", "true");
    box.children[1].setAttribute("disabled", "true");
    box.children[2].setAttribute("disabled", "true");
    box.children[3].setAttribute("disabled", "true");
    box.children[4].setAttribute("disabled", "true");
    box.children[5].setAttribute("disabled", "true");
    box.children[6].setAttribute("disabled", "true");
    box.children[7].setAttribute("disabled", "true");
    box.children[8].setAttribute("disabled", "true");
}