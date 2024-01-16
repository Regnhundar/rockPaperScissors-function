// Uppgift: Gör om ditt sten, sax och påse - spel så du använder funktioner och försöker återanvända kod.

//Deklarerade utanför funktioner för att inte få problem med "scope". Går att lösa med "Destructuring Assignment" enligt chatGPT.
let playerScore = 0;
let computerScore = 0;

// Ovanstående deklarationer måste stå innan man kallar på funktionen om man inte gjort en destructuring assignment. Error annars.
inputs();

// Kontrollerar att spelares val existerar i validInputs. Genererar fram datorns val genom att slumpa validInputs via index.
// Skickar sedan spelarval och datorval till funktionen chooseWinner.
function inputs() {
    let playerChoice = window.prompt(`Välj antingen sten, sax eller påse`).toLowerCase();
    let validInputs = [`sten`, `sax`, `påse`];
    let computerChoice = validInputs[Math.floor(Math.random() * 3)];

    if (!validInputs.includes(playerChoice)) {
        window.alert(`${playerChoice} är inte en godkänd input.`);
        inputs(); // Om vi inte anropar funktionen igen så stoppar spelet.
    }
    else {
        chooseWinner(playerChoice, computerChoice); // Vi skickar variabeln playerChoice och computerChoice när vi anropar nästa funktion.
    }
}

// Tar emot spelarval och datorval för att avgöra vinnare. Vi sparar dem i parametrarna spelarVal och datorVal. Uppdaterar poängen som är deklarerade utanför funktionerna.
// Efter varje omgång skickas poängen till pointsTracker-funktionen som undersöker om någon fått 3 poäng.
function chooseWinner(spelarVal, datorVal) {
    // Kollar först alla spelarval som leder till vinst.
    if (spelarVal === `sten` && datorVal === `sax` || spelarVal === `sax` && datorVal === `påse` || spelarVal === `påse` && datorVal === `sten`) {
        playerScore++ // Ökar variabeln playerScore med 1
        window.alert(`Din ${spelarVal} trumfade datorns ${datorVal}!
        Spelare: ${playerScore}
        Datorn: ${computerScore}`);
    }
    // Ifall spelarval är densamma som datornsval går vi tillbaka till funktionen inputs()
    else if (spelarVal === datorVal) { 
        window.alert(`Ni valde båda ${spelarVal} vi kör igen!
        Spelare: ${playerScore}
        Datorn: ${computerScore}`);
        inputs();
        return;     // Utan return; får man ett extra window.alert att klicka bort efter totalvinst för varje omgång som blivit oavgjord. 
                    // Enligt chatGPT skickas ett nullvärde om det inte står med. ¯\_(ツ)_/¯ 
    }
    // Om det inte är oavgjort eller om inte spelare har vunnit så har datorn vunnit. 
    else {
        computerScore++ // Ökar variabeln computerScore med 1
        window.alert(`Datorn vann med sin ${datorVal} mot din ${spelarVal}!
        Spelare: ${playerScore}
        Datorn: ${computerScore}`)
    }
    pointsTracker(); // Vi anropar funktionen pointsTracker för att kolla poängen. Då variablerna playerScore och computerScore har global scope behöver vi inte skicka med något i anropet.
}
// funktionen kollar ifall spelaren eller datorn har 3 poäng. Om inte så anropas inputs() igen.
function pointsTracker() {
    if (playerScore === 3) {
        window.alert(`Grattis du dängde datorn med ${playerScore} poäng mot datorns ${computerScore} poäng`)
    }
    else if (computerScore === 3) {
        window.alert(`Datorn vann med sina ${computerScore} poäng mot dina ${playerScore} poäng`)
    }
    else {
        inputs();
    }
}