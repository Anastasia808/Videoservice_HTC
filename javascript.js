	if (localStorage.getItem('login') != null) {
		document.getElementById('exit').style.display='block';
		document.getElementById('clientLogin').style.display='block';
		document.getElementById('entry').style.display = 'none';
	} else {
		document.getElementById('exit').style.display='none';
		document.getElementById('clientLogin').style.display='none';
		document.getElementById('entry').style.display = 'block';
	}


	document.getElementById('clientLogin').innerHTML = localStorage.getItem('login');


	function exit() {
		localStorage.removeItem('login');
		localStorage.removeItem('password');

		document.getElementById('exit').style.display='none';
		document.getElementById('clientLogin').style.display='none';
		document.getElementById('entry').style.display = 'block';
	}


function show(state)
	{
	document.getElementById('window').style.display = state;
	document.getElementById('gray').style.display = state;
	}


function reg() {
		var login = document.getElementById('login');
		var password = document.getElementById('password');

    localStorage.setItem('login', login.value);
    localStorage.setItem('password', password.value);
}
