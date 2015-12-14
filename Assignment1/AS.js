function Time()
{
  var date=new Date();
  var hours=date.getHours();
	var minutes=date.getMinutes();
	var seconds=date.getSeconds();
  minutes=addZero(minutes);
  seconds=addZero(seconds);
  document.getElementById('clock').innerHTML=hours+":"+minutes+":"+seconds;clock=setTimeout(function(){Time()},500);

}
function addZero(digit)
{	if (digit<=9)
	  {
      digit="0" + digit;
	  }
    return digit;
}

function Alert1(){

  alert("Random Gaming Fact: Peter Dager is the highest overall earning eSports player in the world with an overall earning of $2,048,992.36")
}
