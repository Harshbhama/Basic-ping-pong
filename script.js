console.log('script loaded');

var ball = document.querySelector("#ball-style");


var t = document.querySelector('#bar-style-1');
	var t1 = t.getBoundingClientRect();

var a = document.querySelector('#bar-style-2');
	var a1 = a.getBoundingClientRect();

	window.addEventListener("keypress",function(event){

			console.log(event.key);

			if(event.key=='d'){

				t1.x +=10;

				t.style.left =t1.x;
				a1.x +=10;

				a.style.left =t1.x;
			}

			if(event.key=='a'){

				t1.x -=10;

				t.style.left =t1.x;
				a1.x -=10;

				a.style.left =t1.x;

			}



	});


var k = ball.addEventListener("click",function(){


	var left =0;
	var bottom= 0;
	var right =1;
	var q = setInterval(function(){

	



	var z = ball.getBoundingClientRect();

	let movX = z.x;
	let movY = z.y;
	let movU = z.y;

	
	// if(z.y == 0){
	// 	bottom = 0;
	// }
	if(z.x == 0){
		left =0;
	}

	if(left==0 )
	{
	movX += 1;
	}
	
	if(bottom==0  )
	{
	movY += 1;
	}

	var l=1;
	
	// if( (z.y+z.height) == window.innerHeight || bottom==1)
	// {
	// movY += -1;
	// bottom =1;
	// }
	
	if( (z.x+z.width )== window.innerWidth || left==1 )
	{
	movX += -1;
	left = 1;

	}

	if(z.x>=a1.x && z.x<=a1.x+a1.width && z.y+z.width==a1.y ||bottom==1){
		movY +=-1;
		bottom =1;

	}

	if(z.x>=t1.x && z.x<=t1.x+t1.width && z.y==t1.y){
		bottom =0;


	}

	// if( (z.y) > window.innerHeight ){
	// 	window.alert("Game over");
	// }
	// if(z.y <-3){
	// 	window.alert("Game over");
	// }




	ball.style.left = movX;
	ball.style.top = movY;
	// ball.style.bottom = movU;

	},6)
	



});