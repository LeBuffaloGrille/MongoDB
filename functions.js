// Déclaration de la variable "volume"
var volume;

// Fonction : Calcul du volume d'un cône
export function cone_volume(radius, height) {
    // Calcul du volume d'un cône
    volume = radius * radius * height * 3.14 * (1/3); 
    // Affichage du volume calculé
    console.log(volume);
}

// Fonction : Pair ou impair
export function peer_or_odd(checkPeerOrOdd){
    // Si le chifre / nombre est impair
    if(checkPeerOrOdd % 2 == 1){
        // Affichage de la valeur impair puis indication du status
        console.log(checkPeerOrOdd + " is odd");
    }
    // Si le chifre / nombre est pair
    else{
        // Affichage de la valeur pair puis indication du status
        console.log(checkPeerOrOdd + " is peer");
    }
}