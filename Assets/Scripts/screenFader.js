#pragma strict

public var fadeSpeed : float = 190000.5f;            // Speed that the screen fades to and from black.


private var sceneStarting : boolean = true;     // Whether or not the scene is still fading in.
private var currentScene:int;

public var endGame : boolean = false ;         //This will remain false until the player dies
var deathButton : KeyCode = KeyCode.P;  //The button that simulates death.
var deathButton2 : KeyCode = KeyCode.O; //The button that simulates death.

//Death counter script
static var deathCounter : DeathCounter;

//Inventory Display script
static var inventory : InventoryDisplay;


function Awake ()
{
	//Check what scene we are current at
 	currentScene = Application.loadedLevel;

    // Set the texture so that it is the the size of the screen and covers it.
    guiTexture.pixelInset = new Rect(0f, 0f, Screen.width, Screen.height);
    
    deathCounter = FindObjectOfType(DeathCounter); //finding the death counter script
    inventory = FindObjectOfType(InventoryDisplay); //finding the inventory display script
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
     	EndScene(currentScene);
     }
     
     
    //Simulate death for scene 0
	if(Input.GetKeyDown(deathButton)){
	//Adding 1 to the death counter
	deathCounter.Add(1);
		setEndGame();
		currentScene=0;
	}
	//Simulate death for scene 1
	if(Input.GetKeyDown(deathButton2)){
		//Adding 1 to the death counter
		deathCounter.Add(1);
		setEndGame();
		currentScene=1;
	}
}

function setScene(scene: int){
	currentScene = scene;
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


public function EndScene (scene : int)
{
    // Make sure the texture is enabled.
    guiTexture.enabled = true;
    
    // Start fading towards black.
    FadeToBlack();
    
    // If the screen is almost black
    if(guiTexture.color.a >= 0.95f)
        //Reload the level.
        Application.LoadLevel(scene);
}


/*function OnMouseDown () {
//Pick up backpack already
if (inventory.haveBag==1){
		currentScene += 1;
		//FadeToBlack();
		Application.LoadLevel (currentScene);	
		//StartScene();
}
else{
	Debug.Log("Better pick up bag first");
}


}*/