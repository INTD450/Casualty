// Adapted from code from http://forum.unity3d.com/threads/16949-WOW-Camera-Movement/page4?highlight=wow+camera

// Movement Variables:

var jumpSpeed:float = 9.0; 
var gravity:float = 20.0; 
var runSpeed:float = 5.0; 
var walkSpeed:float = 1.7; 
var rotateSpeed:float = 150.0; 
var grounded:boolean = false; 

private var moveDirection:Vector3 = Vector3.zero; 
private var isWalking:boolean = true; 
private var moveStatus:String = "stand"; 
private var xSpeed = 250.0; 
private var ySpeed = 120.0; 
private var yMinLimit = -40; 
private var yMaxLimit = 80; 
private var x = 0.0; 
private var y = 0.0; 
 
// Script Variables

private var anim;
private var runButton = KeyCode.LeftShift;

function Awake(){

    // Load Script Variables:
    anim = GetComponent (Animations);
}

function Update () {
	// Toggle walking/running with the shift key 
  
    
    if(Input.GetKey("left shift")){
        isWalking = false; 
       
    }
    else{
    	isWalking = true;
    	
   	}

   // Only allow movement and jumps while -----------------  GROUNDED -------------

   if(grounded) { 

        moveDirection = new Vector3((Input.GetMouseButton(1) ? Input.GetAxis("Horizontal") : 0),0,Input.GetAxis("Vertical")); 
           
        // if moving forward and to the side at the same time, compensate for distance 

        // TODO: may be better way to do this? 
        if(Input.GetMouseButton(1) && Input.GetAxis("Horizontal") && Input.GetAxis("Vertical")) { 
            moveDirection *= .7; 
        } 

        moveDirection = transform.TransformDirection(moveDirection); 
        moveDirection *= isWalking ? walkSpeed : runSpeed; 
        moveStatus = "stand"; 

        if(moveDirection != Vector3.zero) {
            moveStatus = isWalking ? "walk" : "run"; 

            if (isWalking){
                anim.Walk();
            } else {
                anim.Run();
            }

        } else {
            anim.Idle();
        }

        // Jump disabled

        //if(Input.GetButton("Jump")){
          //  anim.Jump();
            //moveDirection.y = jumpSpeed; 
        //}

    }


    // Allow turning at anytime. Keep the character facing in the same direction as the Camera if the right mouse button is down. 
    if(Input.GetMouseButton(1)) { 
        transform.rotation = Quaternion.Euler(0,Camera.main.transform.eulerAngles.y,0); 
    } else { 
        transform.Rotate(0,Input.GetAxis("Horizontal") * rotateSpeed * Time.deltaTime, 0); 
    } 

    

        

    //Apply gravity 
    moveDirection.y -= gravity * Time.deltaTime; 

    //Move controller 
    var controller:CharacterController = GetComponent(CharacterController); 
    var flags = controller.Move(moveDirection * Time.deltaTime); 

    grounded = (flags & CollisionFlags.Below) != 0; 

    };

static function ClampAngle (angle : float, min : float, max : float) { 

   if (angle < -360) 
      angle += 360; 

   if (angle > 360) 
      angle -= 360; 

   return Mathf.Clamp (angle, min, max); 

} 

@script RequireComponent(CharacterController)