	display = document.getElementById('exit').style.display;

	if (localStorage.getItem('login') != null) {
		document.getElementById('exit').style.display='block';
		document.getElementById('entry').style.display = 'none';
	} else {
		document.getElementById('exit').style.display='none';
		document.getElementById('entry').style.display = 'block';
	}


	function exit() {
		localStorage.removeItem('login');
		localStorage.removeItem('password');

		document.getElementById('exit').style.display='none';
		document.getElementById('entry').style.display = 'block';
	}


function show(state)
	{
	document.getElementById('window').style.display = state;
	document.getElementById('gray').style.display = state;
	}


function store() {
		var login = document.getElementById('login');
		var password = document.getElementById('password');

    localStorage.setItem('login', login.value);
    localStorage.setItem('password', password.value);
}
