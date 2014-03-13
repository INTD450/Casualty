#pragma strict

//Screen Fader script
static var screen : screenFader;

//Current Scene
static var scene: int;

//Death counter script
static var deathCounter : DeathCounter;

//Inventory script
static var display : InventoryDisplay;

//BackDoorExit
var backDoor : GameObject;

var once : int = 0;

function Awake ()
{
	//Check what scene we are current at
 	scene = Application.loadedLevel;
 	
 	Debug.Log(scene);
    
	deathCounter = FindObjectOfType(DeathCounter); //finding the death counter script
    screen = FindObjectOfType(screenFader); //finding the screen fader script
    display = FindObjectOfType(InventoryDisplay); //finding the screen fader script
    
    
}


function Update ()
{
	//Check distance to backdoorexit periodically
	backDoor = GameObject.Find("backdoorexit");
	
	var dist = Vector3.Distance(backDoor.transform.position, transform.position);
	Debug.Log(dist);
	if(dist > 200){
		//If player wanders too far form the convenience store, he dies.
		once++;
		//TO prevent entering this loop more than once (Die only once when wander too far)
		if(once==1){
			deathCounter.Add(1);
			screen.setEndGame();		
		}

	}
}
