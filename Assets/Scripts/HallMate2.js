#pragma strict

class HallMate2 extends OnClickAction {
	//Track the number of clicks on this door
	static var number:int;
		
	private var clickingObject:GameObject;
	private var clickManager:ClickableManager;
	
	function Start() {
		clickingObject = GameObject.Find("Player");
		clickManager = clickingObject.GetComponent(ClickableManager);
		number = 0;
	}
	

	function OnMouseDown () {
		if(number == 0){
			clickManager.ShowDialogBox("Go away! We don’t have anything");
		}
		else if(number == 1){
			clickManager.ShowDialogBox("Come on buddy! We've got nothing! We don't have any food.");
		}
		else if(number == 2){
			clickManager.ShowDialogBox("Seriously? You are going to keep on knocking? We. Do. Not. Have. Any. Supplies. Nothing medical. Nothing. Okay!?");
		}
		else if(number == 3){
			clickManager.ShowDialogBox("........");
		}	
		number++;
	}
}