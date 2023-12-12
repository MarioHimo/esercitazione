//con il prompt registro nella variabile  il valore che inserisce l'utente

let primoNum = Number (window.prompt("Inserisci il primo numero"));
let secondoNum = Number (window.prompt("Inserisci il secondo numero"));

let somma = primoNum + secondoNum; 
let prodotto = primoNum * secondoNum;
let quoziente = primoNum / secondoNum;
let differenza = primoNum - secondoNum;

console.log("Il valore della somma è: " + somma);
console.log("Il valore del prodotto è: " + prodotto);
console.log("Il valore del quoziente è: " + quoziente.toPrecision(4));
console.log("Il valore della differenza è: " + differenza);

//Voglio stampare questi risultati nella pagina.
//1. Recupero l'elemento nel quale stampare
//2. Inietto la stringa dfei risultati nell'elemento

let elRisultati = document.getElementById("risultati");

let risultati = "Somma: " + somma + " <br> Differenza: " + differenza + "<br> Prodotto: " + prodotto + "<br> Quoziente: " + quoziente;

elRisultati.innerHTML = risultati;