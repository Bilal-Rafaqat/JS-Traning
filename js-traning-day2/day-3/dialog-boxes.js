function dialogBox(){
    let player=prompt("please enter your name","Bilal");
if(player==null||player==""){
    alert('no player found')
}else if(confirm(`${player} please confirm to play `)){
    alert("Match started")
}
}