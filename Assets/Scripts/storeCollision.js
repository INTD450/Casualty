#pragma strict

static var once : int = 0;
static var second : int =0;

static var timer : float;

static var player : GameObject;


function Awake ()
{	
	player = GameObject.Find("Player");
	
	timer = 0;
}





function Update ()
{
	var dist = Vector3.Distance(player.transform.position, transform.position);
	
	//Once the player enters the store
	if(dist < 7){
		if(once == 0){
			Time.timeScale = 0.1;
			timer += 1;
			
			//After 5 seconds (give or take)
			if(timer >= 200){
				once++;
				Time.timeScale = 1;
			}
		}	
		//When trying to exit the store after entering it
		if(second >= 1){
			Debug.Log("you die");
		}
	}
	
	//Once you enter and you walk around the store
	if (once == 1 && dist > 7){
		Debug.Log("you exit the 5");
		second++;
	}	
}
