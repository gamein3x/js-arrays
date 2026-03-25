/**
 * ESERCIZIO: Cifrario di Cesare
 * --------------------------------
 * Il Cifrario di Cesare è uno dei più antichi metodi di crittografia.
 * Funziona spostando ogni lettera del messaggio di un numero fisso di posizioni
 * nell'alfabeto. In questo esercizio useremo uno spostamento di 3.
 *
 * Esempio: "abc" → "def"  |  "xyz" → "abc" (il wrap-around!)
 *
 * OBIETTIVO: completare il codice qui sotto per cifrare il messaggio inserito
 * dall'utente usando un ciclo for e l'array dell'alfabeto.
 */

// --- DATI ---

// Array con tutte le lettere dell'alfabeto (già pronto!)
const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const SHIFT = 3; // numero di posizioni da spostare

// Chiedi il messaggio all'utente e convertilo in minuscolo
const messaggio = prompt("Inserisci il messaggio da cifrare:").toLowerCase();

// Variabile che conterrà il messaggio cifrato (inizia vuota)
let messaggioCifrato = "";


// --- CIFRATURA ---

// TODO 1: scrivi un ciclo for che itera su ogni carattere del messaggio
//         Suggerimento: usa messaggio.length come condizione di uscita

for (/* TODO: inizializzazione */; /* TODO: condizione */; /* TODO: incremento */) {

    // TODO 2: ottieni il carattere corrente del messaggio all'indice i
    const carattere = /* TODO: messaggio[?] */;

    // TODO 3: trova la posizione di questo carattere nell'array alfabeto
    //         Suggerimento: usa il metodo indexOf()
    const indice = /* TODO */;

    // TODO 4: se il carattere NON è nell'alfabeto (indice === -1),
    //         aggiungilo così com'è a messaggioCifrato (es. spazi, numeri, punteggiatura)
    if (indice === -1) {
        // TODO
    } else {
        // TODO 5: calcola il nuovo indice sommando SHIFT
        //         Attenzione al wrap-around! Se superi 25 devi ripartire da 0.
        //         Suggerimento: usa l'operatore modulo %  →  (indice + SHIFT) % alfabeto.length
        const nuovoIndice = /* TODO */;

        // TODO 6: aggiungi il carattere cifrato (alfabeto[nuovoIndice]) a messaggioCifrato
        // TODO
    }
}


// --- OUTPUT ---

// TODO 7: stampa in console il messaggio originale e quello cifrato
console.log("Messaggio originale: ", /* TODO */);
console.log("Messaggio cifrato:   ", /* TODO */);


/**
 * SFIDA EXTRA (opzionale)
 * -----------------------
 * Riesci a decifrare il messaggio? Prova a implementare la funzione inversa:
 * invece di sommare SHIFT, sottrailo (attenzione al wrap-around in senso opposto!).
 *
 * Suggerimento per il wrap-around inverso:
 *   (indice - SHIFT + alfabeto.length) % alfabeto.length
 */
