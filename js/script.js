// code for the welcome type writing animation
// pass object id and message to be displayed
// append each character to the inner html of the DOM object

window.addEventListener("load" , () => {
	var obj = document.getElementById('typeWrite');
	var txt = "Welcome";
	var i = 0;
  
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
);
