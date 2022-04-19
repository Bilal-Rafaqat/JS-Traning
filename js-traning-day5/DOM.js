function dom() {
    var ret = document.title;
    alert("Document Title : " + ret );
 
    var ret = document.URL;
    alert("Document URL : " + ret );
 
    var ret = document.forms[0];
    alert("Document First Form : " + ret );
 
    var ret = document.forms[0].elements[1];
    alert("Second element : " + ret );
 }