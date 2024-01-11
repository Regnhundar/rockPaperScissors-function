// Uppgift: Gör om ditt sten, sax och påse - spel så du använder funktioner och försöker återanvända kod.

//Deklarerade utanför funktioner för att inte få problem med "scope". Går att lösa med "Destructuring Assignment" men känns överkurs nu.
let playerScore = 0;
let computerScore = 0;

// Ovanstående deklarationer måste stå innan man kallar på funktionen om man inte gjort en destructuring assignment. Error annars.
inputs();

//Kontrollerar att spelares val existerar i validInputs. Genererar fram datorns val genom att slumpa validInputs via index.
//Skickar sedan spelarval och datorval till funktionen chooseWinner.
function inputs() {
    let playerChoice = window.prompt(`Välj antingen sten, sax eller påse`).toLowerCase();
    let validInputs = [`sten`, `sax`, `påse`];
    let computerChoice = validInputs[Math.floor(Math.random() * 3)];

    if (!validInputs.includes(playerChoice)) {
        window.alert(`${playerChoice} är inte en godkänd input.`);
    }
    else {
        chooseWinner(playerChoice, computerChoice);
    }
}

// Tar emot spelarval och datorval för att avgöra vinnare. Uppdaterar poängen som är deklarerade utanför funktionerna.
// Efter varje omgång skickas poängen till pointsTracker-funktionen som undersöker om någon fått 3 poäng.
function chooseWinner(playerChoice, computerChoice) {
    if (playerChoice === `sten` && computerChoice === `sax`) {
        playerScore++
        window.alert(`Din ${playerChoice} bankade skiten ur ${computerChoice}!
        Spelare: ${playerScore}
        Datorn: ${computerScore}`);
    }
    else if (playerChoice === `sax` && computerChoice === `påse`) {
        playerScore++
        window.alert(`Din ${playerChoice} klippte skiten ur datorns ${computerChoice}!
        Spelare: ${playerScore}
        Datorn: ${computerScore}`);
    }
    else if (playerChoice === `påse` && computerChoice === `sten`) {
        playerScore++
        window.alert(`Din ${playerChoice} fångade datorns ${computerChoice}!
        Spelare: ${playerScore}
        Datorn: ${computerScore}`);
    }
    // Utan return; får man ett extra window.alert att klicka bort efter totalvinst för varje omgång som blivit oavgjord. 
    // Enligt chatGPT skickas ett nullvärde om det inte står med. ¯\_(ツ)_/¯ 
    else if (playerChoice === computerChoice) {
        window.alert(`Ni valde båda ${playerChoice} vi kör igen!
        Spelare: ${playerScore}
        Datorn: ${computerScore}`);
        inputs();
        return;
    }
    else {
        computerScore++
        window.alert(`Datorn vann med sin ${computerChoice} mot din ${playerChoice}!
        Spelare: ${playerScore}
        Datorn: ${computerScore}`)
    }
    pointsTracker(playerScore, computerScore);
}

function pointsTracker(playerScore, computerScore) {
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