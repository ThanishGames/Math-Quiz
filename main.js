function Adduser(){
    var drums=document.getElementById("input1").value;
    var wand=document.getElementById("input2").value;
    localStorage.setItem("player1",drums);
    localStorage.setItem("player2",wand);
    window.location="game_page.html";
    
}