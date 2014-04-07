#pragma strict

// THIS SCRIPT IS HORRIBLY CODED :(

var waypoints:GameObject[];

static var once : int = 0;
static var timer : float;

static var player : GameObject;
var escapee : GameObject;
var door : GameObject;

private var currentWaypoint:int = -1;

function Awake ()
{
	player = GameObject.Find("Player");
	escapee = GameObject.Find("Escapee");

	timer = 0;
	once = 0;
}

function Update ()
{
	var dist = Vector3.Distance(player.transform.position, transform.position);
	//Once the player enters the store
	if((dist < 7) && (once == 0)){
			once = 1;
		}
	else if(once == 1){
		// Code for the person running out the door
		if(currentWaypoint == -1) {
			escapee.animation.wrapMode = WrapMode.Loop;
		escapee.animation.CrossFade("running", 0.3);
		escapee.animation["running"].speed = 10;    	
		currentWaypoint = 0;
		} else if (currentWaypoint == 0 || currentWaypoint == 1){
			var curWPGO:GameObject = waypoints[currentWaypoint];
				escapee.transform.position = Vector3.MoveTowards(escapee.transform.position, curWPGO.transform.position,  100*Time.deltaTime);
				escapee.transform.LookAt(curWPGO.transform.position);
				if(Vector3.Distance(curWPGO.transform.position, escapee.transform.position) <= (currentWaypoint*3 + 3)) {
					currentWaypoint++;
				}
		} else if (currentWaypoint == 2){
				//Play the shutting door sound
				var audioShut = Instantiate(Resources.Load("Door Shut", typeof(GameObject))) as GameObject;
				var audioShut1 = audioShut.GetComponent(AudioSource);
				audioShut1.Play();
				audioShut.name = "Door Shut";
				Destroy(audioShut,3.0);
		
				door.animation.wrapMode = WrapMode.Once;
				door.animation.Play("close");
				door.animation["close"].speed = 10;
				currentWaypoint++;
		}
		Time.timeScale = 0.1;
		timer += 1;

		//After a few seconds
		if(timer >= 345){
			Time.timeScale = 1;
			once = 2;
		}
	}
}
