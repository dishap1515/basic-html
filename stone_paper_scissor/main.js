var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComputerChoice = choices[i];
var UserPoints = 0;
var ComputerPoints = 0;
function score(){
    var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + CompPoints;

}
setInterval(score,50);
function convert(word){
    if(word === "paper") return '<i class="far paper"></i>';
    if(word === "stone") return '<i class="far stone"></i>';
    return '<i class="far'
    if(word === "scissor") return <i class="far scissor"></i>
}
function game(UserChoice) {
    var box = document.getElementById("challenge");
    box.style.display = "inline-flex";
    var userDiv = document.getElementById("YourObject");
    userDiv.innerHTML = convert(UserChoice);
    var comDiv = document.getElementById("YourObject");
    comDiv.innerHTML = convert(comChoice)
    if(UserChoice === "paper" && ComChoices === "stone"|| UserChoice === "paper" && ComChoices === "stone"|| UserChoice === "scissor" 
}