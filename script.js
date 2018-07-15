
//Please check all the comments...

console.log('script loaded');

// Var ball is created that stores id of ball-style
var ball = document.querySelector("#ball-style");

//var t stores the id of upper bar
var t = document.querySelector('#bar-style-1');
//var t1 gets the x and y coordinate values of the upper bar
var t1 = t.getBoundingClientRect();

//var a stores the id of upper bar
var a = document.querySelector('#bar-style-2');

//var a1 gets the x and y coordinate values of the upper bar
var a1 = a.getBoundingClientRect();


	// action event listner is used for the keypress of keyboard
	window.addEventListener("keypress",function(event){

			console.log(event.key);
			//if key=d
			if(event.key=='d'){

				t1.x +=20;

				//It will move upper bar to the right side for key d by increamenting X coording by 20
				t.style.left =t1.x;
				
				a1.x +=20;

				//It will move lower bar to the right side for key d by increamenting X coording by 20
				a.style.left =t1.x;
			}

			if(event.key=='a'){

				t1.x -=20;

				//It will move upper bar to the left side for key a by decreamenting X coording by 20
				t.style.left =t1.x;
				
				a1.x -=20;

				//It will move lower bar to the left side for key a by decreamenting X coording by 20
				a.style.left =t1.x;

			}



	});



//this function is called when we click on the ball
var k = ball.addEventListener("click",function(){


	//Here we have used some variables 
	var left =0;
	var bottom= 0;
	var right =1;

	//This function is used to modify the speed of ball
	var q = setInterval(function(){

	


	//through var z we get the x and y coordinates of the ball
	var z = ball.getBoundingClientRect();

	//here we store x and y coordinates in variable movX and movY
	let movX = z.x;
	let movY = z.y;
	

	
	//since left =0 is declared above,this condition will make ball go into right direction since movX+=1
	if(left==0 ) //condition :1
	{
	movX += 1;
	}
	

	//since bottom =0 is declared above,this condition will make ball go into down direction since movY+=1
	if(bottom==0  ) //condition :2
	{
	movY += 1;
	}
	//Both this condition will make horizontal motion for ball


	
	
	
	//this condiotn checks if the ball touches the bar i.e if the x and y coordinate of bar equals to the coordinates of lower bar
	//condition :3
	if(z.x>=a1.x && z.x<=a1.x+a1.width && z.y+z.width==a1.y  ||bottom==1) {
		movY +=-1;
		//When this condition executes it sets bottom =1 , then this condition executes till bottom=1 as 
		//performed in the above if condtion
		//bottom =1 makes ball goes in upward direction
		//left =0 is still executing that makes ball go into right direction.
		bottom =1;

		//condion 3 and condition 1 are executing

	}
	//condition :4
	if( (z.x+z.width )== window.innerWidth || left==1 )
	{
	movX += -1;
	left = 1;

		//here if the ball goes collide the right edge of the screen it makes left =1 and then the
		//if condition of left=1 that is declared above executes...that moves ball in left direcction.
		//bottom = 1 still executing


		//condition 3 and condition 4 are executing 

	}
	//condition :5
	if(z.x>=t1.x && z.x<=t1.x+t1.width && z.y==t1.y){
		bottom =0;
		//This consdion checks for the ball if it touches the upper bar..then bottom =0
		//bottom =0 exectues ball in upward direction
		//left=1 still executing that makes ball move in left direction

		//condition 2 and condition 4 are executing

	}
	

	


	if(z.x == 0){
		left =0;
		//this condition checks for the ball if it collides with the left edge of the screen
	}

	



	//From all the above conditions the movX and movY values perform these operations
	ball.style.left = movX;
	ball.style.top = movY;


	},3)
	



});