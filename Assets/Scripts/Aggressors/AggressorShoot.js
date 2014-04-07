#pragma strict

//Screen Fader script
static var screen : screenFader;

//Current Scene
static var scene: int;

//Death counter script
static var deathCounter : DeathCounter;

//Inventory script
static var display : InventoryDisplay;

//Player object
static var play : GameObject;

static var once : int = 0;
var distance : int;

static var timer : float;

function Awake ()
{
	//Check what scene we are current at
 	scene = Application.loadedLevel;
 	
 	//Debug.Log(scene);
    
	deathCounter = FindObjectOfType(DeathCounter); //finding the death counter script
    screen = FindObjectOfType(screenFader); //finding the screen fader script
    display = FindObjectOfType(InventoryDisplay); //finding the screen fader script
    
    
}


function Update ()
{
	//Start timer once you die
	if(once >= 1){
		timer += Time.deltaTime;
		if(timer > 4.0){
			once = 0;
			timer = 0;
		}
	}
	
	
	play = GameObject.Find("Player");
	var dist = Vector3.Distance(play.transform.position, transform.position);
	
	//Debug.Log(dist);
	if(dist < distance){
		//If player is too close to this object
		once++;
		//TO prevent entering this loop more than once (Die only once when wander too close to this object)
		if(once==1){
			deathCounter.Add(1);
			screen.setEndGame();		
		}
	}

}