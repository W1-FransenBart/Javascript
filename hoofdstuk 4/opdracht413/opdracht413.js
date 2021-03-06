//globale variable lijst voor een array met getallen
var lijst = [22,33,9];
/*
*  functie getGetal haalt het getal op in de div met id getal
*  Deze functie heeft geen parameters
*  @return een geheel getal 
*/
function getGetal() {
		return parseInt($('#getal').val());
}

/*
*  De functie add() voegt het ingevulde getal in de de div met id= 'getal' toe aan de globale variabele lijst
*  Als de ingevulde wwaarde geen getal is dan gebeurt er niets.
*  Als het wel een getal is dan wordt het getal toegevoegd aan de variabele lijst en wordt de lijst geprint
*  in de span met id='lijst' 
*  geen parameters
*  geen return waardes
*/
function add() {
	getal = getGetal();
	if (isNaN(getal)) {
		return;
	}
	else {			
		lijst.push(getal);
		printLijst();
	}
}
/* de functie printLijst() print alle getallen uit de variabele lijst in de div met id=lijst
*  geen parameters
*  geen return waardes
*/
function printLijst() {
	var strLijst = '', del='';
	
	for (var i=0; i<lijst.length; i++) {
		strLijst =  strLijst + del + lijst[i];
        del = ',';		
	}
	
	printInHtml( 'lijst', strLijst );
}

/* De functie printInHtml print een tekst in de html tag met id=plek
*  @param1 plek is een string met de id van de html waar de tekst moet worden toegevoegd
*  @param2 tekst is een string die wordt gezet in de html tag met id=tekst
*/ 
function printInHtml(plek, tekst) {
	$('#'+plek).html(tekst);
}


function countLijst() {
    var kappa = lijst.length;
    document.getElementById('resultaat').innerHTML = kappa;
}

function deleteFirst() {
    lijst.shift();
}

function deleteLast() {
    lijst.pop();
}

function sum() {
    var totaal = 0;
    for (i = 0; i < lijst.length; i++)
    {
        totaal += lijst[i];
    }
    document.getElementById('resultaat').innerHTML = totaal;
}

function average() {
    var totaal = 0;
    for (i = 0; i < lijst.length; i++)
    {
        totaal += lijst[i];
    }
    var kappa = lijst.length;
    var gemiddeld = totaal / kappa;
    document.getElementById('resultaat').innerHTML = Math.round(gemiddeld);
}

$(document).ready(function() {
	printLijst();
});

