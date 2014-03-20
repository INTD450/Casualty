#pragma strict

private static var DeathCount:int = 5325;

static function Add(deaths:int) {
	DeathCount += deaths;
}

static function Count():int {
	return DeathCount;
}

/**
 * Shows the GUI for the death counter. Edit it here.
 */
function OnGUI() {	
	GUI.Box (Rect (0, 0, 105, 22), "");
	GUI.Label (Rect (3, 0, 750, 40), "Casualties: " + DeathCount);
}
