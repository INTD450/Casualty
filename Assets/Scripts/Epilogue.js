#pragma strict

private var viewArea:Rect;
private var offset:float;
private var speed:float = 30.0f;
private var showingText:boolean;

var style : GUIStyle;


function Start() {
	var width = 400;
	var height = 300;
	Time.timeScale = 1;
	this.viewArea = new Rect(Screen.width/2 - (width/2), Screen.height/2 - (height/2), width, height);
	this.offset = this.viewArea.height*4;
	
	//Start playing the credits song
	var audioCredits = Instantiate(Resources.Load("Credits", typeof(GameObject))) as GameObject;
	var	audioCredits1 = audioCredits.GetComponent(AudioSource);
	audioCredits1.Play();
	audioCredits.name = "Credits";
}

function ShowText() {
	// Call this to show the text! You might be able to just attach this entire script to whatever
	// is supposed to call it without having to change anything but the text.
	//this.offset = this.viewArea.height*4;
	
}

function Update()
{	

		this.offset -= Time.deltaTime * this.speed;
		

}

function OnGUI(){
	
		var position = new Rect(this.viewArea.x, this.viewArea.y + this.offset, this.viewArea.width, this.viewArea.height);
		// TODO This is where you might want to change the background to black.
		
		// TODO Edit the text here. Note that you can use some markup stuff to make it look nice.
		var text = "<color=white><b><size=24>Casualty</size></b>\n"+
					"\n"+
					"The people are unsure who is to blame for the attacks that lead to thousands of deaths.\n"+
					"The goverment officialy denied involvement in the attacks,\n"+
					"despite the use of military hardware.\n"+
					"Government officials claim it was a well armed militia group that was responsible.\n"+
					"No civilian group has come forward and knonwn government critics all deny that they\n"+
					"would take such extreme measures.\n"+
					"\n"+
					"The only thing that is certain is that those who have passed away\n"+
					"have turned into another statistic, just another casualty in this conflict.\n"+
					"\n"+
					"\n"+
					"\n"+
					"\n"+
					"\n"+
					"\n"+
					"\n"+
					"\n"+
					"<b>Epilogue A Frosted Banana Game</b>\n"+
					"\n"+
					"<b>Producer</b>\n"+
					"Maren Wilson\n"+
					"\n"+
					"<b>Writers</b>\n"+
					"Andrea Budac\n"+
					"Allison Querengesser\n"+
					"\n"+
					"<b>Programmers</b>\n"+
					"Andrea Budac\n"+
					"Kevin Schenk\n"+
					"Zhan Yap\n"+
					"\n"+
					"<b>3D Artist\n</b>"+
					"Jack Wang\n"+
					"\n"+
					"<b>Texture Artist</b>\n"+
					"Andrea Budac\n"+
					"\n"+
					"<b>Sound Design</b>\n"+
					"Maren Wilson\n"+
					"\n"+
					"<b>External Resources</b>\n"+
					"\n"+
					"<b>3D Models from TurboSquid</b>\n"+
					"Propermike\n"+
					"Ezhilarassan\n"+
					"Mookyguy\n"+
					"Jamie Hamel Smith\n"+
					"Packa\n"+
					"<b>Other 3D Models</b>\n"+
					"Nobiax and Yughues - Unity Asset Store\n"+
					"GhostTown Plugin - Kilad.net\n"+
					"\n"+
					"<b>Textures</b>\n"+
					"Bruno Rime - Unity Asset Store\n"+
					"Chris Spooner - Spoongraphics\n"+
					"Wael Labrinssi - Behance\n"+
					"3DExtrude-Tutorials Inc - 3dextrude\n"+
					"\n"+
					"<b>Sound Effects from Freesound.org</b>\n"+
					"CosmicEmbers\n"+
					"Zombiechaser3\n"+
					"Klankbeeld\n"+
					"Mwmarsh\n"+
					"Tmkappelt\n"+
					"Jorickhoofd\n"+
					"Avrahamy\n"+
					"Dasebr\n"+
					"Sandyrb\n"+
					"Kyster\n"+
					"Qubodup\n"+
					"Frankie01234\n"+
					"LeMudCrab\n"+
					"Deathnsorrow\n"+
					"Bennstir\n"+
					"Kd_jack\n"+
					"Bsumusictech\n"+
					"LG\n"+
					"Thecluegeek\n"+
					"MaxDemianAGL\n"+
					"Rjonesxlr8\n"+
					"NLM\n"+
					"Kellyconidi\n"+
					"Michaelkoehler\n"+
					"Smidoid\n"+
					"Snapper4298\n"+
					"Joebro10\n"+
					"\n"+
					"All models made with Autodesk 3ds max\n"+
					"All sounds edited and exported with Audacity\n"+
					"\n"+
					"Click anywhere to return to home\n</color>";

		// This draws the label in the right position.
		GUI.Label(position, text, this.style);
	
}
    