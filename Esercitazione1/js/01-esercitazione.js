let nome = window.prompt ("Inserisci il nome");
let cognome = window.prompt("Inserisci il cognome");
let nomeEcognome = nome + " " +cognome;


console.log("Benvenuto: " + nomeEcognome);
let elRisultati = document.getElementById("risultati");
let risultati = " " + nomeEcognome;
elRisultati.innerHTML = risultati;