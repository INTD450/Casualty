#pragma strict

/*
 * This class manages the display text that gets shown.
 * Use with a ShowTextOnClickAction on the component that
 * gets clicked on.
 *
 * Only one click manager is needed for every clicking
 * object.
 */

private var displayText:String; 
private var displayTimer:int;

var displayLength = 500;

function Start() {
	this.displayText = "";
	this.displayTimer = 0;
}


function ShowDialogBox(displayText:String) {
	this.displayText = displayText;
	this.displayTimer = displayLength;
} 

function OnGUI() {
	// Show the dialog gui
	if(this.displayText && this.displayTimer > 0) {
		var width:int = this.displayText.Length * 9;
		
		var screenWidth:int = Screen.width;
		var screenHeight:int = Screen.height;
		
		var topY:int = screenHeight / 2 + screenHeight/3;		
		var topX:int = screenWidth / 2 - width / 2;
		
		GUI.Box(Rect(topX, topY, width, 25), this.displayText);
	
		// Subtract from the timer.
		this.displayTimer--;
	}	
}

