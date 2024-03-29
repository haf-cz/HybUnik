function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function isNullOrEmpty(item)
{
	return item != null && item != '';
}

/*************   SPRAVNE hodnoty pro pruchod ****************************/
var correct = {
	TicketNumber : "0573",
	Date : "22.09.2019",
	Time : "21:11"
};

function isCorrect(ticket)
{
	return correct.TicketNumber == ticket.Number &&
		correct.Date == ticket.Date &&
		correct.Time == ticket.Time
}

function isTimeValid(time)
{
	var pattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/i;
	if(pattern.test(time))
	{
		return true;
	}
	return false;
}

// load of main.html
function onLoad() {
	var ticketNumber = document.getElementById('ticketNumber');
	var ticketDate = document.getElementById('ticketDate');
	var ticketTime = document.getElementById('ticketTime');
	var btnSend = document.getElementById('btnSend');
	
	var sectionTicketNum = document.getElementById('ticketNumSection');
	var sectionTicketDate = document.getElementById('dateSection');
	var sectionTicketTime = document.getElementById('timeSection');
	var sectionBtn = document.getElementById('btnSection');

	ticketNumber.onkeyup = function(){
		if(ticketNumber.value == correct.TicketNumber)
		{
			sectionTicketDate.className = "visible";
			sectionTicketNum.className = "hidden";
		}
		else
		{
			sectionTicketDate.className = "hidden";
		}
	}
	
	ticketDate.onkeyup = function(){
		
		if(ticketDate.value == correct.Date)
		{
			sectionTicketTime.className = "visible";
		}
		else
		{
			sectionTicketTime.className = "hidden";
		}
	}
	
	ticketTime.onkeyup = function(){
		if(isTimeValid(ticketTime.value))
		{
			sectionBtn.className = "visible";
		}
		else
		{
			sectionBtn.className = "hidden";
		}
	}
	
}

// load of last.html
function onLoadLast() {

	var ticket = {
		Number : getParameterByName('ticketNumber'),
		Date : getParameterByName('ticketDate'),
		Time : getParameterByName('ticketTime')
	}
	var recap = document.getElementById("recap");
	
	if(isNullOrEmpty(ticket.Date))
	{
		recap.className = "visible";
		
		if(isNullOrEmpty(ticket.Number))
		{
			if(isNullOrEmpty(ticket.Time))
			{
				/************ MAME VSECHNY tri hodnoty vyplnene (to jen kdyby nekdo podvadel...  **********/
				recap.innerHTML = "Nove datum Vasi rezervace " + ticket.Number + " je " + ticket.Date + " v " + ticket.Time;
				if(isCorrect(ticket))
				{
					/******* TADY vime, ze je vse vporadku *****/
					recap.innerHTML = ""; // jestli teda vubec bude potreba...
					document.body.className = "OK";
					// notify the server...
					httpGetAsync("https://localhost:5001/api/result?status=OK",
						function(msg) {
							recap.innerHTML = "OK we got:" + msg + ".";
						});
				}
				else
				{
					/******* TADY vime, ze maji neco spatne *****/
					recap.innerHTML += " Jeste neni spravny cas...";
					// notify the server...
					httpGetAsync("https://localhost:5001/api/result?status=NOK",
						function(msg) {
							recap.innerHTML += "NOK we got:" + msg + ".";
						});
				}
			}
			else
			{
				recap.innerHTML = "Nove datum Vasi rezervace " + ticket.Number + " je " + ticket.Date;
			}
		}
		else
		{
			recap.innerHTML = "Nove datum Vasi rezervace je " + ticket.Date;
		}
	}
	else
	{
		recap.innerHTML = 'Neplatna rezervace...';
	}
}

/*******************************/
function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}