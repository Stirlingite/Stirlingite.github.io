//var anAlert = alert("This content is rad!");
//console.log(anAlert);

//var taco = confirm("Tacos?");
//console.log(taco);

//var colour = prompt("What is your favorite colour?");
//console.log(colour);


function theDate(){

	var todayDate = new Date();

	var month = todayDate.getMonth();

	var year = todayDate.getFullYear();

	var day = todayDate.getDate();

	document.getElementById("para").innerHTML=month + "/" + day + "/" + year;
	//document.getElementById("para").innerHTML=month + day + year;

}

function theName(){

	var aName = document.getElementById("someText").value;
	console.log(aName);

}
