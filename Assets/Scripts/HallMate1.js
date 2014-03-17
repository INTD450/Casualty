#pragma strict

class HallMate1 extends OnClickAction {
	//Track the number of clicks on this door
	static var number:int;
	
	var displayText:String;
	
	private var clickingObject:GameObject;
	private var clickManager:ClickableManager;
	
	function Start() {
		clickingObject = GameObject.Find("Player");
		clickManager = clickingObject.GetComponent(ClickableManager);
		number = 0;
	}
	

	function OnMouseDown () {
		if(number == 0){
			clickManager.ShowDialogBox("Shhhhh!!!!! Someone's outside!");
		}
		else if(number == 1){
			clickManager.ShowDialogBox("'Hear movement, people rustling, probably trying to keep quiet while hiding'");
		}
		else if(number == 2){
			clickManager.ShowDialogBox(".....are they gone? Should we call the staff?");
		}
		else if(number == 3){
			clickManager.ShowDialogBox("........");
		}	
		number++;
	}
}