


 document.getElementById("btn").addEventListener("click", function(Event) {
	
 document.getElementById("father").style.display = "block";

});





 
	
var colorChile = ['#00ff55','#8899ff','#5500ff','#00ff00','#00ff77'];

	document.getElementById("add").addEventListener("click", function(){
	var	c =document.getElementById("addordelet").value;
 console.log(colorChile.push(String(c)));
	console.log(colorChile);
		
		
	}); 
	
	var father=document.getElementById("father");
	
	document.getElementById("delete").addEventListener("click", function(){
		
		function finde(){
		var d;
		return d= document.getElementById("addordelet").value;
	}
	

	
	for(var i =0;i<colorChile.length;i++){
	console.log(colorChile.find(finde));	
		
	}

	console.log(colorChile.indexOf(d));
		var x = colorChile.indexOf(d);
		colorChile.splice(x,1);
		console.log(colorChile);
		
	});
     
    var father=document.getElementById("father");
    
	 document.getElementById("appch").addEventListener("click",function(){
	 var i=0;
	for(i=0;i<colorChile.length;i++){
		 
		var colorMenu=document.createElement("Div");
	    colorMenu.style.height="20px";
		colorMenu.style.background=colorChile[i];
		father.appendChild(colorMenu);
		
	
	//var node = document.getElementById("father");
	//var nunode=node.childNodes[i];
	//console.log(nunode.style.background);
			
		
	} 
		 
	 });

document.getElementById("removChild").addEventListener("click", function (){
	console.log("father",father);
for(var i =0;i<colorChile.length;i++){
	father.removeChild(father.childNodes[i]);
	
}
	
	console.log(father.removeChild(father.childNodes[i]));
});
	
	


document.getElementById("father").addEventListener("click", function(){
	
			console.log(event.target.style.background);
	var col = event.target.style.background;
            document.getElementById("d").style.background=col;
	
	document.getElementById("father").style.display="none";
	

});

/*-----------------------*/
document.getElementById("size").addEventListener("click", function(){
	
		document.getElementById("slectSize").style.display="block";

})


document.getElementById("slectSize").addEventListener("click", function(){
	
	var r = event.target.innerHTML;
	document.getElementById("h1").innerHTML="yor size :"+" "+r;
	document.getElementById("slectSize").style.display="none";
	console.log(r);
	
});

  document.getElementById("removeSize").addEventListener("click", function(rem){
	  
 	  rem=document.getElementById("txtSize").value;
	  document.getElementById(rem).style.display="none";
	  
  });

document.getElementById("addSize").addEventListener("click", function(ad){
	  
	  ad=document.getElementById("txtSize").value;
	  document.getElementById(ad).style.display="block";
	  
  });
window.agrre.addEventListener("click", function(){

var txte = window.txtem.value;
var patt ;
patt=/^\w+\@(gmail)|(yahoo)|(html)\.(com)$/;
var d = patt.test(txte);

if(d){
	
	console.log("that is true");
	document.getElementById("email").innerHTML="your email :"+" "+txte;
}else{
	console.log("that is flalse");
	alert("the email is not ture");
}
   var txtad = window.txtaddr.value;
	var patt1;
	patt1=/^\w+\.|\/\w+$/  ;
	var rt = patt1.test(txtad);
	
	if(rt){
	console.log("that is true");	
		document.getElementById("addres").innerHTML="your addreas :"+" "+ txtad;
	}else{
	console.log("that is flalse");
		alert("the addres is not ture");
	}
	
});
