#pragma strict

//Calling newsPaper script
static var news : Newspaper;
var onceNews1 : int =0;
var onceNews2 : int =0;
var onceNews3 : int =0;
var onceNews4 : int =0;
var onceNews5 : int =0;

function Start () {
	news = FindObjectOfType(Newspaper); 
}

function Update () {

}

//When you click an item
function OnMouseDown()
{
	//If you pick the first newspaper (Can only pick up once)
	if((onceNews1==0)&&(this.gameObject.name == "newspaper1")){
		news.Add(1);
		onceNews1=1;
	}
	
	//If you pick the first newspaper (Can only pick up once)
	if((onceNews2==0)&&(this.gameObject.name == "newspaper2")){
		news.Add(1);
		onceNews2=1;
	}
	
	//If you pick the first newspaper (Can only pick up once)
	if((onceNews3==0)&&(this.gameObject.name == "newspaper3")){
		news.Add(1);
		onceNews3=1;
	}
	
	//If you pick the first newspaper (Can only pick up once)
	if((onceNews4==0)&&(this.gameObject.name == "newspaper4")){
		news.Add(1);
		onceNews4=1;
	}
	
	//If you pick the first newspaper (Can only pick up once)
	if((onceNews5==0)&&(this.gameObject.name == "newspaper5")){
		news.Add(1);
		onceNews5=1;
	}
}