// // les condition - intro
// // 1 Via un console.log() vérifie l'egalité entre 1 et "1"
let a = 1;
let b = "1";
console.log(a == b);

// // 2 Via un console.log() vérifie l'egalité STRICTE entre 1 et "1"
console.log(a === b);

// // 3 Créer un programme qui demande le prénom d'une personne, si le prénom de la personne comporte moins de 5 caractères, affichée une alerte avec comme message " Ton nom est trop court "
let prenom = prompt("Quel est ton prénom ?");

if (prenom.length < 5) {
    alert("ton nom est trop court");
}

// // 4 Affiche une addition a l'utilisateur et demande lui de résoudre l'addition, si il répond juste, félicitez le, sinon dite lui que c'est incorrect.
let addition = prompt("combien font 1+1 ?");

if (addition == 2){
    alert("felicitation");
}else{
    alert("essai encors");
}

// // 5 Affiche une multiplication à l'utilisateur et demande lui de la résoudre, si il répond juste félicitez le "la réponse était bien xx" sinon dite lui, à combien d'unité il était de la réponse exemple si la réponse etait 35 et qu'il répont 40 renvoyez lui une alerte avec "C'est dommage, tu n'étais qu'a 5 unité de la bonne réponse"
let rep = prompt("Combien font 5x20");
let unites = Math.abs(rep - 100);

if(rep == 100){
    alert(`Bravo la réponse était bien ${rep}`);
}else{
    alert(`Faux, tu étais à ${unites} unités de la bonne réponse`);
}

// 6 Créer un programme qui permet d'ajouter des elements dans un tableau via des prompts. Quand le tableau contient 3 éléments, renvoyez une alerte avec le contenu du tableau
let tab = [];
let ajout1 = prompt("1");
let ajout2 = prompt("2");
let ajout3 = prompt("3");
tab.unshift(ajout1, ajout2, ajout3);
if (tab.length == 3) {
    alert(tab);
}

// 7 Créer un programme qui permet a l'utilisateur de mettre des chiffres dans des bacs, si le chiffre est plus grand ou égal à 12 il va dans le bac "grandNombres" si il est plus petit que 12 il va dans le bac "petitNombres" affiche ensuite une seule alerte avec le contenu des deux bacs

let bacp = [];
let bacg = [];
let reponse = prompt("ajout d'un chiffre");
if (reponse >= 12) {
    bacg.push(reponse);
} else {
    bacp.push(reponse);
}
console.log(bacg +" et "+ bacp);

// 8 Invente un exercice avec ce que tu as appris en Javascript jusqu'a maintenant en incluent des conditions

let tableau = [];

let nom = prompt("quel est ton nom ?");
let prenom1 = prompt("quel est ton prenom1 ?");

if (nom.length == 6 && prenom1.length == 4){
    alert(`Bonjour monsieur Coroli Agim`);
} else{
    alert(`Tu n'est pas agim`);
}