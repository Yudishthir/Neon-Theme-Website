// code for the welcome type writing animation
// pass object id and message to be displayed
// append each character to the inner html of the DOM object

function typeWriter(callName,message) {
	var obj = document.getElementById(callName);
	var txt = message;
	var i = 0;

	obj.innerHTML = "";
  
  	typeLoop();

	function typeLoop() {

  		if (i < txt.length) 
  		{
   			obj.innerHTML += txt.charAt(i);
   			i++;
    		setTimeout(typeLoop, 100);
  		}
  		else
  		{
  			return;	
  		}
  	}
}

