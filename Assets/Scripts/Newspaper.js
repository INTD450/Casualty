#pragma strict

private static var NewspaperCount:int = 0;

static function Add(newspaper:int) {
	NewspaperCount += newspaper;
}

static function Count():int {
	return NewspaperCount;
}

/**
 * Shows the GUI for the death counter. Edit it here.
 */
function OnGUI() {	
	GUI.Box (Rect (Screen.width - 100, 3, 105, 22), "");
	GUI.Label (Rect (Screen.width - 100, 3, 750, 40), " Newspaper: " + NewspaperCount+"/5");
	Debug.Log("screen width"+Screen.width);
}

