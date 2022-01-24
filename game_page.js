var player1=localStorage.getItem("player1");
var player2=localStorage.getItem("player2");

document.getElementById("h_1").innerHTML=player1+ ":";
document.getElementById("h_2").innerHTML=player2+ ":";
var player1_score=0;
var player2_score=0;
document.getElementById("span1").innerHTML=player1_score;
document.getElementById("span2").innerHTML=player2_score;
document.getElementById("h3_1").innerHTML="Question turn- "+ player1;
document.getElementById("h3_2").innerHTML="Answer turn- "+ player2;
function percy(){
    var number1=document.getElementById("Input_3").value;
    var number2=document.getElementById("Input_4").value;
    answer1=parseInt(number1)*parseInt(number2);
    console.log(answer1);
    question="<h4>"+ number1+ "X" + number2 +"</h4>";
    Inputbox="<br>Answer : <input type='text' id='input_box'>";
    check1="<br><br> <button class='btn btn-info' onclick='check()'>Check </buton>";
    row=question+Inputbox+check1;
    document.getElementById("div_1").innerHTML=row;
    document.getElementById("Input_3").value="";
    document.getElementById("Input_4").value="";
}
questionturn="player_1";
answerturn="player_2";
function check(){
    var word=document.getElementById("input_box").value;
    if(answer1==word){
        if(questionturn=="player_1"){
            player1_score=player1_score+1;
            document.getElementById("span1").innerHTML=player1_score;
            }
            else{
                player2_score=player2_score+1;
                document.getElementById("span2").innerHTML=player2_score;
            }
    }
    if(questionturn=="player_1"){
        questionturn="player_2";
        document.getElementById("h3_1").innerHTML="Questionturn-"+player1;
    }
    else{
        questionturn="player_1";
        document.getElementById("h3_1").innerHTML="Questionturn-"+player2;
    }
    if(answerturn=="player_1"){
        answerturn="player_2";
        document.getElementById("h3_2").innerHTML="Answerturn-"+player1;
    }
    else{
        answerturn="player_1";
        document.getElementById("h3_2").innerHTML="Answerturn-"+player2;
    }
    document.getElementById("div_1").innerHTML="";
    
}