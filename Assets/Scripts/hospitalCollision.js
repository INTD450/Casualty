#pragma strict

static var once : int = 0;
static var timer : float;

static var player : GameObject;
//static var collision : GameObject;

//Screen Fader script
static var screen : screenFader;

//Death counter script
static var deathCounter : DeathCounter;

function Awake ()
{
	player = GameObject.Find("Player");
	//collision = GameObject.Find("HospitalCollision");

	timer = 0;
	once = 0;
	
	deathCounter = FindObjectOfType(DeathCounter); //finding the death counter script
	screen = FindObjectOfType(screenFader); //finding the screen fader script
}

function Update ()
{
	var dist = Vector3.Distance(player.transform.position, transform.position);
	
	//Once the player enters the store
	if((dist < 10) && (once == 0)){
		once = 1;

		//Destroy the casualty theme song
		var casualtySong = GameObject.Find("CasualtyTheme");
		Destroy(casualtySong);
				
		deathCounter.Add(1);
		
		//Play siren sound
		var audioSiren1 = this.gameObject.GetComponent(AudioSource);
		audioSiren1.Play();
		

		
		
		//Screen fade to black
		screen.setScene(5);
		screen.setEndGame();
		
	}

}