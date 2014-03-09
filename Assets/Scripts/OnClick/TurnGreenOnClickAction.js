#pragma strict

/* 
 * Example class that turns the game object green on click.
 */
class TurnGreenOnClickAction extends OnClickAction {
	function Run() {
		gameObject.renderer.material.color = Color.green;
	}
}