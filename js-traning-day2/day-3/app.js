function changeColor(element,color){  //onclick event code
    document.getElementById("h3").style.color=color;
}
function changeColor2(element,color){  //onmouseover & onmouseout events
    element.style.color=color;
}
function submitForm(){  //onsubmit event
    alert('Form Submitted');
}
function autoRefresh(time){  //Auto Refresh Page
    setTimeout("location.reload(true)",time)
}