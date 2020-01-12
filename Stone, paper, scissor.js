const getuserchoice = userinput =>{
	userinput = userinput.toLowerCase();

	if (userinput === 'stone' || userinput === 'paper' || userinput === 'scissor') {
		return userinput;
	}else{
		document.write("Error!");
	}
}

const getcompchoice = () => {
	var no = Math.floor(Math.random()*3);
	switch (no){
		case 1:
		return 'stone';
		break;

		case 2:
		return 'paper';
		break;

		case 0:
		return 'scissor';
		break ;
	}
}

const result = (userchoice, compchoice) =>{      		
	if (userchoice === compchoice) {
		return 'TIE!';	 
	}
	else if (userchoice === 'stone') {
		if (compchoice === 'paper') {
			return 'LOST!'; 
		}else if (compchoice === 'scissor') {
			return 'WON!';
		}
	}
	else if (userchoice === 'paper') {
		if (compchoice === 'stone') {
			return 'WON!';
		}else if (compchoice === 'scissor') {
			return 'LOST!';
		}
	}
	else if (userchoice === 'scissor') {
		if (compchoice === 'paper') {
			return 'WON!';
		}else if (compchoice === 'stone') {
			return 'LOST!';
		}
	}
}

const playgame = () =>{
	userchoice = getuserchoice (prompt("Choose Stone, Paper or scissor"));
	compchoice = getcompchoice();

	document.write('User threw '+ userchoice+'.');
	document.write('<br>');
	document.write('Computer threw '+ compchoice+ '.');
	document.write('<br><br>');

	document.write('RESULT: ' + result(userchoice, compchoice));
}

playgame();