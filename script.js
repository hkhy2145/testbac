document.getElementById("math").value = 20 ;
document.getElementById("bn").addEventListener("click", function() {
	document.getElementById("math").value=6 
	document.getElementById("phys").value=9.5 
	document.getElementById("svt").value=13 
	document.getElementById("en").value=6.75 
	document.getElementById("fr").value=0.25 
	document.getElementById("ar").value=4.75 
	document.getElementById("phil").value=4 
	document.getElementById("info").value=14.25 
	document.getElementById("sport").value=18.5 
	document.getElementById("art").value=13.5
	document.getElementById("rs").value=9.444444444444445
	});
document.getElementById("b1").addEventListener("click", function() { document.getElementById("math").value=6 });
document.getElementById("b2").addEventListener("click", function() { document.getElementById("phys").value=9.5 });
document.getElementById("b3").addEventListener("click", function() { document.getElementById("svt").value=13 });
document.getElementById("b4").addEventListener("click", function() { document.getElementById("en").value=6.75 });
document.getElementById("b5").addEventListener("click", function() { document.getElementById("fr").value=0.25 });
document.getElementById("b6").addEventListener("click", function() { document.getElementById("ar").value=4.75 });
document.getElementById("b7").addEventListener("click", function() { document.getElementById("phil").value=4 });
document.getElementById("b8").addEventListener("click", function() { document.getElementById("info").value=14.25 });
document.getElementById("b9").addEventListener("click", function() { document.getElementById("sport").value=18.5 });
document.getElementById("b10").addEventListener("click", function() { document.getElementById("art").value=13.5 });
function updateCounter() {
	
	var math=document.getElementById("math").value;
	var phys=document.getElementById("phys").value;
	var svt=document.getElementById("svt").value;
	var en=document.getElementById("en").value;
	var fr=document.getElementById("fr").value;
	var ar=document.getElementById("ar").value;
	var phil=document.getElementById("phil").value;
	var info=document.getElementById("info").value;
	var sport=document.getElementById("sport").value;
	var art=document.getElementById("art").value; 
	
	document.getElementById("rs").value = ((math*3)+(phys*4)+(svt*4)+(+en)+(+fr)+(+ar)+(+phil)+(+info)+(+sport)+(+art))
	document.getElementById("rs").value =(+document.getElementById("rs").value)/18
};
updateCounter();
setInterval(updateCounter, 500);