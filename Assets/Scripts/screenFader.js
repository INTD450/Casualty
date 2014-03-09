#pragma strict

public var fadeSpeed : float = 190000.5f;            // Speed that the screen fades to and from black.


private var sceneStarting : boolean = true;     // Whether or not the scene is still fading in.

public var endGame : boolean = false ;         //This will remain false until the player dies
var deathButton : KeyCode = KeyCode.P; //The button that simulates death.

function Awake ()
{
    // Set the texture so that it is the the size of the screen and covers it.
    guiTexture.pixelInset = new Rect(0f, 0f, Screen.width, Screen.height);
}


function Update ()
{
    // If the scene is starting
    if(sceneStarting){
        //Call the StartScene function.
        StartScene();
     }
     if(endGame){
     	//Call the endScene function
     	EndScene();
     }
     
     
     	//Simulate death
	if(Input.GetKeyDown(deathButton)){
		setEndGame();
		//var target: screenFader = screen.GetComponent(screenFader);
		//target.setEndGame();
		//gameObject.SendMessage("you presssed P", false, SendMessageOptions.DontRequireReceiver);
	}
}

function setEndGame(){
	endGame = true;
}

function FadeToClear ()
{
    // Lerp the colour of the texture between itself and transparent.
    guiTexture.color = Color.Lerp(guiTexture.color, Color.clear, fadeSpeed * Time.deltaTime);
}


function FadeToBlack ()
{
    // Lerp the colour of the texture between itself and black.
    guiTexture.color = Color.Lerp(guiTexture.color, Color.black, fadeSpeed * Time.deltaTime);
}


function StartScene ()
{
    // Fade the texture to clear.
    FadeToClear();
    
    // If the texture is almost clear
    if(guiTexture.color.a <= 0.05f)
    {
        //Set the colour to clear and disable the GUITexture to allow game speed to remain constant
        guiTexture.color = Color.clear;
        guiTexture.enabled = false;
        
        // The scene is no longer starting.
        sceneStarting = false;
    }
}


public function EndScene ()
{
    // Make sure the texture is enabled.
    guiTexture.enabled = true;
    
    // Start fading towards black.
    FadeToBlack();
    
    // If the screen is almost black
    if(guiTexture.color.a >= 0.95f)
        //Reload the level.
        Application.LoadLevel(0);
}