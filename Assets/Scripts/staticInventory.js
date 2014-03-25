#pragma strict

// The static inventory
static var Items = new ArrayList();

//Keep track of current death counter
static var deathCounter : int;



function awake(){
	//Never destroy this object
	DontDestroyOnLoad(this.gameObject);



	
	
}

function update(){

}

function addItem(name){
	Items.Add(name);
}

function deleteItem(name:String){
	for(var i in Items){
		if(name == Items[i]){
			Items.RemoveAt(i);
		}
	}	
}

function getItem(){
	return Items;
}

function setItem(list:ArrayList){
//Clear the list first for a fresh batch
Items.Clear();

//Manually adding each item into Items arraylist to avoid copying address of list
	for(var i in list){
		Items.Add(i);
	}
}




function setDeathCounter(death:int){
	deathCounter = death;
}

function getDeathCounter(){
	return deathCounter;
}