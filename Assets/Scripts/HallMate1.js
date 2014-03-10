#pragma strict

//Track the number of clicks on this door
var number:int;

function Awake ()
{	
number = 0;

}


function Update ()
{

}



function OnMouseDown () {
	
	
	if(number == 0){
	Debug.Log("Shhhhh!!!!! Someone's outside!");
	}
	else if(number == 1){
	Debug.Log("'Hear movement, people rustling, probably trying to keep quiet while hiding'");
	}
	else if(number == 2){
	Debug.Log(".....are they gone? Should we call the staff?");
	}
	else if(number == 3){
	Debug.Log("........");
	}	
number++;
}