#pragma strict

class LampSwitchClickAction extends OnClickAction {
	var lampLight : GameObject;
	var lampShade : GameObject;
	
	function Run() {
		lampLight.SetActive(!lampLight.activeSelf);
		if(lampLight.activeSelf)
			lampShade.renderer.material.shader = Shader.Find("VertexLit");
		else
			lampShade.renderer.material.shader = Shader.Find("Diffuse");
	}
}