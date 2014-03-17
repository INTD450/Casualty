#pragma strict

//Screen Fader script
static var screen : screenFader;

//Death counter script
static var deathCounter : DeathCounter;

//Inventory script
static var display : InventoryDisplay;

//The display text when click on the door
var displayText:String;

//ClickManager script
private var clickManager:ClickableManager;
			
//Will be use to store player game object
private var clickingObject:GameObject;

function Awake (){
    //Finding the death counter script
	deathCounter = FindObjectOfType(DeathCounter); 
	
	//Finding the screen fader script
    screen = FindObjectOfType(screenFader);
    
    //Finding the inventory display script
    display = FindObjectOfType(InventoryDisplay); 
    
    //Finding the Player gameobject
    clickingObject = GameObject.Find("Player");
    
    //Finding the clickManager script
    clickManager = clickingObject.GetComponent(ClickableManager);
    
}


function Update (){

}

function OnMouseDown () {
	//If have bag
	if (display.haveBag==1){
		//Increase current scene to 1
		screen.setScene(1);
		screen.setEndGame();	
	}
	else{
	Debug.Log("You dont have bag");
		clickManager.ShowDialogBox(displayText);
	}

}