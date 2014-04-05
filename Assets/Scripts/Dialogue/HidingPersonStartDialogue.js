#pragma strict

/*
 * Replaces StartDialogueAction.js
 * Starts the dialogue on click. ID Must be the conversation ID.
 */
class HidingPersonStartDialogue extends OnClickAction {
	// Met people toggles
	static var metHiding:int = 0;
	
	function Run() {
		// Check function for if player has met hiding person
		if (metHiding == 0) {
			DialogueSystem.StartDialogue("HidingPersonFirstEncounter");
			metHiding = 1;
		}
		else {
			DialogueSystem.StartDialogue("HidingPersonSecondEncounter");
		}
	}
}