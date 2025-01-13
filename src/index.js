/*****************************************
 0) my_alpha_number_t
 *****************************************/
 const my_alpha_number_t = (nbr) => {

  return String(nbr);
};

/*****************************************
 1) sum
 *****************************************/
const sum = (a, b) => {

  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0;
  }
  // Gérer Infinity
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return 0;
  }
  return a + b;
};

/*****************************************
 2) my_size_alpha_t
 *****************************************/
const my_size_alpha_t = (str = '') => {
  if (typeof str !== 'string') {
    return 0;
  }
  let count = 0;
  while (str[count] !== undefined) {
    count++;
  }
  return count;
};

/*****************************************
 3) my_display_alpha_t
 *****************************************/
const my_display_alpha_t = () => 'abcdefghijklmnopqrstuvwxyz';

/*****************************************
 4) my_array_alpha_t
 *****************************************/
const my_array_alpha_t = (str) => {

  if (typeof str !== 'string') {
    return [];
  }
  const result = [];
  for (let i = 0; i < my_size_alpha_t(str); i++) {
    result[i] = str[i];
  }
  return result;
};

/*****************************************
 5) my_is_posi_neg_t
 *****************************************/
const my_is_posi_neg_t = (nbr) => {

  if (!Number.isFinite(nbr)) {
    return (nbr === -Infinity) ? 'NEGATIVE' : 'POSITIF';
  }
  return nbr <= 0 ? 'NEGATIVE' : 'POSITIF';
};

/*****************************************
 6) fibo
 *****************************************/

const fibo = (n) => {
  // Si pas un nombre, ou NaN, ou Infinity => on renvoie 0
  if (typeof n !== 'number' || !Number.isFinite(n)) {
    return 0;
  }
  if (n <= 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibo(n - 1) + fibo(n - 2);
};

/*****************************************
 7) my_display_alpha_reverse_t
 *****************************************/
const my_display_alpha_reverse_t = () => {
  const alpha = my_display_alpha_t(); 
  let reverseAlpha = '';
  for (let i = my_size_alpha_t(alpha); i > 0; i--) {
    reverseAlpha += alpha[i - 1];
  }
  return reverseAlpha;
};

/*****************************************
 8) my_length_array_t
 *****************************************/
const my_length_array_t = (arr) => {

  if (!Array.isArray(arr)) {
    return 0;
  }

  let i = 0;
  for (let elem of arr) {
    i++;
  }
  return i;
};

/*****************************************
 9) my_display_unicode_t
 *****************************************/
const my_display_unicode_t = (arr) => {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    const decimal = arr[i];

    if ((decimal >= 65 && decimal <= 90) ||
        (decimal >= 97 && decimal <= 122) ||
        (decimal >= 48 && decimal <= 57) ||
         decimal === 32) {
      results.push(String.fromCharCode(decimal));
    }
  }
  return results.join('');
};

/*****************************************
 10) quickSort
 *****************************************/
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

/*****************************************
 11) tspBrutForce
 *****************************************/
function permuter(arr) {
  if (arr.length === 0) return [[]];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let reste = arr.slice(0, i).concat(arr.slice(i + 1));
    let permut = permuter(reste);
    for (let j = 0; j < permut.length; j++) {
      result.push([arr[i]].concat(permut[j]));
    }
  }
  return result;
}

function tspBrutForce(distances) {
  let villes = Object.keys(distances);

  // Gérer le cas d'aucune ville
  if (villes.length === 0) {
    return { minDistance: Infinity, meilleurePermutation: [] };
  }

  let permutations = permuter(villes);
  let minDistance = Infinity;
  let meilleurePermutation = [];

  permutations.forEach(chemin => {
    let distanceTotale = 0;
    for (let i = 0; i < chemin.length - 1; i++) {
      distanceTotale += distances[chemin[i]][chemin[i + 1]];
    }

    // Retour à la ville de départ
    distanceTotale += distances[chemin[chemin.length - 1]][chemin[0]];

    if (distanceTotale < minDistance) {
      minDistance = distanceTotale;
      meilleurePermutation = chemin;
    }
  });
  return { minDistance, meilleurePermutation };
}

/*****************************************
 12) resoudreSudoku
 *****************************************/

function grilleEstCompleteEtValide(grille) {

  for (let row = 0; row < 9; row++) {
    const seen = new Set();
    for (let col = 0; col < 9; col++) {
      let val = grille[row][col];
      if (val < 1 || val > 9) return false; 
      if (seen.has(val)) return false;
      seen.add(val);
    }
  }

  for (let col = 0; col < 9; col++) {
    const seen = new Set();
    for (let row = 0; row < 9; row++) {
      let val = grille[row][col];
      if (seen.has(val)) return false;
      seen.add(val);
    }
  }

  for (let startRow = 0; startRow < 9; startRow += 3) {
    for (let startCol = 0; startCol < 9; startCol += 3) {
      const seen = new Set();
      for (let r = startRow; r < startRow + 3; r++) {
        for (let c = startCol; c < startCol + 3; c++) {
          let val = grille[r][c];
          if (seen.has(val)) return false;
          seen.add(val);
        }
      }
    }
  }
  return true;
}

function estValide(grille, ligne, col, num) {

  for (let i = 0; i < 9; i++) {
    if (grille[ligne][i] === num || grille[i][col] === num) {
      return false;
    }
  }

  let startRow = Math.floor(ligne / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (grille[i][j] === num) {
        return false;
      }
    }
  }
  return true;
}

function resoudreSudoku(grille) {

  let foundZero = false;
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grille[row][col] === 0) {
        foundZero = true;
        break;
      }
    }
    if (foundZero) break;
  }

  if (!foundZero) {
    return grilleEstCompleteEtValide(grille);
  }


  for (let ligne = 0; ligne < 9; ligne++) {
    for (let col = 0; col < 9; col++) {
      if (grille[ligne][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (estValide(grille, ligne, col, num)) {
            grille[ligne][col] = num;
            if (resoudreSudoku(grille)) {
              return true;
            }
            grille[ligne][col] = 0;
          }
        }
        // Impossible de placer un nombre => échec
        return false;
      }
    }
  }
  return true;
}

/*****************************************
 Export des fonctions
 *****************************************/
module.exports = {
  my_alpha_number_t,
  sum,
  my_size_alpha_t,
  my_display_alpha_t,
  my_array_alpha_t,
  my_is_posi_neg_t,
  fibo,
  my_display_alpha_reverse_t,
  my_length_array_t,
  my_display_unicode_t,
  quickSort,
  tspBrutForce,
  permuter,
  resoudreSudoku,
  estValide,
};
