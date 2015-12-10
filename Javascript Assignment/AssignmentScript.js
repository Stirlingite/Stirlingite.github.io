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

function Values(resolve){
if(resolve =="One"){resolve=1;}
else if(resolve =="Two"){resolve=2;}
else if(resolve =="Three"){resolve=3;}
else if(resolve =="Four"){resolve=4;}
else if(resolve =="Five"){resolve=5;}
else {
  resolve="Please enter valid content     "
}

return resolve;
};


function add()
{
  a = document.getElementById("Numline").value;
    b = document.getElementById("Numline2").value;
    a =  Values(a);
    b =  Values(b);
    answer = a+b;
    alert("The answer to "+answer);
}


function mult()
{
  a = document.getElementById("Numline").value;
    b = document.getElementById("Numline2").value;
    a =  Values(a);
    b =  Values(b);
    answer = a*b;
    alert("The answer to "+answer);
};
function subt()
{
  a = document.getElementById("Numline").value;
    b = document.getElementById("Numline2").value;
    a =  Values(a);
    b =  Values(b);
    answer = a-b;
    alert("The answer to "+answer);

};
function div()
{
  a = document.getElementById("Numline").value;
    b = document.getElementById("Numline2").value;
    a =  Values(a);
    b =  Values(b);
    answer = a/b;
    alert("The answer to "+answer);
};

function clearText(a)
{if(a.defaultValue==a.value){a.value=""}else{if(a.value==""){a.value=a.defaultValue}
}
};
