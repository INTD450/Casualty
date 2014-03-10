#pragma strict


var distance:float = 20;

private var clickingObject:GameObject;
private var clickManager:ClickableManager;
private var withinDistance:boolean;

private var mouseOver:boolean;

function Start() {
	clickingObject = GameObject.Find("Player");
	clickManager = clickingObject.GetComponent(ClickableManager);
}

function Update() {
	// This is in Update because otherwise we only check the distance when the mouse first
	// enters, even if we keep moving after. We keep track of mouseOver for efficiency, too,
	// so we're not constantly calculating the distance.
	if(this.mouseOver) {
		var distance:float = Vector3.Distance(clickingObject.transform.position, transform.position);
		
		this.withinDistance = distance <= this.distance;
		
		if(this.withinDistance) {
			Cursor.SetCursor(clickManager.hoverTexture, Vector2.zero, CursorMode.Auto);
		} else
			Cursor.SetCursor(clickManager.outOfRangeTexture, Vector2.zero, CursorMode.Auto);
	}
}

function OnMouseEnter() {
	this.mouseOver = true;
}

/*
 * Runs all OnClickAction components attached to the Game Object if we're within
 * distance and have the left mouse button down.
 */
function OnMouseDown() {
	if(this.withinDistance && Input.GetMouseButtonDown(0)) {	
		for (var component:OnClickAction in gameObject.GetComponents.<OnClickAction>()) {
			component.Run();
		}
	}
}


function OnMouseExit() {
	this.mouseOver = false;
	Cursor.SetCursor(null, Vector2.zero, CursorMode.Auto);
}