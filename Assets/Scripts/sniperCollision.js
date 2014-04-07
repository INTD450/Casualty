#pragma strict

//Screen Fader script
static var screen : screenFader;

//Death counter script
static var deathCounter : DeathCounter;

//To get the player's object
static var player : GameObject;

//A death counter to ensure +1 death only
static var counter : int;

// Other dialogue scripts
static var instanceFamilyStartDialogue:FamilyStartDialogue;
static var instancePilotStartDialogue:PilotStartDialogue;
static var instanceHidingPersonStartDialogue:HidingPersonStartDialogue;

function Awake ()
{	
	counter = 0;
	player = GameObject.Find("Player");
	screen = FindObjectOfType(screenFader); //finding the screen fader script
	deathCounter = FindObjectOfType(DeathCounter); //finding the death counter script
	// Find Dialogue bits
	instanceFamilyStartDialogue = FindObjectOfType(FamilyStartDialogue);
	instancePilotStartDialogue = FindObjectOfType(PilotStartDialogue);
	instanceHidingPersonStartDialogue = FindObjectOfType(HidingPersonStartDialogue);
}

function Update ()
{
	var dist = Vector3.Distance(player.transform.position, transform.position);
	
	//Only entere once
	if(counter == 0){
		//When the player is in plain sight of the sniper
		if(dist<18){
			//Play sniper shot sound
			var audioSniper1 = this.gameObject.GetComponent(AudioSource);
			audioSniper1.Play();

			// Reset met toggles
			instanceFamilyStartDialogue.resetToZero();
			instancePilotStartDialogue.resetToZero();
			instanceHidingPersonStartDialogue.resetToZero();
			
			counter++;
			deathCounter.Add(1);
			screen.setEndGame();
		}
	}

}

