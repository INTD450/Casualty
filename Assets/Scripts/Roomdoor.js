#pragma strict

//Screen Fader script
static var screen : screenFader;

//Current Scene
static var scene: int;

//Death counter script
static var deathCounter : DeathCounter;

//Inventory script
static var display : InventoryDisplay;

//The display text when click on the door
var displayText:String;
	
private var clickingObject:GameObject;
private var clickManager:ClickableManager;

function Awake ()
{
	//Check what scene we are current at
 	scene = Application.loadedLevel;
 	
 	Debug.Log(scene);
    
	deathCounter = FindObjectOfType(DeathCounter); //finding the death counter script
    screen = FindObjectOfType(screenFader); //finding the screen fader script
    display = FindObjectOfType(InventoryDisplay); //finding the screen fader script
    
    clickingObject = GameObject.Find("Player");
	clickManager = clickingObject.GetComponent(ClickableManager);
}


function Update ()
{

}



function OnMouseDown () {
//At scene 0
if(scene == 0){
	//If have bag
	if (display.haveBag==1){
		//Increase current scene to 1
		screen.setScene(1);
		screen.setEndGame();	
	}
	else{
		Debug.Log("Hmmm, maybe others on this floor have some supplies. I’ll need my backpack to carry them.");
		clickManager.ShowDialogBox(displayText);
	}
}
//At scene 1
if(scene == 1){
	display.haveBag = 1;
	//If player tries to go back into room, the player dies, death counter +1, reset to current scene
	deathCounter.Add(1);
	screen.setEndGame();
}





}