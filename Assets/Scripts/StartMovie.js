#pragma strict
public var  style:GUIStyle;
public var buttonStyle:GUIStyle;
public var openingLogo:Texture2D;
public var startTexture:Texture2D;
public var creditsTexture:Texture2D;

private var viewArea:Rect;
private var offset:float;
private var speed:float = 30.0f;
private var showingCredits:boolean;
private var timedLogo:float;
var audioCredits1 : AudioSource;

function Start() {
	var width = 400;
	var height = 300;
	this.timedLogo = 15.0f;
	this.showingCredits = false;
	this.viewArea = new Rect(Screen.width/2 - (width/2), Screen.height/2 - (height/2), width, height);
	
	
}

function ShowCredits() {
	this.offset = this.viewArea.height*4;
	this.showingCredits = true;
	
	//Start playing the credits song
	var audioCredits = Instantiate(Resources.Load("Credits", typeof(GameObject))) as GameObject;
	audioCredits1 = audioCredits.GetComponent(AudioSource);
	audioCredits1.Play();
	audioCredits.name = "Credits";
}

function Update()
{	if(this.timedLogo >= 0)
		this.timedLogo -= Time.deltaTime * 2.0;
	if(this.showingCredits)
		this.offset -= Time.deltaTime * this.speed;
		
	if(Input.GetMouseButtonDown(0)) {
		this.showingCredits = false;
		if(this.timedLogo > 5){
			this.timedLogo = 4;
		}
		//Stop playing music
		Destroy(audioCredits1);
	}
}

function OnGUI(){
	if(this.timedLogo > 0) {
		if(this.timedLogo < 5)
			GUI.color = new Color(1.0, 1.0, 1.0, this.timedLogo / 5);
		GUI.DrawTexture(new Rect(0, 0, Screen.width, Screen.height), openingLogo, ScaleMode.ScaleToFit);
		
	}else if(!this.showingCredits) {
		var width = 150;
		var height = 50;
		GUI.Label(new Rect(Screen.width / 2 - 100,  Screen.height/2 - height*2, 200, height), 
					"<size=48><b><color=white>Casualty</color></b></size>",this.style);
		
		if(GUI.Button(new Rect(Screen.width / 2 - width + width/6, Screen.height/2 - height/2, width, 30), this.startTexture, buttonStyle))
			Application.LoadLevel(1);// load level;
		if(GUI.Button(new Rect(Screen.width / 2 - width/6, Screen.height/2 - height/2, width, 30), this.creditsTexture, buttonStyle))
			ShowCredits();
			
	} else {	
		var position = new Rect(this.viewArea.x, this.viewArea.y + this.offset, this.viewArea.width, this.viewArea.height);
		var text = "<color=white><b><size=24>Casualty</size></b>\n"+
					"<b>A Frosted Banana Game</b>\n"+
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

		GUI.Label(position, text, this.style);
	}
}
    