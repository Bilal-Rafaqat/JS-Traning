function validation(){
    const message = document.getElementById("p01");
    message.innerHTML="";
    let x =document.getElementById("demo").value;
    try{
        if(x=="") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x<10) throw "too low";
        if(x>50) throw "too high";
        if(x>=10&&x<50) document.write("input is valid");
    }
    catch(err){
        message.innerHTML = "input is" + err;
    }
    finally{
        document.getElementById("demo").value = "";
    }
}

window.onerror = function () {
    alert("An error occurred.");
 }
