#pragma strict

//Screen Fader script
static var screen : screenFader;
	
private var clickingObject:GameObject;
private var clickManager:ClickableManager;

function Awake ()
{
    
	
    screen = FindObjectOfType(screenFader); //finding the screen fader script
    
    
    clickingObject = GameObject.Find("Player");
	clickManager = clickingObject.GetComponent(ClickableManager);
}


function Update ()
{

}



function OnMouseDown () {

		screen.setScene(3);
		screen.setEndGame();	





}
