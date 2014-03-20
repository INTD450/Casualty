#pragma strict

//Screen Fader script
static var screen : screenFader;

//Death counter script
static var deathCounter : DeathCounter;

//To get the player's object
static var player : GameObject;

//A death counter to ensure +1 death only
static var counter : int;

function Awake ()
{	
	counter = 0;
	player = GameObject.Find("Player");
	screen = FindObjectOfType(screenFader); //finding the screen fader script
	deathCounter = FindObjectOfType(DeathCounter); //finding the death counter script
}





function Update ()
{
	var dist = Vector3.Distance(player.transform.position, transform.position);
	
	//Only entere once
	if(counter == 0){
		//When the player is in plain sight of the sniper
		if(dist<10){
			counter++;
			deathCounter.Add(1);
			screen.setEndGame();
		}
	}

}

