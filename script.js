//alert("coucou");

let prix = prompt("entrer le prix de l'article");
if (prix <= 0 ){
    alert("Erreur : le prix doit etre positif")
}


for (let tours = 1; tours <= 10; tours++){
    alert(" vienoiserie " + tours)


let croissant = 10; 
while (croissant > 0){
    alert("il te reste" + croissant + "continue a manger")
    croissant--;
}
alert(" t'a plus faim ")

/*pour le deuxieme j'ai 10 croissant, la boucle va continuer jusq'a 0, une fois la boucle arriver a 0 elle s'arrete
 une fois les 10 croissant manger un message dit a l'utilisateur "t'a plus faim"*/

 let viennoiseries = ["croissant", "pain au chocolat", "Pain aux raisins", "Chausson aux pommes"];

 viennoiseries.forEach(function(viennoiseries){
     alert(" il nous reste des " + viennoiseries +"!")
 });
