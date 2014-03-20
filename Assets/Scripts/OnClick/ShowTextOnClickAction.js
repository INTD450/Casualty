#pragma strict

/*
 * Works with a ClickableManager to show text in a text BoxCollider.
 */
class ShowTextOnClickAction extends OnClickAction {
	var displayText:String;
	
	private var clickingObject:GameObject;
	private var clickManager:ClickableManager;
	
	function Start() {
		clickingObject = GameObject.Find("Player");
		clickManager = clickingObject.GetComponent(ClickableManager);
	}
	
	function Run() {
		clickManager.ShowDialogBox(displayText);
	}
}