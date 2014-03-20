#pragma strict

var waypoints:GameObject[];

var speed:int = 8;

private var currentWaypoint:int = -1;

function Start () {
	if(waypoints.Length > 0) {
		animation.wrapMode = WrapMode.Loop; 
    	animation.CrossFade("aggressor walking", 0.3);
    	
    	currentWaypoint = 0;
	} else {
	    animation.Stop(); 
	}
}

function Update () {
	if(currentWaypoint > -1) {
		var curWPGO:GameObject = waypoints[currentWaypoint];
		
		transform.position = Vector3.MoveTowards(transform.position, curWPGO.transform.position,  speed*Time.deltaTime);
		transform.LookAt(curWPGO.transform.position);

		if(Vector3.Distance(curWPGO.transform.position, transform.position) <= 5) {				
			if(currentWaypoint >= waypoints.Length - 1)
				currentWaypoint = 0;
			else
				currentWaypoint++; 
		}
	}
}
