//flag 0 neutral
//flag 1 game started
//flag 2 lost
//flag 3 won



window.onload = function(){
	$("start").observe("mouseover",startGame);

	$("start").observe("click",reloadGame);

	$("mybody").observe("mouseover",showCoords);

};

function startGame()
{
	flag = 1;
	$("end").observe("mouseover",declareWinner);

	//event listener code for walls that turn red
	var blocks = document.getElementsByClassName("boundary");
	for(var i=0; i < blocks.length; i++)
	{
		blocks[i].observe("mouseover", action);
	}

	setTimeout(check,7000);
}

function reloadGame()
{
	location.reload();
}

function declareWinner()
{
	//an event handler function ...
	if(flag==1)
	{ //wall not touched  or already won the game
		var paragraph = document.getElementById("status");
		paragraph.innerHTML = "You win!";
		flag = 3;
	}
	else
	{
		declareLooser();
	}
}

function declareLooser()
{
	//an event handler function ...
	var paragraph = document.getElementById("status");
	paragraph.innerHTML = "Sorry, you lost. :[";
	flag = 2;
}

function action()
{
	//local variable blocks
	if(flag == 1 || flag == 2) //game started but touched the wall or game lost due to time
	{
		var blocks = document.getElementsByClassName("boundary");

		for(var i=0; i < blocks.length; i++)
		{
			blocks[i].observe("mouseover", blocks[i].style.backgroundColor = "red");
		}

		declareLooser();
	}
}

function check(){
	if(flag !=2 && flag==1){ //game started and has not won
		declareLooser(); //declare looser
		action(); //turn all walls red
	}
}

function showCoords(){
	//clientX, clientY = coordinates in browser window
	//screenX, screenY = coordinates in screen

  /*$("luck").innerHTML = "pointer: (" + event.pointerX() + ", "+ event.pointerY()
  					  + "screen: (" + event.screenX + ", " + event.screenY + ") \n"
  					  + "client: (" + event.clientX + ", " + event.clientY + ")";
  */

    var mouseXPosition = event.pointerX();
	var cheating = document.getElementById("maze");

	//$("gstatus").innerHTML = cheating.offsetLeft;
	var cheatingValue = cheating.offsetLeft;
	

    if( (flag == 1)  && (mouseXPosition < cheatingValue)  ){
       	check();
    }
  					  
  
}


