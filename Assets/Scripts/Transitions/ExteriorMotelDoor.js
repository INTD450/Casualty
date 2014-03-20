#pragma strict

//Screen Fader script
static var screen : screenFader;

//Death counter script
static var deathCounter : DeathCounter;

//ClickManager script
private var clickManager:ClickableManager;
			
//Will be use to store player game object
private var clickingObject:GameObject;

function Awake ()
{
    //Finding the death counter script
	deathCounter = FindObjectOfType(DeathCounter); 
    
    //Finding the screen fader script
    screen = FindObjectOfType(screenFader); 
	
	//Get the player gameObject
    clickingObject = GameObject.Find("Player");
    
    //Finding the clickManager script
	clickManager = clickingObject.GetComponent(ClickableManager);
}


function Update ()
{

}



function OnMouseDown () {
	//If player tries to go back into room, the player dies, death counter +1, reset to current scene
	deathCounter.Add(1);
	screen.setEndGame();
}
