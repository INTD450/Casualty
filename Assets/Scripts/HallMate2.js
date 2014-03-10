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
	Debug.Log("Go away! We don’t have anything");
	}
	else if(number == 1){
	Debug.Log("Come on buddy! We've got nothing! We don't have any food.");
	}
	else if(number == 2){
	Debug.Log("Seriously? You are going to keep on knocking? We. Do. Not. Have. Any. Supplies. Nothing medical. Nothing. Okay!?");
	}
	else if(number == 3){
	Debug.Log("........");
	}	
number++;
}