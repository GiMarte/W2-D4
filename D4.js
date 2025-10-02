/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  let areaRett = (l1 * l2) / 2;
  return areaRett;
};
console.log("Area del triangolo:", area(10, 5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (num1, num2) {
  if (num1 === num2) {
    let moltiplication = (num1 + num2) * 3;
    return moltiplication;
  } else {
    let addiction = num1 + num2;
    return addiction;
  }
};

console.log("Non inserire due numeri uguali altrimenti:", crazySum(100, 100));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (num) {
  if (num > 19) {
    let difference = (num - 19) * 3;
    return difference;
  } else {
    let difference = Math.abs(num - 19);
    return difference;
  }
};

console.log("Fetish per il numero 19:", crazyDiff(50));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  if (n > 20 && n <= 100) {
    return true;
  } else if (n === 400) {
    let confermo400 = "confermato";
    return confermo400;
  } else {
    let noIdea = "non conosco " + n + " come numero";
    return noIdea;
  }
};
console.log("so contare da 20 a 100, so dire 400", boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (str) {
  const strMinuscolo = str.toLowerCase();
  if (strMinuscolo === "epicode") {
    return str;
  } else {
    let aggiungoEpicode = "EPICODE " + str;
    return aggiungoEpicode;
  }
};
console.log(epify("Voglio imparare"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (n1) {
  if (n1 >= 0) {
    if (n1 % 3 === 0 || n1 % 7 === 0) {
      let yep = n1 + " e' un multiplo di 3 o di 7";
      return yep;
    } else {
      let nop = n1 + " non e' un multiplo di 3 o di 7";
      return nop;
    }
  } else {
    let cantAccept = "Non accetto " + n1 + " o persone negative";
    return cantAccept;
  }
};
console.log(check3and7(69));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (s) {
  let reverser = s.split("").reverse().join("");
  return reverser;
};
console.log(reverseString("reldnas mada"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function (st) {
  let words = st.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
};

console.log(upperFirst("scavezza collo labiale magico"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (s1) {
  let cut = s1.slice(1, -1);
  return cut + " " + s1;
};

console.log(cutString("Mi chiamo carlo"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (number) {
  let arr = [];
  for (let i = 0; i < number; i++) {
    let randomNumber = Math.floor(Math.random() * 11);
    arr.push(randomNumber);
  }
  return arr;
};
console.log(giveMeRandom(10));
