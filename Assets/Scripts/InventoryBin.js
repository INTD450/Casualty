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

//Keeping track of components.
static var bin : staticInventory;

//Instance of gameobject
private var stuff : GameObject;


function Awake ()
{   
   associatedInventory = FindObjectOfType(Inventory);
   bin = FindObjectOfType(staticInventory);
   
   Debug.Log("Awake");
	for(var i in bin.Items){	
		Debug.Log("Items = "+i);
		
		//Find the object
		stuff = GameObject.Find(i);
		
		
		//Instantiate the object
		//var clone = Instantiate(stuff,this.transform.position,this.transform.rotation);
		var clone = Instantiate(Resources.Load(i, typeof(GameObject))) as GameObject;
		
		
		//Remove the word clone in it
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
}


function OnDestroy () {
	//Adding items
	bin.setItem(gameStuff);
	
	for(var i in bin.getItem()){
		Debug.Log(i+"-");
	}


	Debug.Log("Script was destroyed");
}