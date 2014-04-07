#pragma strict

import System.Collections.Generic;

//Screen Fader script
static var screen : screenFader;
//Death counter script
static var deathCounter : DeathCounter;
// Keeping tracks of Inventory
static var dynamic : dynamicInventory;
static var inv : Inventory;
// Other dialogue scripts
static var instanceEscapeeStartDialogue:EscapeeStartDialogue;
static var instanceFamilyStartDialogue:FamilyStartDialogue;
static var instancePilotStartDialogue:PilotStartDialogue;
static var instanceHidingPersonStartDialogue:HidingPersonStartDialogue;

function Start () {
	RegisterExampleDialogue();
	MotelEscapee();
	HidingPersonFirstEncounter();
	FamilyFirstEncounter();
	HidingPersonSecondEncounter();
	FamilySecondEncounter();
	PilotFirstEncounter();
	PilotSecondEncounter();
	ChildEncounter();
	
	//finding All the things
	screen = FindObjectOfType(screenFader);
	deathCounter = FindObjectOfType(DeathCounter);
	instanceEscapeeStartDialogue = FindObjectOfType(EscapeeStartDialogue);
	instanceFamilyStartDialogue = FindObjectOfType(FamilyStartDialogue);
	instancePilotStartDialogue = FindObjectOfType(PilotStartDialogue);
	instanceHidingPersonStartDialogue = FindObjectOfType(HidingPersonStartDialogue);
	dynamic = FindObjectOfType(dynamicInventory);
	inv = FindObjectOfType(Inventory);
}

// Make one of these functions for every conversation to keep things clean.
private function RegisterExampleDialogue() {
	// This is how you make a dialogue. Keep adding children to it to make it branchable.
	// Two lines of dialogue can be said by the other
	// for the response, 125 characters can fit across the popup
	// for the response, 256 characters can fit in total
	// 3 lines of dialogue can fit across the button
	// for four options, 32 characters can fit across the button
	// for three options, 46 characters can fit across the button
	// for two options, 68 characters can fit across the button
	// for one option, 136 characters can fit across the button
	var root:DialogueLine;
	var child1:DialogueLine;
	var child2:DialogueLine;
	
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
	var motelBranch3B:DialogueLine;
	var motelBranch3C:DialogueLine;
	var motelBranch3D:DialogueLine;
	var motelBranch3E:DialogueLine;
	var motelBranch3F:DialogueLine;
	var motelBranch3A2:DialogueLine;
	var motelBranch3B2:DialogueLine;
	var motelBranch3C2:DialogueLine;
	var motelBranch3AYResponse:DialogueLine;
	var motelBranch3ANResponse:DialogueLine;
	var motelBranch3FResponse:DialogueLine;

	// The unique ID: MotelEscapee
	// The first line of dialogue
	motelRoot = new DialogueLine("[Someone is holding the door shut]\nStay back! I don't want any trouble, but I swear if you try anything funny, something bad will happen.", "MotelEscapee", true, null, null);
	
	// First Level Choices
	motelBranch1 = new DialogueLine("Whoa there, I mean you no harm. Listen,\nI'm just trying to get outta town.", "MotelBranch1");
	motelBranch2 = new DialogueLine("Heh, I'd love to see you try. I mean, I can\nraise my voice a little louder if you want so\nwe can invite those people outside.", "MotelBranch2");
	motelBranch3 = new DialogueLine("How about we trade? I give you\nsomething useful from my\nsupplies and you let me pass?", "MotelBranch3");
	// First Level Responses
	motelBranch1Response = new DialogueLine("I doubt it. That’s what the bad guys always say. Get on your good side. Well I’m not going to let you talk your way into making me do anything you want. I’m going to stand my ground!", "MotelBranch1Response");
	motelBranch2Response = new DialogueLine("What?! Listen I- I- I didn’t mean to upset you! Please don’t alert those guys out there to our location. Please! I beg you please don’t do it!", "MotelBranch2Response");
	motelBranch3Response = new DialogueLine("...what do you have in mind?", "MotelBranch3Response");

	// Second Level Choices
	motelBranch1A = new DialogueLine("Stand your ground? Listen to me! For the\nsake of humanity, I’m just another unarmed civilian\ntrying to flee can you please let me past?!", "MotelBranch1A");
	motelBranch1B = new DialogueLine("Listen! We don’t have time to argue. If we do we are just going to\nstand here bickering until the goons outside overhear us.", "MotelBranch1B");
	motelBranch2A = new DialogueLine("Oi buddy, I don’t like your tone there. So how about I just break this door down?", "MotelBranch2A");
	/*DEATH at third incorrect offer*/
	motelBranch3A = new DialogueLine("Alcohol", "MotelBranch3A", false); //blackbottle, Rum, vodka, Whiskey
	motelBranch3B = new DialogueLine("Chips", "MotelBranch3B", false); // doritos1, doritos2, lays
	motelBranch3C = new DialogueLine("Soda", "MotelBranch3C", false); // redbull, voltcan
	motelBranch3E = new DialogueLine("First Aid Kit", "MotelBranch3E", false); //FirstAidKit , false);
	motelBranch3F = new DialogueLine("I don't actually\nhave anything.", "MotelBranch3F");
	
	motelBranch3A2 = new DialogueLine("Alcohol", "MotelBranch3A2", false); //blackbottle, Rum, vodka, Whiskey
	motelBranch3B2 = new DialogueLine("Chips", "MotelBranch3B2", false); // doritos1, doritos2, lays
	motelBranch3C2 = new DialogueLine("Soda", "MotelBranch3C2", false); // redbull, voltcan

	// Second Level Responses
	motelBranch1AResponse = new DialogueLine("Humanity?! Have you seen what humanity has done out there? Riots! Brute force on civilians by those who are supposed to protect us! Humanity is gone!", "MotelBranch1AResponse");
	motelBranch1BResponse = new DialogueLine("Well then we’ll just whisper! I am still not going to budge. For all I know you can be with them! I don’t know who to trust anymore!", "MotelBranch1BResponse");
	motelBranch2AResponse = new DialogueLine("No please don’t! Please lower your voice! Please don’t—Wait… how do I know that you aren’t with them?! Why should I open the door for you! You could be pretending to be from the motel!", "MotelBranch2AResponse");
	/*DEATH at third incorrect offer*/
	motelBranch3AYResponse = new DialogueLine("Alright, I can see how that would be useful. You better hold up your end of this deal, though.", "MotelBranch3AYResponse");
	motelBranch3ANResponse = new DialogueLine("What? I don't need that! I could've just grabbed that from the shelf myself!", "MotelBranch3ANResponse");
	motelBranch3FResponse = new DialogueLine("I thought as much. You were trying to trick me into opening this door. Well, I can wait till you leave.", "MotelBranch3FResponse");

	// Third Level Choices
	motelBranch1A1 = new DialogueLine("Humanity isn’t gone! You can help change that by helping me out! A small act of\ngoodwill can help fight the chaos. Show them that we still are humans, not animals.", "MotelBranch1A1");
	motelBranch1B1 = new DialogueLine("Please, you have seen what they look like. They have guns, I just got a hoodie and a backpack.\nThe longer I’m standing out here in the open they can spot me and if they do they’ll\ntake me out and I bet you they’ll search for you too since people just don’t talk to themselves.", "MotelBranch1B1");
	motelBranch2A1 = new DialogueLine("Really? I’m one of the bad guys? You know what, that’s it! You\nleave me no choice! [Break Down the Door]", "MotelBranch2A1");
	motelBranch2A2 = new DialogueLine("Are you kidding me?! Damn, if I was part of the pack of\nmean looking people outside would I even bother talking to you\nfor this long? I mean I would’ve just broken the door down by now.", "MotelBranch2A2");
	// Third Level Responses
	motelBranch1B1Response = new DialogueLine("...I see your point. Hold on, just give me a minute.", "MotelBranch1B1Response");

	// Fourth Level Choices
	motelBranch1B1A = new DialogueLine("[Continue]", "MotelBranch1B1A");

	// Building Branches: First Branch
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
		// First Choice
		motelBranch3Response.AddChild(motelBranch3A);
		motelBranch3Response.AddChild(motelBranch3B);
		motelBranch3Response.AddChild(motelBranch3C);
		motelBranch3Response.AddChild(motelBranch3E);
		motelBranch3Response.AddChild(motelBranch3F);
		// First Response
		motelBranch3A.AddChild(motelBranch3ANResponse);
		motelBranch3B.AddChild(motelBranch3ANResponse);
		motelBranch3C.AddChild(motelBranch3ANResponse);
		// Second Choices
		motelBranch3ANResponse.AddChild(motelBranch3A2);
		motelBranch3ANResponse.AddChild(motelBranch3B2);
		motelBranch3ANResponse.AddChild(motelBranch3C2);
		motelBranch3ANResponse.AddChild(motelBranch3E);
		motelBranch3ANResponse.AddChild(motelBranch3F);
		// Non-Death Choices
		motelBranch3E.AddChild(motelBranch3AYResponse);
		motelBranch3AYResponse.AddChild(motelBranch1B1A);
		motelBranch3F.AddChild(motelBranch3FResponse);
		motelBranch3FResponse.AddChild(motelBranch1);
		motelBranch3FResponse.AddChild(motelBranch2);

	// Functions
	// Deaths : When you click on the dialogue option, it will call the death function
	AddWhenReachedFunction("MotelBranch2A1",deathTwo);
	AddWhenReachedFunction("MotelBranch2A2",deathTwo);
	AddWhenReachedFunction("MotelBranch1A1",deathTwo);
	AddWhenReachedFunction("MotelBranch3A2",deathTwo);
	AddWhenReachedFunction("MotelBranch3B2",deathTwo);
	AddWhenReachedFunction("MotelBranch3C2",deathTwo);
	// remove first aid kit from inventory
	AddWhenReachedFunction("MotelBranch3E", RemoveItemFirstAid);
	// Transition
	AddWhenReachedFunction("MotelBranch1B1A", AlleyGo);

	DialogueRoots.Add(motelRoot);
}


// First conversation with hiding person
private function HidingPersonFirstEncounter() {
	// Initialize
	var hidingRoot:DialogueLine;
	var hidingBranch1:DialogueLine;
	var hidingBranch2:DialogueLine;
	var hidingBranch1Response:DialogueLine;
	var hidingBranch2Response:DialogueLine;
	var hidingBranch1A:DialogueLine;
	var hidingBranch1B:DialogueLine;
	var hidingBranch2A:DialogueLine;
	var hidingBranch2B:DialogueLine;
	var hidingBranch1AResponse:DialogueLine;
	var hidingBranch2AResponse:DialogueLine;
	var hidingBranchA:DialogueLine;
	//var hidingBranchB:DialogueLine;
	//var hidingBranchC:DialogueLine;
	var hidingBranchAResponse:DialogueLine;
	//var hidingBranchBResponse:DialogueLine;
	var hidingBranchLast:DialogueLine;

	// The unique ID: HidingPersonFirstEncounter
	hidingRoot = new DialogueLine("Go away! They are everywhere! Everyone marching, going door to door searching.", "HidingPersonFirstEncounter", true, null, null);
	
	// First Level Choices
	hidingBranch1 = new DialogueLine("Whoa, take a breath and relax...", "HidingBranch1");
	hidingBranch2 = new DialogueLine("Hey now, what are you talking about?", "HidingBranch2");
	// First Level Responses
	hidingBranch1Response = new DialogueLine("Relax?!? You want me to relax when the world around me is going to burn? Heh heh, no why don't you relax?", "HidingBranch1Response");
	hidingBranch2Response = new DialogueLine("Lies is what everyone is trying to feed you in the media, the papers, in the streets. The army, the militia, they tell you what they want you to hear. Don't trust them!", "HidingBranch2Response");

	// Second Level Choices
	hidingBranch1A = new DialogueLine("Hey! I know the world is pretty messed up right now. I’m\nconfused as to what’s going on myself but you need to get out\nof here. So trust me I'm one of the good people, I can help.", "HidingBranch1A");
	hidingBranch1B = new DialogueLine("Alright, if you are gonna act like a jerk\nI'm not gonna waste my breath, I'm gone.", "HidingBranch1B"); // End Dialogue
	hidingBranch2A = new DialogueLine("What? How would you know?", "HidingBranch2A");
	hidingBranch2B = new DialogueLine("I don't have time for your conspiracy theories.", "HidingBranch2A"); // End Dialogue
	// Second Level Responses
	hidingBranch1AResponse = new DialogueLine("Leave?! No, the fire will rain anywhere you or I go. It can be an order from the fancy men in ties and suits or the ones who look like you and me. So no, I will stay here. Safe from the lies everyone is trying to feed you and I. No one can hurt me here.", "HidingBranch1AResponse");
	hidingBranch2AResponse = new DialogueLine("I know because I pay attention. I know that both say they are better than the other but they are the same. They only have different masks. They say they are both the “voice” of the people. Both lie to you and I because of that that they can’t be trusted.", "HidingBranch2AResponse");

	// Third Level Choices
	hidingBranchA = new DialogueLine("If you don’t trust them then trust me.\nI can help you out get out of this\nplace. I know my way around.", "HidingBranchA");
	///* if player has seen sniper */ hidingBranchB = new DialogueLine("Well, there is a sniper at the end of the\nalley but I can get around them. Trust me.", "HidingBranchB");
	// /* if player has firecrackers (and has seen sniper?) */ hidingBranchC = new DialogueLine("You seem very high strung. But if we run\ntogether... [use firecrackers]", "HidingBranchC");
	// Third Level Responses
	hidingBranchAResponse = new DialogueLine("No! I won't go. It's safe here. Only you found me so far. So here I will stay.", "HidingBranchAResponse");
	//hidingBranchBResponse = new DialogueLine("A sniper?! Oh no, no, no, no! That is definitely not safe! I will never leave this spot.", "HidingBranchBResponse");
	
	// Fourth Level Choices
	hidingBranchLast = new DialogueLine("[Leave]", "HidingBranchLast");

	// Buildng Branches: First Level
	hidingRoot.AddChild(hidingBranch1);
	hidingRoot.AddChild(hidingBranch2);
	hidingBranch1.AddChild(hidingBranch1Response);
	hidingBranch2.AddChild(hidingBranch2Response);
	// Second Level
	hidingBranch1Response.AddChild(hidingBranch1A);
	hidingBranch1Response.AddChild(hidingBranch1B);
	hidingBranch2Response.AddChild(hidingBranch2A);
	hidingBranch2Response.AddChild(hidingBranch2B);
	hidingBranch1A.AddChild(hidingBranch1AResponse);
	hidingBranch2A.AddChild(hidingBranch2AResponse);
	// Third Level
	hidingBranch1AResponse.AddChild(hidingBranchA);
	//hidingBranch1AResponse.AddChild(hidingBranchB);
	//hidingBranch1AResponse.AddChild(hidingBranchC);
	hidingBranch2AResponse.AddChild(hidingBranchA);
	//hidingBranch2AResponse.AddChild(hidingBranchB);
	//hidingBranch2AResponse.AddChild(hidingBranchC);
	// Fourth Level
	hidingBranchA.AddChild(hidingBranchAResponse);
	//hidingBranchB.AddChild(hidingBranchBResponse);
	// Final Level
	hidingBranchAResponse.AddChild(hidingBranchLast);
	//hidingBranchBResponse.AddChild(hidingBranchLast);

	DialogueRoots.Add(hidingRoot);
}

// Second conversation with hiding person
private function HidingPersonSecondEncounter() {
	// Initialize
	var hidingRootSecond:DialogueLine;
	// var hidingBranchSecond1:DialogueLine;
	var hidingBranchSecond2:DialogueLine;
	
	// The unique ID: HidingPersonSecondEncounter
	hidingRootSecond = new DialogueLine("I knew you would be back! The lies are getting to you. You want to know who to trust but you are confused about what’s going on. How did it all start? How can we trust those who are using force?", "HidingPersonSecondEncounter", true, null, null);
	// /* if player has firecrackers */ hidingBranchSecond1 = new DialogueLine("Yes tell me! I need to know who I can trust. I want to get\nout of here alive. [use firecrackers]", "HidingBranchSecond1");
	hidingBranchSecond2 = new DialogueLine("Ah, I think I’ve heard all I needed with that.\nI need to get out of here while I still can.", "HidingBranchSecond2");

	// hidingRootSecond.AddChild(hidingBranchSecond1);
	hidingRootSecond.AddChild(hidingBranchSecond2);
	
	DialogueRoots.Add(hidingRootSecond);
}

// First Family Encounter
private function FamilyFirstEncounter() {
	// Initialize
	var familyRootFirst:DialogueLine;
	var familyBranch1:DialogueLine;
	var familyBranch2:DialogueLine;
	var familyBranch1Response:DialogueLine;
	var familyBranch2Response:DialogueLine;
	var familyBranch2A:DialogueLine;
	var familyBranch2AResponse:DialogueLine;
	var familyBranch1A:DialogueLine;
	var familyBranch1B:DialogueLine;
	var familyBranch1C:DialogueLine;
	var familyBranch1D:DialogueLine;
	var familyBranch1AResponse:DialogueLine;
	var familyBranch1BCResponse:DialogueLine;
	var familyBranch2A1:DialogueLine;
	var familyBranch2A1Response:DialogueLine;
	var familyBranch1A1:DialogueLine;
	var familyBranch1A2:DialogueLine;
	var familyBranch1A1Response:DialogueLine;
	var familyBranch1A2Response:DialogueLine;
	var familyBranch2A1A:DialogueLine;
	var familyBranch2A1AResponse:DialogueLine;
	var familyBranch1AA:DialogueLine;

	// Unique ID: FamilyFirstEncounter
	familyRootFirst = new DialogueLine("Who are you with? What do you want?", "FamilyFirstEncounter", true, null, null);

	// First Level Choices
	familyBranch1 = new DialogueLine("Sorry to intrude, but are you two alright?", "FamilyBranch1");
	familyBranch2 = new DialogueLine("What do you mean \"Who am I with\"?\nDo you know what's going on?", "FamilyBranch2");
	// First Level Responses
	familyBranch1Response = new DialogueLine("Well, my little one is getting hungry... but, yes, we are fine, we’re just waiting for my partner.", "FamilyBranch1Response");
	familyBranch2Response = new DialogueLine("You're not from here, are you? Well, this situation... it's complicated at best. There are several factions trying to gain control while there are others who seem to want to just break everything.", "FamilyBranch2Response");

	// Second Level Choices
	familyBranch1A = new DialogueLine("How did they get separated\nfrom you, then?", "FamilyBranch1A");
	/* if player has food on them */ familyBranch1B = new DialogueLine("Here, I got a bit of\nfood I can spare.", "FamilyBranch1B", false);
	/* if player has yo-yo or gameboy on them */ familyBranch1C = new DialogueLine("Well, I could part with\na toy I have on me...", "FamilyBranch1C", false);
	familyBranch1D = new DialogueLine("Alright, I won't hold you up.\nGood luck though.", "FamilyBranch1D");
	familyBranch2A = new DialogueLine("Could you fill me in in some of the details? How did this start?", "FamilyBranch2A");
	// Second Level Responses
	familyBranch1AResponse = new DialogueLine("They went to check out the area to find the safest route to get to the hospital. It was best that they went ahead alone while we stay here incase there’s trouble.", "FamilyBranch1AResponse");
	familyBranch1BCResponse = new DialogueLine("Thank you for your generosity, it's nice to meet someone so kind when things are so bleak. I hope no one else finds us before my partner gets back.", "FamilyBranch1BCResponse");
	familyBranch2AResponse = new DialogueLine("The national government passed a few controversial bills that took away basic human rights. They worded the bills cleverly to weave in many rights we took for granted tying them all together. Basically it boiled down to taking away our freedoms.", "FamilyBranch2AResponse");

	// Third Level Choices
	familyBranch1A1 = new DialogueLine("I see. . .why are you trying\nto reach the hospital?", "FamilyBranch1A1");
	familyBranch1A2 = new DialogueLine("They could've run into some trouble. What\ndo they look like? Maybe I can help out.", "FamilyBranch1A2");
	familyBranch2A1 = new DialogueLine("How did this happen?", "FamilyBranch2A1");
	// Third Level Responses
	familyBranch1A1Response = new DialogueLine("It’s where all of the other civilians are going, I think. My partner said it’s the safest place to be in the city to catch some rest before moving on to get out.", "FamilyBranch1A1Response");
	familyBranch1A2Response = new DialogueLine("Oh, don't worry about them, I'm know that they'll be fine. Even with all this... mayhem.", "FamilyBranch1A2Response");
	familyBranch2A1Response = new DialogueLine("Honestly, it was a slow progress. There has been a recession for the past few years. It started with droughts, which turned into a famine. The governement declared a state of emergency and just kept extending the \"emergency\".", "FamilyBranch2A1Response");

	// Fourth Level Choices
	familyBranch1AA = new DialogueLine("I know now is probably not the best\ntime to ask, but what caused all of this?", "FamilyBranch1AA");
	familyBranch2A1A = new DialogueLine("People didn’t take it well, I'm guessing?", "FamilyBranch2A1A");
	// Fourth Level Responses
	familyBranch2A1AResponse = new DialogueLine("Yes, they began protesting... and the government didn’t like it and used force. We could place our trust in the militia but we don’t know who they are... Anyway, we’ve told you enough. Please leave us be now. Our chatting may attract someone.", "FamilyBranchResponse2A1A");

	// Building Branches: First Level
	familyRootFirst.AddChild(familyBranch1);
	familyRootFirst.AddChild(familyBranch2);
	familyBranch1.AddChild(familyBranch1Response);
	familyBranch2.AddChild(familyBranch2Response);
	// Second Level
	familyBranch2Response.AddChild(familyBranch2A);
	familyBranch2Response.AddChild(familyBranch1D);
	familyBranch2A.AddChild(familyBranch2AResponse);
	familyBranch1Response.AddChild(familyBranch1A);
	familyBranch1Response.AddChild(familyBranch1B);
	familyBranch1Response.AddChild(familyBranch1C);
	familyBranch1Response.AddChild(familyBranch1D);
	familyBranch1A.AddChild(familyBranch1AResponse);
	familyBranch1B.AddChild(familyBranch1BCResponse);
	familyBranch1C.AddChild(familyBranch1BCResponse);
	// Third Level
	familyBranch2AResponse.AddChild(familyBranch2A1);
	familyBranch2AResponse.AddChild(familyBranch1D);
	familyBranch2A1.AddChild(familyBranch2A1Response);
	familyBranch1BCResponse.AddChild(familyBranch1A);
	familyBranch1BCResponse.AddChild(familyBranch1D);
	familyBranch1AResponse.AddChild(familyBranch1A1);
	familyBranch1AResponse.AddChild(familyBranch1A2);
	familyBranch1AResponse.AddChild(familyBranch1D);
	familyBranch1A1.AddChild(familyBranch1A1Response);
	familyBranch1A2.AddChild(familyBranch1A2Response);
	// Fourth Level
	familyBranch2A1Response.AddChild(familyBranch2A1A);
	familyBranch2A1Response.AddChild(familyBranch1D);
	familyBranch2A1A.AddChild(familyBranch2A1AResponse);
	familyBranch1A1Response.AddChild(familyBranch1AA);
	familyBranch1A1Response.AddChild(familyBranch1D);
	familyBranch1A2Response.AddChild(familyBranch1AA);
	familyBranch1A2Response.AddChild(familyBranch1D);
	familyBranch1AA.AddChild(familyBranch2Response);
	familyBranch2A1AResponse.AddChild(familyBranch1D);

	// Remove chips or yoyo or gameboy from inventory
	AddWhenReachedFunction("FamilyBranch1B", RemoveItemFood);  // remove doritos1, doritos2, lays
	AddWhenReachedFunction("FamilyBranch1C", RemoveItemToy);  // remove Gameboy or yoyo
	
	DialogueRoots.Add(familyRootFirst);
}

// Second Family Encounter
private function FamilySecondEncounter() {
	// Initialize
	var familyRootSecond:DialogueLine;
	var familySecondBranch1:DialogueLine;

	// The unique ID: FamilySecondEncounter
	familyRootSecond = new DialogueLine("Please keep quiet, our talking may attract someone...", "FamilySecondEncounter", true, null, null);
	familySecondBranch1 = new DialogueLine("[Leave]", "FamilyBranch1");
	
	familyRootSecond.AddChild(familySecondBranch1);
	DialogueRoots.Add(familyRootSecond);
}

// Child Encounter
private function ChildEncounter() {
	// Initialize
	var childRoot:DialogueLine;
	var childChoice:DialogueLine;

	// The unique ID: ChildEncounter
	childRoot = new DialogueLine("You should talk to my Mom.", "ChildEncounter", true, null, null);
	childChoice = new DialogueLine("[Leave]", "ChildChoice");
	
	childRoot.AddChild(childChoice);
	DialogueRoots.Add(childRoot);
}

// First conversation with pilot
private function PilotFirstEncounter() {
	// Initialize
	var pilotRoot:DialogueLine;
	var pilotBranch1:DialogueLine;
	var pilotBranch2:DialogueLine;
	var pilotBranch1Response:DialogueLine;
	var pilotBranch2Response:DialogueLine;
	var pilotBranch1A:DialogueLine;
	var pilotBranch1B:DialogueLine;
	var pilotBranch2A:DialogueLine;
	var pilotBranch2B:DialogueLine;
	var pilotBranch1AResponse:DialogueLine;
	var pilotBranch1BResponse:DialogueLine;
	var pilotBranch2AResponse:DialogueLine;
	var pilotBranch2BResponse:DialogueLine;
	var pilotBranch1A1:DialogueLine;
	var pilotBranch1A2:DialogueLine;
	var pilotBranch1B1:DialogueLine;
	var pilotBranch1A1Response:DialogueLine;
	var pilotBranch1A2Response:DialogueLine;
	var pilotBranch1A2A:DialogueLine;
	var pilotBranch1A2B:DialogueLine;
	var pilotBranch1A2AResponse:DialogueLine;
	var pilotBranch1A2A1:DialogueLine;

	// The unique ID: PilotFirstEncounter
	pilotRoot = new DialogueLine("Stay back! It’s not safe! There’s a sniper up above on the building to my right.", "PilotFirstEncounter", true, null, null);
	// First Choices
	pilotBranch1 = new DialogueLine("What!? Why!? Why did they shoot at you?!", "PilotBranch1");
	pilotBranch2 = new DialogueLine("Really?! I guess can't tell from the dead body in front of me.", "PilotBranch2");
	// First Responses
	pilotBranch1Response = new DialogueLine("Do you have no idea what is going on? They are probably trying to protect their stuff or they're military. There isn't that many options.", "PilotBranch1Response");
	pilotBranch2Response = new DialogueLine("Watch your tone! It could've been you who I was trying to help.", "PilotBranch2Response");

	// Second Choices
	pilotBranch1A = new DialogueLine("Hold on, if they are military and are\ntrying to kill you, who are you?", "PilotBranch1A");
	pilotBranch1B = new DialogueLine("Well, can't you do something!? There are people with guns\nback at the motel and there is no where else to go!", "PilotBranch1B");
	pilotBranch2A = new DialogueLine("Well that worked out nicely didn't it?", "PilotBranch2A");
	pilotBranch2B = new DialogueLine("Sorry, I just have no idea what is going on. It’s bloody\nfrustrating and sometimes my mouth just runs off.", "PilotBranch2B");
	// Second Responses
	pilotBranch1AResponse = new DialogueLine("I'm... unaffiliated. Look, things are complicated, but if you can help me out we can get to the hospital.", "PilotBranch1AResponse");
	pilotBranch1BResponse = new DialogueLine("I need to get up to the roof to take out the sniper, so we can get to the hospital. Unless you are actually armed, in which case you can try to take care of it yourself.", "PilotBranch1BResponse");
	pilotBranch2AResponse = new DialogueLine("Look, you can stand there and be a jerk or you can help me out and we can get to the hospital.", "PilotBranch2AResponse");
	pilotBranch2BResponse = new DialogueLine("I understand. I know what it feels like to be thrown into an unexpected situation. Look, I need to get up to the roof to take out the sniper, so we can get to the hospital. Can you help out?", "PilotBranch2BResponse");
	
	// Third Choices
	pilotBranch1A1 = new DialogueLine("What’s at the hospital?", "PilotBranch1A1");
	pilotBranch1A2 = new DialogueLine("Alright, what do you need me to do?", "PilotBranch1A2");
	pilotBranch1B1 = new DialogueLine("Alright, if you can get me out of here\nI’ll help. What do you need me to do?", "PilotBranch1B1");
	// Third Responses
	pilotBranch1A1Response = new DialogueLine("There's a helicopter there. If we can get access to it, I can fly us out of here.", "PilotBranch1A1Response");
	pilotBranch1A2Response = new DialogueLine("Find something that I can use to scale a wall so I can take this bastard out.", "PilotBranch1A2Response");

	// Fourth Choices
	pilotBranch1A2A = new DialogueLine("Do you think this will work?", "PilotBranch1A2A", false);
	pilotBranch1A2B = new DialogueLine("I'll see what I can find.", "PilotBranch1A2B");
	// Fourth Response
	pilotBranch1A2AResponse = new DialogueLine("Yes! Perfect. I'll be right back.", "PilotBranch1A2AResponse");
	// Fifth Choice
	pilotBranch1A2A1 = new DialogueLine("[Continue]", "PilotBranch1A2A1");

	// Building Branches: First Level
	pilotRoot.AddChild(pilotBranch1);
	pilotRoot.AddChild(pilotBranch2);
	pilotBranch1.AddChild(pilotBranch1Response);
	pilotBranch2.AddChild(pilotBranch2Response);
	// Second Level
	pilotBranch1Response.AddChild(pilotBranch1A);
	pilotBranch1Response.AddChild(pilotBranch1B);
	pilotBranch2Response.AddChild(pilotBranch2A);
	pilotBranch2Response.AddChild(pilotBranch2B);
	pilotBranch1A.AddChild(pilotBranch1AResponse);
	pilotBranch1B.AddChild(pilotBranch1BResponse);
	pilotBranch2A.AddChild(pilotBranch2AResponse);
	pilotBranch2B.AddChild(pilotBranch2BResponse);
	// Third Level
	pilotBranch1AResponse.AddChild(pilotBranch1A1);
	pilotBranch1AResponse.AddChild(pilotBranch1A2);
	pilotBranch1BResponse.AddChild(pilotBranch1A1);
	pilotBranch1BResponse.AddChild(pilotBranch1A2);
	pilotBranch2AResponse.AddChild(pilotBranch1A1);
	pilotBranch2AResponse.AddChild(pilotBranch1A2);
	pilotBranch2BResponse.AddChild(pilotBranch1A1);
	pilotBranch2BResponse.AddChild(pilotBranch1A2);
	pilotBranch1A1.AddChild(pilotBranch1A1Response);
	pilotBranch1A2.AddChild(pilotBranch1A2Response);
	// Fourth Level
	pilotBranch1A1Response.AddChild(pilotBranch1B1);
	pilotBranch1A2Response.AddChild(pilotBranch1A2A);
	pilotBranch1A2Response.AddChild(pilotBranch1A2B);
	pilotBranch1B1.AddChild(pilotBranch1A2Response);
	pilotBranch1A2A.AddChild(pilotBranch1A2AResponse);
	pilotBranch1A2AResponse.AddChild(pilotBranch1A2A1);

	// remove Ladder/rope from inventory
	AddWhenReachedFunction("PilotBranch1A2A", RemoveItemLadderRope);


	// End of game
	AddWhenReachedFunction("PilotBranch1A2A1", EndGamePilot);

	DialogueRoots.Add(pilotRoot);
}

// Second conversation with pilot
private function PilotSecondEncounter() {
	// Initialize
	var pilotRootSecond:DialogueLine;
	var pilotBranchSecond1:DialogueLine;
	var pilotBranchSecond2:DialogueLine;
	var pilotBranchSecond1Response:DialogueLine;
	var pilotBranchSecond2Response:DialogueLine;
	var pilotBranchSecondA:DialogueLine;
	var pilotBranchSecondB:DialogueLine;
	
	// The unique ID: PilotSecondEncounter
	pilotRootSecond = new DialogueLine("Did you find something I could scale the wall with?", "PilotSecondEncounter", true, null, null);
	// First Choices
	pilotBranchSecond1 = new DialogueLine("Sorry not yet, I’m still looking.", "PilotBranchSecond1");
	pilotBranchSecond2 = new DialogueLine("Yeah, do you think this will work?", "PilotBranchSecond2", false);
	// First Responses
	pilotBranchSecond1Response = new DialogueLine("Hurry please, the longer we stay here the more dangerous it becomes.", "PilotBranchSecond1Response");
	pilotBranchSecond2Response = new DialogueLine("Yeah, hand it over! Wait there while I take care of our little problem.", "PilotBranchSecond2Response");
	// Second Choices
	pilotBranchSecondA = new DialogueLine("[Continue]", "PilotBranchSecondA");
	pilotBranchSecondB = new DialogueLine("[Leave]", "PilotBranchSecondB");
	// Building Branches
	pilotRootSecond.AddChild(pilotBranchSecond1);
	pilotRootSecond.AddChild(pilotBranchSecond2);
	pilotBranchSecond1.AddChild(pilotBranchSecond1Response);
	pilotBranchSecond2.AddChild(pilotBranchSecond2Response);
	pilotBranchSecond1Response.AddChild(pilotBranchSecondB);
	pilotBranchSecond2Response.AddChild(pilotBranchSecondA);

// remove Ladder/rope from inventory
	AddWhenReachedFunction("PilotBranchSecond2", RemoveItemLadderRope);

	// End of game
	AddWhenReachedFunction("PilotBranchSecondA", EndGamePilot);
	
	DialogueRoots.Add(pilotRootSecond);
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
	// Reset met toggles
	if(instanceEscapeeStartDialogue)
		instanceEscapeeStartDialogue.resetToZero();
	if(instanceFamilyStartDialogue)
		instanceFamilyStartDialogue.resetToZero();
	if(instancePilotStartDialogue)
		instancePilotStartDialogue.resetToZero();
	if(instanceHidingPersonStartDialogue)
		instanceHidingPersonStartDialogue.resetToZero();

	//Calling the Add function in the deathCounter script
	deathCounter.Add(1);
	//Calling the setEndGame function in the screen Script
	screen.setEndGame();
}

/**
* The death script for two people
*/
public function deathTwo(){
	// Reset met toggles
	if(instanceEscapeeStartDialogue)
		instanceEscapeeStartDialogue.resetToZero();
	if(instanceFamilyStartDialogue)
		instanceFamilyStartDialogue.resetToZero();
	if(instancePilotStartDialogue)
		instancePilotStartDialogue.resetToZero();
	if(instanceHidingPersonStartDialogue)
		instanceHidingPersonStartDialogue.resetToZero();

	//Calling the Add function in the deathCounter script
	deathCounter.Add(2);
	//Calling the setEndGame function in the screen Script
	screen.setEndGame();
}

/*
 * Transition to alley script
 */
function AlleyGo() {
	screen.setScene(4);
	screen.setEndGame();
}

/*
 * End game script
 */
function EndGamePilot() {
	//screen.setScene(5);
	//screen.setEndGame();
	
	//Destroy the sniper collision and sniper to allow player to go through
	var sniperCollision = GameObject.Find("SniperCollision");
	var sniper = GameObject.Find("sniper");
	var militia = GameObject.Find("MilitiaMember");
	
	Destroy(sniperCollision);
	Destroy(sniper);
	Destroy(militia);
}

/*
 * Remove First Aid Kit from inventory
 */
function RemoveItemFirstAid() {
	var con1 = inv.Contents;
	var newContents1 = new Array(con1);
	for(var i:Transform in newContents1){ //Loop through the Items in the Inventory:
		if(i.name == "FirstAidKit") //When a match is found, get the transform
		{
			//Removing from inventory
			inv.RemoveItem(i);	
		
		}
	}
}

/*
 * Remove food from inventory
 */
function RemoveItemFood() {
	if (dynamic.checkExist("lays")) {
		// remove lays
		var con2 = inv.Contents;
		var newContents2 = new Array(con2);
		for(var i:Transform in newContents2){ //Loop through the Items in the Inventory:
			if(i.name == "lays") //When a match is found, get the transform
			{
				//Removing from inventory
				inv.RemoveItem(i);		
			}
		}
	}
	else if (dynamic.checkExist("doritos1")) {
		// remove doritos1
		var con3 = inv.Contents;
		var newContents3 = new Array(con3);
		for(var i:Transform in newContents3){ //Loop through the Items in the Inventory:
			if(i.name == "doritos1") //When a match is found, get the transform
			{
				//Removing from inventory
				inv.RemoveItem(i);		
			}
		}
	}
	else if (dynamic.checkExist("doritos2")) {
		// remove doritos2
		var con4 = inv.Contents;
		var newContents4 = new Array(con4);
		for(var i:Transform in newContents4){ //Loop through the Items in the Inventory:
			if(i.name == "doritos2") //When a match is found, get the transform
			{
				//Removing from inventory
				inv.RemoveItem(i);		
			}
		}
	}
}

/*
 * Remove toy from inventory
 */
function RemoveItemToy() {
	if (dynamic.checkExist("Gameboy")) {
		// remove Gameboy
		var con5 = inv.Contents;
		var newContents5 = new Array(con5);
		for(var i:Transform in newContents5){ //Loop through the Items in the Inventory:
			if(i.name == "Gameboy") //When a match is found, get the transform
			{
				//Removing from inventory
				inv.RemoveItem(i);		
			}
		}
	}
	else if (dynamic.checkExist("yoyo")) {
		// remove yoyo
		var con3 = inv.Contents;
		var newContents3 = new Array(con3);
		for(var i:Transform in newContents3){ //Loop through the Items in the Inventory:
			if(i.name == "yoyo") //When a match is found, get the transform
			{
				//Removing from inventory
				inv.RemoveItem(i);		
			}
		}
	}
}


/*
 * Remove rope/ladder from inventory
 */
function RemoveItemLadderRope() {
	if (dynamic.checkExist("Ladder")) {
		// remove Gameboy
		var con5 = inv.Contents;
		var newContents5 = new Array(con5);
		for(var i:Transform in newContents5){ //Loop through the Items in the Inventory:
			if(i.name == "Ladder") //When a match is found, get the transform
			{
				//Removing from inventory
				inv.RemoveItem(i);		
			}
		}
	}
	else if (dynamic.checkExist("Rope")) {
		// remove yoyo
		var con3 = inv.Contents;
		var newContents3 = new Array(con3);
		for(var i:Transform in newContents3){ //Loop through the Items in the Inventory:
			if(i.name == "Rope") //When a match is found, get the transform
			{
				//Removing from inventory
				inv.RemoveItem(i);		
			}
		}
	}
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