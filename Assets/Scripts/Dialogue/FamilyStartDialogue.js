#pragma strict

/*
 * Replaces StartDialogueAction.js
 * Starts the dialogue on click. ID Must be the conversation ID.
 */
class FamilyStartDialogue extends OnClickAction {
	// Met people toggles
	static var metFamily:int = 0;
	
	function Run() {
		// Enable branches depending on Inventory
		/*
		if () {
			// have gameboy or yo-yo
			DialogueSystem.SetEnabled(FamilyBranch1C, true);
		}
		if () {
			// have doritos1, doritos2, lays
			DialogueSystem.SetEnabled(FamilyBranch1B, true);
		}
		*/
		// Check function for if player has met family
		if (metFamily == 0) {
			DialogueSystem.StartDialogue("FamilyFirstEncounter");
			metFamily = 1;
		}
		else {	
			DialogueSystem.StartDialogue("FamilySecondEncounter");
		}
	}
}