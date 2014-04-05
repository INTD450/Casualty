#pragma strict

/*
 * Replaces StartDialogueAction.js
 * Starts the dialogue on click. ID Must be the conversation ID.
 */
class EscapeeStartDialogue extends OnClickAction {
	// Met people toggles
	static var metEscapee:int = 0;
	
	function Run() {
		// Enable branches depending on Inventory
		/*
		if () {
			// have redbull or volcan
			DialogueSystem.SetEnabled(MotelBranch3C, true);
			DialogueSystem.SetEnabled(MotelBranch3C2, true);
		}
		if () {
			// have blackbottle, rum, vodka, whiskey
			DialogueSystem.SetEnabled(MotelBranch3A, true);
			DialogueSystem.SetEnabled(MotelBranch3A2, true);
		}
		if () {
			// have doritos1, doritos2, lays
			DialogueSystem.SetEnabled(MotelBranch3B, true);
			DialogueSystem.SetEnabled(MotelBranch3B2, true);
		}
		if () {
			// have FirstAidKit
			DialogueSystem.SetEnabled(MotelBranch3E, true);
		}
		*/
		// Check function for if player has met family
		if (metEscapee == 0)
		{
			DialogueSystem.StartDialogue("MotelEscapee");
			metEscapee = 1;
		}
	}
}