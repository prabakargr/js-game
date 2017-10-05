var a ;
var b;
function changeFunction(){
	a=Math.round(Math.random()*10000);
	document.getElementById('qusnumb').value=a;
}

function insertNumber(id) {
   b=document.getElementById(id).value;
   document.getElementById('inpvalue').value +=b;
   
}
function checkFunction() { 
	var c=parseInt(document.getElementById('qusnumb').value);
	var d=parseInt(document.getElementById('inpvalue').value);
	document.getElementById('inpvalue').value="";
	if(c==d){
		alert("Success!!Click Next");
	}else{
		alert("Failed?Try Again");
	}
     reset();
}