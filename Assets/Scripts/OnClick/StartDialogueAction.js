#pragma strict

/*
 * Starts the dialogue on click. ID Must be the conversation ID.
 */
class StartDialogueAction extends OnClickAction {
	var dialogueID:String;
	
	function Run() {
		DialogueSystem.StartDialogue(dialogueID);		
	}
}