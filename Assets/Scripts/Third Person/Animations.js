// Adapted from code from http://forum.unity3d.com/threads/16949-WOW-Camera-Movement/page4?highlight=wow+camera
// "Animations.js" -- Animation controller script

//

function Start () { 
    animation.wrapMode = WrapMode.Loop; 
    animation.Stop(); 
    Idle();
} 

function Walk() {
    animation.CrossFade("walk", 0.3);
}
 
function Run () { 
      animation.CrossFade("run", 0.3); 
}

function Idle () {
    animation.CrossFade("stand", 0.3);
}