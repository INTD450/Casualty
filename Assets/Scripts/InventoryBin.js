#pragma strict

//Keeping track of inventory throughout scenes
//static var screen : screenFader;

static var UpdatedList: Transform[];

static var stats = null;

//Keeping track of components.
static var associatedInventory : Inventory;

//Keep track of scene
static var scene ;

static var num = 0;

static var gameStuff = new ArrayList();

//Keeping track of components statically
static var bin : staticInventory;

//Keeping tracks of dynamic components
static var dynamic : dynamicInventory;

//Instance of gameobject
private var stuff : GameObject;

//Death Counter script
static var deathCounterScript : DeathCounter;


function Awake ()
{   

	//Finding the Inventory script
   associatedInventory = FindObjectOfType(Inventory);
   
   //Finding the staticInventory script
   bin = FindObjectOfType(staticInventory);
   
   //Finding the dynamicInventory script
   dynamic = FindObjectOfType(dynamicInventory);
   
   	//finding the death counter script	
	deathCounterScript = FindObjectOfType(DeathCounter); 
   
   //Re-initialized the death counter in static inventory 
   bin.setDeathCounter(deathCounterScript.Count());
   
   Debug.Log("Awake");
	for(var i in bin.Items){	
		Debug.Log("Items = "+i);
		
		//Find the object
		stuff = GameObject.Find(i);
		
		
		//Instantiate the object
		//var clone = Instantiate(stuff,this.transform.position,this.transform.rotation);
		var clone = Instantiate(Resources.Load(i, typeof(GameObject))) as GameObject;
		
		
		//Remove the word clone from it
		clone.name = i;
		
		//Add into inventory
		associatedInventory.AddItem(clone.transform);
	}
}


function Update (){
	UpdatedList = associatedInventory.Contents;
	//Reset the arraylist each update, otherwise the array will contain multiple copies
	gameStuff.Clear();
	for(var i:Transform in UpdatedList){
		gameStuff.Add(i.name);
		Debug.Log(i+"-"+i.name);
	}
	
		//For debugging purposes
		for(var i in bin.getItem()){
			Debug.Log("BIN )-"+i+"-");
		}
		
	//Constantly update dynamic inventory
	Debug.Log("Updating dynamic");
	dynamic.setItem(gameStuff);
	
}


function OnDestroy () {
	//If you didnt die, you inventory system will be updated, else you just restart the level with the same inventory
	if(deathCounterScript.Count() == bin.getDeathCounter()){
		//Adding items
		bin.setItem(gameStuff);
	}
	Debug.Log("Script was destroyed");
}