#pragma strict

/*
 * Replaces StartDialogueAction.js
 * Starts the dialogue on click. ID Must be the conversation ID.
 */
class PilotStartDialogue extends OnClickAction {
	// Met people toggles
	static var metPilot:int = 0;
	// Keeping tracks of dynamic components
	static var dynamic : dynamicInventory;
	function Run() {
		//Finding the dynamicInventory script
		dynamic = FindObjectOfType(dynamicInventory);
		// Enable branches depending on Inventory
		if (dynamic.checkExist("Ladder") || dynamic.checkExist("Rope") || dynamic.checkExist("ladder") || dynamic.checkExist("rope")) {
			// have ladder or rope
			DialogueSystem.SetEnabled("PilotBranch1A2A", true);
			DialogueSystem.SetEnabled("PilotBranchSecond2", true);
		}
		// Check function for if player has met pilot
		if (metPilot == 0) {			
			DialogueSystem.StartDialogue("PilotFirstEncounter");
			metPilot = 1;
		}
		else {
			DialogueSystem.StartDialogue("PilotSecondEncounter");
		}
	}

	function resetToZero() {
		metPilot = 0;
	}
}