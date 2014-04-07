#pragma strict

private static var DeathCount:int = 5325;
private static var displayCounterTop:boolean; // Standard Counter
private var displayTimer:int;

private static var audioGun1 : AudioSource;

function Start() {
	this.displayCounterTop = true;
	this.displayTimer = 0;
	
			
	//Start playing the gunshot sound
	audioGun1 = this.gameObject.GetComponent(AudioSource);
}


static function Add(deaths:int) {
	displayCounterTop = false;
	DeathCount += deaths;
	audioGun1.Play();
}

static function Count():int {
	return DeathCount;
}

/**
 * Shows the GUI for the death counter. Edit it here.
 */
function OnGUI() {
	var style = new GUIStyle("largerFont");
	style.fontSize = 32;
	style.normal.textColor = Color.white;

	if(displayCounterTop)
	{
		GUI.Box (Rect (3, 3, 105, 22), "");
		GUI.Label (Rect (7, 3, 750, 40), "Casualties: " + DeathCount);
	}
	else
	{
		GUI.Label (Rect ((Screen.width/2 - 120), (Screen.height/2 - 13), 750, 40), "Casualties: " + DeathCount, style);
		displayTimer++;
	}

	if( displayTimer >= 300) {
		displayCounterTop = true;
	}
}
