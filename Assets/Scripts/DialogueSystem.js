#pragma strict

import System.Collections.Generic;

//Screen Fader script
static var screen : screenFader;

//Death counter script
static var deathCounter : DeathCounter;



function Start () {
	RegisterExampleDialogue();
	MotelEscapee();
	
	//finding the screen fader script
	screen = FindObjectOfType(screenFader); 
	
	//finding the death counter script
	deathCounter = FindObjectOfType(DeathCounter); 
}

// Make one of these functions for every conversation to keep things clean.
private function RegisterExampleDialogue() {
	// This is how you make a dialogue. Keep adding children to it to make it branchable.
	
	var root:DialogueLine;
	var child1:DialogueLine;
	var child2: DialogueLine;
	
	// The unique ID, "TestStart", should be unique for everything since that's how we
	// find these later.
	root = new DialogueLine("Hello. This is a test.", "TestStart", true, null, null);
	
	// You don't need an image or audio for dialogue lines, so you can keep them null or
	// just leave them out if there aren't any.
	// Otherwise, make global Texture2D and AudioClip variables that you can drag in from
	// the editor.
	child1 = new DialogueLine("Response 1", "TestResponse1", true);
	
	// If the default enabled state is true, you can just leave it out from the constructor, too.
	// This makes it a lot simpler. 
	child2 = new DialogueLine("Response 2", "TestResponse2");
	
	// If this went on longer, we could add children to the children, too.
	root.AddChild(child1);
	root.AddChild(child2);
	
	DialogueRoots.Add(root);	
	
	// The conversation would be started using DialogueSystem.StartDialogue("id"); from any other
	// script.
	// We can set enabled by calling DialogueSystem.SetEnabled("id", false); from any other script.
	// There are more functions, too. See below.
}

// Converstation puzzle in MotelExterior, talking to the person behind the door.
// 3 lines of dialogue can fit across the screen
// for three optione, 46 characters can fit across the button
// for two options, 68 characters can fit across the button
// for one option, 136 characters can fit across the button
private function MotelEscapee() {
	// Initialize
	var motelRoot:DialogueLine;
	var motelBranch1:DialogueLine;
	var motelBranch2:DialogueLine;
	var motelBranch3:DialogueLine;
	var motelBranch1Response:DialogueLine;
	var motelBranch2Response:DialogueLine;
	var motelBranch3Response:DialogueLine;
	var motelBranch1A:DialogueLine;
	var motelBranch1B:DialogueLine;
	var motelBranch1AResponse:DialogueLine;
	var motelBranch1BResponse:DialogueLine;
	var motelBranch1A1:DialogueLine;
	var motelBranch1B1:DialogueLine;
	var motelBranch1B1Response:DialogueLine;
	var motelBranch1B1A:DialogueLine;
	var motelBranch2A:DialogueLine;
	var motelBranch2AResponse:DialogueLine;
	var motelBranch2A1:DialogueLine;
	var motelBranch2A2:DialogueLine;
	var motelBranch3A:DialogueLine;
	var motelBranch3AResponse:DialogueLine;
	var motelBranch3A1:DialogueLine;
	var motelBranch3A2:DialogueLine;
	var motelBranch3A3:DialogueLine;
	var motelBranch3A4:DialogueLine;

	// The unique ID: MotelStart
	// The first line of dialogue
	motelRoot = new DialogueLine("Stay back! I don't want any trouble, but I swear if you try anything funny, something bad will happen.", "MotelEscapee", true, null, null);
	
	// First Level Choices
	motelBranch1 = new DialogueLine("Whoa there, I mean you no harm. Listen,\nI'm just trying to get outta town.", "MotelBranch1", true);
	motelBranch2 = new DialogueLine("Heh, I'd love to see you try. I mean, I can\nraise my voice a little louder if you want so\nwe can invite those people outside.", "MotelBranch2");
	motelBranch3 = new DialogueLine("Look, I just want to get out of this city\nbefore something worse than this level of\ndestruction happens, just let me through.", "MotelBranch3");

	// First Level Responses
	motelBranch1Response = new DialogueLine("I doubt it. That’s what the bad guys always say. Get on your good side. Well I’m not going to let you talk your way into making me do anything you want. I’m going to stand my ground!", "MotelBranch1Response");
	motelBranch2Response = new DialogueLine("What?! Listen I- I- I didn’t mean to upset you! Please don’t alert those guys out there to our location. Please! I beg you please don’t do it!", "MotelBranch2Response");
	motelBranch3Response = new DialogueLine("Why should I? For all I know you could try to rob me blind and kill me the moment I let you through.", "MotelBranch3Response");

	// Second Level Choices
	motelBranch1A = new DialogueLine("Stand your ground? Listen to me! For the\nsake of humanity, I’m just another unarmed civilian\ntrying to flee can you please let me past?!", "MotelBranch1A");
	motelBranch1B = new DialogueLine("Listen! We don’t have time to argue. If we do we are just going to\nstand here bickering until the goons outside overhear us.", "MotelBranch1B");
	motelBranch2A = new DialogueLine("Oi buddy, I don’t like your tone there. So how about I just break this door down?", "MotelBranch2A");
	motelBranch3A = new DialogueLine("I overheard you talking to yourself. I know you want to get out of this hell on earth alive. So how about we trade? I give you\nsomething from my supplies and you let me pass?", "MotelBranch3A");

	// Second Level Responses
	motelBranch1AResponse = new DialogueLine("Humanity?! Have you seen what humanity has done out there? Riots! Brute force on civilians by those who are supposed to protect us! Humanity is gone!", "MotelBranch1AResponse");
	motelBranch1BResponse = new DialogueLine("Well then we’ll just whisper! I am still not going to budge. For all I know you can be with them! I don’t know who to trust anymore!", "MotelBranch1BResponse");
	motelBranch2AResponse = new DialogueLine("No please don’t! Please lower your voice! Please don’t—Wait… how do I know that you aren’t with them?! Why should I open the door for you! You could be pretending to be from the motel!", "MotelBranch2AResponse");
	motelBranch3AResponse = new DialogueLine("...what do you have in mind?", "MotelBranch3AResponse");

	// Third Level Choices
	/* DEATH HERE */motelBranch1A1 = new DialogueLine("Humanity isn’t gone! You can help change that by helping me out! A small act of\ngoodwill can help fight the chaos. Show them that we still are humans, not animals.", "MotelBranch1A1");
	motelBranch1B1 = new DialogueLine("Please, you have seen what they look like. They have guns, I just got a hoodie and a backpack.\nThe longer I’m standing out here in the open they can spot me and if they do they’ll\ntake me out and I bet you they’ll search for you too since people just don’t talk to themselves.", "MotelBranch1B1");
	/* DEATH HERE */motelBranch2A1 = new DialogueLine("Really? I’m one of the bad guys? You know what, that’s it! You\nleave me no choice! [Break Down the Door]", "MotelBranch2A1");
	/* DEATH HERE */motelBranch2A2 = new DialogueLine("Are you kidding me?! Damn, if I was part of the pack of\nmean looking people outside would I even bother talking to you\nfor this long? I mean I would’ve just broken the door down by now.", "MotelBranch2A2");
	motelBranch3A1 = new DialogueLine("Item from inventory", "MotelBranch3A1");
	motelBranch3A2 = new DialogueLine("Item", "MotelBranch3A2");
	motelBranch3A3 = new DialogueLine("Item", "MotelBranch3A3");
	/*DEATH at third incorrect offer*/motelBranch3A4 = new DialogueLine("Item", "MotelBranch3A4");

	// Third Level Responses
	motelBranch1B1Response = new DialogueLine("...I see your point. Hold on, just give me a minute.", "MotelBranch1B1Response");

	// Fourth Level Choices
	/*TRANSITION HERE*/ motelBranch1B1A = new DialogueLine("[Continue]", "MotelBranch1B1A");

	// First Branch
	motelRoot.AddChild(motelBranch1);
	motelBranch1.AddChild(motelBranch1Response);
		// Leaf 1
		motelBranch1Response.AddChild(motelBranch1A);
		motelBranch1A.AddChild(motelBranch1AResponse);
		motelBranch1AResponse.AddChild(motelBranch1A1);
		// Leaf 2
		motelBranch1Response.AddChild(motelBranch1B);
		motelBranch1B.AddChild(motelBranch1BResponse);
		motelBranch1BResponse.AddChild(motelBranch1B1);
		motelBranch1B1.AddChild(motelBranch1B1Response);
		motelBranch1B1Response.AddChild(motelBranch1B1A);
	// Second Branch
	motelRoot.AddChild(motelBranch2);
	motelBranch2.AddChild(motelBranch2Response);
	motelBranch2Response.AddChild(motelBranch2A);
	motelBranch2A.AddChild(motelBranch2AResponse);
	motelBranch2AResponse.AddChild(motelBranch2A1);
	motelBranch2AResponse.AddChild(motelBranch2A2);
	// Third Branch
	motelRoot.AddChild(motelBranch3);
	motelBranch3.AddChild(motelBranch3Response);
	motelBranch3Response.AddChild(motelBranch3A);
	motelBranch3A.AddChild(motelBranch3AResponse);
	motelBranch3AResponse.AddChild(motelBranch3A1);
	motelBranch3AResponse.AddChild(motelBranch3A2);
	motelBranch3AResponse.AddChild(motelBranch3A3);
	motelBranch3AResponse.AddChild(motelBranch3A4);

	//If you want something to happen when you click on the MotelBranch1 dialogue, it will call the death function
	AddWhenReachedFunction("MotelBranch3A4",death);

	DialogueRoots.Add(motelRoot);
}

/*
 * The rest of this code is the actual implementation of the dialogue
 * system. It shouldn't be edited unless you know what you're doing.
 */

static var IDsToDialogueLines:Dictionary.<String, DialogueLine> = new Dictionary.<String, DialogueLine>();
static var DialogueRoots:List.<DialogueLine> = new List.<DialogueLine>();
static var currentLine : DialogueLine;
static var currentRoot : DialogueLine;

static function IsEnabled(id:String):boolean  {
	var line:DialogueLine = DialogueSystem.IDsToDialogueLines[id];
	
	if(line != null)
		return line.Enabled;
	else {
		Debug.Log("Dialogue Warning: Attempted to find enabled state of " +
			"nonexistant DialogueLine " + id);
		return false;
	}
}

static function SetEnabled(id:String, enabled:boolean) {
	var line:DialogueLine = DialogueSystem.IDsToDialogueLines[id];
	
	if(line != null)
		line.Enabled = enabled;
	else
		Debug.Log("Dialogue Warning: Attempted to enable " +
			"nonexistant DialogueLine " + id);
}

/*
 * Functions that happen when a dialouge line is reached. Needs to be attached to children.
 */
static function AddWhenReachedFunction(id:String, funxion:Function) {
	var line:DialogueLine = DialogueSystem.IDsToDialogueLines[id];
	
	if(line != null){
		line.WhenReachedFunctions.Add(funxion);
		//Debug.Log("im here");
	}
	else
		Debug.Log("Dialogue Warning: Attempted to add When Reached function to " +
			"nonexistant DialogueLine " + id);
}

/**
* The death script
*/
public function death(){
	//Calling the Add function in the deathCounter script
	deathCounter.Add(1);
	
	//Calling the setEndGame function in the screen Script
	screen.setEndGame();
}



/*
 * Functions that happen when a dialouge begins. Needs to be attached to roots.
 */
static function AddOnStartFunction(id:String, funxion:Function) {
	var line:DialogueLine = DialogueSystem.IDsToDialogueLines[id];
	
	if(line != null)
		line.OnStartFunctions.Add(funxion);
	else
		Debug.Log("Dialogue Warning: Attempted to add On Start function to " +
			"nonexistant DialogueLine " + id);
}

/*
 * Functions that happen when a dialouge begins. Needs to be attached to roots.
 */
static function AddOnFinishedFunction(id:String, funxion:Function) {
	var line:DialogueLine = DialogueSystem.IDsToDialogueLines[id];
	
	if(line != null)
		line.OnFinishedFunctions.Add(funxion);
	else
		Debug.Log("Dialogue Warning: Attempted to add On Finished function to " +
			"nonexistant DialogueLine " + id);
}


/**
 * Starts the passed in dialogue. Should be a root.
 */
static function StartDialogue(id:String) {
	var foundLine = DialogueSystem.IDsToDialogueLines[id];
	
	if(foundLine != null && foundLine.Enabled) {
			currentRoot = foundLine;		
			currentLine = foundLine;
			foundLine.OnStart();
	}
}

static var audioObject : GameObject;
static var functionsFired : boolean = false;

/**
 * This is necessary so that we can destroy the temp game object after
 * playing the audio.
 */
private static function PlayClip(clip: AudioClip, pos: Vector3) : GameObject {
  var tempGO : GameObject;
  var aSource : AudioSource;
  
  tempGO = GameObject("TemporaryDialogueAudio");
  aSource = tempGO.AddComponent(AudioSource);
  
  tempGO.transform.position = pos;
  aSource.clip = clip;

  aSource.Play();
  // destroy object after clip duration
  Destroy(tempGO, clip.length); 
  
  return tempGO;
}

/**
 * Shows the GUI for dialogues. Edit it here.
 */
function OnGUI() {
	if(currentLine != null) {		
		if(!functionsFired) {
			this.currentLine.WhenReached();
			functionsFired = true;
		}
		
		var children : List.<DialogueLine> = this.currentLine.Children;
		
		// Display the text
		var boxHorCenter : int = Screen.width / 2;
		var boxVertCenter : int = Screen.height - 150;
		var boxHorStart : int = boxHorCenter - 400;
		var boxWidth : int = 800;
		
		// a box surrounding the entire conversation
		GUI.Box (Rect (boxHorStart, Screen.height - 250, boxWidth, 200), "");
		
		// line of dialogue from NPC currently being said
		GUI.Label (Rect ((boxHorCenter - 375), boxVertCenter - 90, 750, 40), this.currentLine.Text);

		// center image pointing at the four possible responses
		if(this.currentLine.Image != null)
			GUI.Label (Rect ((boxHorCenter - 50), Screen.height - 190, 100, 100), this.currentLine.Image);
		
		// Play the audio
		if(this.currentLine.Audio != null) {
			if(this.audioObject == null) {
				this.audioObject = DialogueSystem.PlayClip(this.currentLine.Audio, Camera.main.transform.position);
			}
		} else
			audioObject = null;
		
		var offset:int = boxHorStart;
		
		var sizeForEachChild = boxWidth/this.currentLine.Children.Count;
		
		for(var child : DialogueLine in this.currentLine.Children) {
			if(!child.Enabled)
				continue;			
			
			var content : GUIContent;
			
			if(child.Image != null)
				content = GUIContent(child.Text, child.Image);
			else
				content = GUIContent(child.Text);
				
			if (GUI.Button (Rect ((offset), Screen.height - 200, sizeForEachChild, 60), content)) {
				child.WhenReached();
				
				if(child.Children.Count <= 0) {
					this.currentRoot.OnFinish();
					
					this.currentRoot = null;
					this.currentLine = null;
				} else {
					this.currentLine = child.Children[0];
				}
				
				if(audioObject != null)
					Destroy(audioObject);

				functionsFired = false;
				break;
			}
			
			offset += sizeForEachChild;				
		}
	}
}

/**
 * The actual dialogue line class.
 */
private class DialogueLine {
	var Text:String;
	var Enabled:boolean;
	
	var WhenReachedFunctions : List.<Function>;
	var OnFinishedFunctions : List.<Function>;
	var OnStartFunctions : List.<Function>;
	
	var Children : List.<DialogueLine>;
	var Parents : List.<DialogueLine>;
	
	var Audio:AudioClip;
	var Image:Texture2D;
	
	function DialogueLine(text:String, id:String,  enabled:boolean, image:Texture2D, audio:AudioClip) {
		this.Text = text;
		this.Enabled = enabled;
		this.Image = image;
		this.Audio = audio;
		
		this.Children = new List.<DialogueLine>();
		this.Parents = new List.<DialogueLine>();
		this.WhenReachedFunctions = new List.<Function>();
		this.OnFinishedFunctions = new List.<Function>();
		this.OnStartFunctions = new List.<Function>();
		
		DialogueSystem.IDsToDialogueLines[id] = this;
	}
	
	function DialogueLine(text:String, id:String,  enabled:boolean) {
		this(text, id,  enabled, null, null);
	}
	
	function DialogueLine(text:String, id:String) {
		this(text, id,  true);
	}
	
	function WhenReached() {
		for(var funxion : Function in WhenReachedFunctions) {
			funxion();
		}
	}
	
	function OnStart() {
		for(var funxion : Function in OnStartFunctions) {
			funxion();
		}
	}
	
	function OnFinish() {
		for(var funxion : Function in OnFinishedFunctions) {
			funxion();
		}
	}
	
	/*
     * Add a child to a Dialogue Line, automatically adding the Dialogue Line to
     * the child's parents.
     */
	function AddChild(child:DialogueLine) {
		this.Children.Add(child);
		child.Parents.Add(this);
	}
}