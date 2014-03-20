#pragma strict

static var Items = new ArrayList();

function awake(){
	//Never destroy this object
	DontDestroyOnLoad(this.gameObject);

}

function update(){
	
}

function addItem(name){
	Items.Add(name);
}

function deleteItem(name){
	for(var i in Items){
		if(name == Items[i]){
			Items.RemoveAt(i);
		}
	}	
}

function getItem(){
	return Items;
}

function setItem(list){
	Items = list;
}