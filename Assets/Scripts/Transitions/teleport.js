#pragma strict

//Screen Fader script
static var screen : screenFader;


//ClickManager script
private var clickManager:ClickableManager;
			
//Will be use to store player game object
private var clickingObject:GameObject;

//FireHydrant
private var fireHydrant:GameObject;

//Ladder
private var ladder:GameObject;

function Awake (){

	
	//Finding the screen fader script
    screen = FindObjectOfType(screenFader);
    

    //Finding the Player gameobject
    clickingObject = GameObject.Find("Player");
    
    //Finding the clickManager script
    clickManager = clickingObject.GetComponent(ClickableManager);
    
    //Getting fireHydrant data
    fireHydrant = GameObject.Find("FireHydrant");
    
    ladder = GameObject.Find("Ladder");
    
}


function Update (){

}

function OnMouseDown () {

	//screen.setEndGame();

	var clone = Instantiate(ladder, fireHydrant.transform.position, fireHydrant.transform.rotation);

/*
	clickingObject.transform.position.x = fireHydrant.transform.position.x + 10;
	clickingObject.transform.position.y = fireHydrant.transform.position.y;
	clickingObject.transform.position.z = fireHydrant.transform.position.z+10;
*/	
	

}

