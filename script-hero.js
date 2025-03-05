
for (let entrainement = 1; entrainement <= 5; entrainement++){
    alert("entrainement n°" + entrainement)
}
alert("entrainement terminer")

/*let pv = 60;
if (pv >=60) {
    alert("tu attaque avec toute ta puissance");
    alert("Bravo ! Tu gagne : 1x potion de Force")
}else if(pv >= 35 &&  50){
    alert("tu attaque faiblement");
    alert("Ton ennemi n'a presque pas eu mal")
}else if (pv >= 1 &&  15){
    alert("tu es trop faible tu doit fuir");
    alert("Bonne chance ! Tu reçoi : +5 bonus de vitesse")
}else if (pv <= 0){ 
    alert("tu es mort");
}*/

let ennemisRestants = 3;
while (ennemisRestants > 0) {
    let choix = prompt("un ennemi est devant toi ! Que fais-tu ? (combat/fuite)");
    if (choix === "combat") {
        alert("Le héros attaque un ennemi !");
    } else if (choix === "fuite") {
        alert("Le héros prend la fuite !");
    } else {
        alert("Choix invalide. L'histoire continue...");
    }
    ennemisRestants--;

    if (ennemisRestants > 0) {
        alert(" Il reste " + ennemisRestants + " ennemis !");
    } else {
        alert(" Tous les ennemis sont vaincus ! ");
        alert("fin du combat")
        alert("Bravo ! Tu gagne : 5x potion de force")
    }
}
let loots = ["Épée légendaire", "Potion magique", "Bouclier en or"];
loots.forEach(function(loots){
    alert("Le Hero ouvre les coffres aux tresors")
    alert(" Le Héros a trouvé " + loots +"!")
});



