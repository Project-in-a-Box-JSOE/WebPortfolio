function select(x){
	var array = document.getElementsByClassName("navbarel"); 

	
	for(i=0; i<array.length; i++){
		array[i].style.backgroundColor='#a1874e';
		if(x.innerHTML == array[i].innerHTML){
			array[i].style.backgroundColor= 'maroon';
		}
	}
 }