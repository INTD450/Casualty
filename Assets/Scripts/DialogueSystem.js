#pragma strict

import System.Collections.Generic;

function Start () {
	RegisterExampleDialogue();
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
private function MotelEscapee() {
	// This is how you make a dialogue. Keep adding children to it to make it branchable.
	
	var motelRoot:DialogueLine;
	var child1:DialogueLine;
	var child2:DialogueLine;
	var child3:DialogueLine;

	
	
	// The unique ID, "TestStart", should be unique for everything since that's how we
	// find these later.
	motelRoot = new DialogueLine("Stay back! I don't want any trouble, but I swear if you try anything funny, something bad will happen.", "MotelStart", true, null, null);
	
	// You don't need an image or audio for dialogue lines, so you can keep them null or
	// just leave them out if there aren't any.
	// Otherwise, make global Texture2D and AudioClip variables that you can drag in from
	// the editor.
	child1 = new DialogueLine("Whoa there, I mean you no harm. Listen, I'm just trying to get outta town just like you.", "MotelResponse1", true);
	
	// If the default enabled state is true, you can just leave it out from the constructor, too.
	// This makes it a lot simpler. 
	child2 = new DialogueLine("Heh, I'd love to see you try. I mean, I can raise my voice a little louder if you want so we can invite those nice looking fellows outside.", "MotelResponse2");
	child3 = new DialogueLine("Look, I just want to get out of this city before something worse than this level of destruction happens, just let me through.", "MotelResponse3");


	// If this went on longer, we could add children to the children, too.
	motelRoot.AddChild(child1);
	motelRoot.AddChild(child2);
	motelRoot.AddChild(child3);




	
	DialogueRoots.Add(motelRoot);	
	
	// The conversation would be started using DialogueSystem.StartDialogue("id"); from any other
	// script.
	// We can set enabled by calling DialogueSystem.SetEnabled("id", false); from any other script.
	// There are more functions, too. See below.
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
	
	if(line != null)
		line.WhenReachedFunctions.Add(funxion);
	else
		Debug.Log("Dialogue Warning: Attempted to add When Reached function to " +
			"nonexistant DialogueLine " + id);
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