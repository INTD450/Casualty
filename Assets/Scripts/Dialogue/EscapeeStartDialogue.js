#pragma strict

/*
 * Replaces StartDialogueAction.js
 * Starts the dialogue on click. ID Must be the conversation ID.
 */
class EscapeeStartDialogue extends OnClickAction {
	// Met people toggles
	static var metEscapee:int = 0;
	// Keeping tracks of dynamic components
	static var dynamic : dynamicInventory;
	function Run() {
		//Finding the dynamicInventory script
		dynamic = FindObjectOfType(dynamicInventory);
		// Enable branches depending on Inventory
		if (dynamic.checkExist("redbull") || dynamic.checkExist("voltcan")) {
			// have redbull or volcan
			DialogueSystem.SetEnabled("MotelBranch3C", true);
			DialogueSystem.SetEnabled("MotelBranch3C2", true);
		}
		if (dynamic.checkExist("blackbottle") || dynamic.checkExist("rum") || dynamic.checkExist("vodka") || dynamic.checkExist("BlackBottle") || dynamic.checkExist("Rum") || dynamic.checkExist("Vodka") || dynamic.checkExist("Whiskey")) {
			// have blackbottle, rum, vodka, whiskey
			DialogueSystem.SetEnabled("MotelBranch3A", true);
			DialogueSystem.SetEnabled("MotelBranch3A2", true);
		}
		if (dynamic.checkExist("doritos1") || dynamic.checkExist("doritos2") || dynamic.checkExist("lays")) {
			// have doritos1, doritos2, lays
			DialogueSystem.SetEnabled("MotelBranch3B", true);
			DialogueSystem.SetEnabled("MotelBranch3B2", true);
		}
		if (dynamic.checkExist("FirstAidKit")) {
			// have FirstAidKit
			DialogueSystem.SetEnabled("MotelBranch3E", true);
		}
		// Check function for if player has met escapee
		if (metEscapee == 0)
		{
			DialogueSystem.StartDialogue("MotelEscapee");
			metEscapee = 1;
		}
	}

	function resetToZero() {
		metEscapee = 0;
	}
}