#pragma strict

private var viewArea:Rect;
private var offset:float;
private var speed:float = 30.0f;
private var showingText:boolean;

var style : GUIStyle;


function Start() {
	var width = 400;
	var height = 300;

	this.viewArea = new Rect(Screen.width/2 - (width/2), Screen.height/2 - (height/2), width, height);
	this.offset = this.viewArea.height;
}

function ShowText() {
	// Call this to show the text! You might be able to just attach this entire script to whatever
	// is supposed to call it without having to change anything but the text.
	//this.offset = this.viewArea.height*4;
	
}

function Update()
{	

		this.offset -= Time.deltaTime * this.speed;
		
		//After a certain amount of time
		if(this.offset <= -460){
			Debug.Log("you're done");
			Application.LoadLevel(2);
		}
}

function OnGUI(){
	
		var position = new Rect(this.viewArea.x, this.viewArea.y + this.offset, this.viewArea.width, this.viewArea.height);
		// TODO This is where you might want to change the background to black.
		
		// TODO Edit the text here. Note that you can use some markup stuff to make it look nice.
		var text = "<color=white><b><size=24>Casualty</size></b>\n"+
					"\n"+
			    	"Some is terribly wrong.\n"+
					"About a week ago the motel staff strong advised you and the other guests not to leave the\n"+
					"motel grounds due to a major disturbance in the city. As a traveller who is unfamiliar with\n"+
					"the current surroundings, you took their warning seriously.\n"+
					"It's a wise decision as the situation outside deteriotes quickly.\n"+
					"Then, you begin to notice small changes in your unfamiliar surroundings.\n"+
					"Your phone is no longer able to find a signal, the power in the motel is wavering, and\n"+
					"you hear that the situation is far more dire than you first believed.\n"+
					"You need to find a way out of the city.\n"+
					"</color>";

		// This draws the label in the right position.
		GUI.Label(position, text, this.style);
	
}
    
    
    
