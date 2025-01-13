const {
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
  estValide
} = require('../src/index.js');

// -------------------------
// 0) my_alpha_number_t
// -------------------------
describe('my_alpha_number_t', () => {
  it('should return a string version of the number if a number is passed', () => {
    expect(my_alpha_number_t(123)).toBe('123');
  });

  it('should return the string itself if a string is passed', () => {
    expect(my_alpha_number_t('bonjour')).toBe('bonjour');
  });

  it('should return an empty string if argument is "" ', () => {
    expect(my_alpha_number_t('')).toBe('');
  });
});

// -------------------------
// 1) sum
// -------------------------
describe('sum', () => {
  it('should return 0 if any argument is not a number', () => {
    expect(sum('abc', 2)).toBe(0);
    expect(sum(2, 'abc')).toBe(0);
  });

  it('should return the sum of two numbers', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-1, 5)).toBe(4);
  });
});

// -------------------------
// 2) my_size_alpha_t
// -------------------------
describe('my_size_alpha_t', () => {
  it('should return 0 if not a string', () => {
    expect(my_size_alpha_t(123)).toBe(0);
    expect(my_size_alpha_t(null)).toBe(0);
  });

  it('should return the correct length of the string', () => {
    expect(my_size_alpha_t('Hello')).toBe(5);
    expect(my_size_alpha_t('')).toBe(0);
  });
});

// -------------------------
// 3) my_display_alpha_t
// -------------------------
describe('my_display_alpha_t', () => {
  it('should return the alphabet from a to z', () => {
    expect(my_display_alpha_t()).toBe('abcdefghijklmnopqrstuvwxyz');
  });
});

// -------------------------
// 4) my_array_alpha_t
// -------------------------
describe('my_array_alpha_t', () => {
  it('should convert a string into an array of chars', () => {
    expect(my_array_alpha_t('Hello')).toEqual(['H','e','l','l','o']);
  });

  it('should return an empty array if empty string', () => {
    expect(my_array_alpha_t('')).toEqual([]);
  });
});

// -------------------------
// 5) my_is_posi_neg_t
// -------------------------
describe('my_is_posi_neg_t', () => {
  it('should return NEGATIVE if nbr <= 0', () => {
    expect(my_is_posi_neg_t(0)).toBe('NEGATIVE');
    expect(my_is_posi_neg_t(-10)).toBe('NEGATIVE');
  });

  it('should return POSITIF if nbr > 0', () => {
    expect(my_is_posi_neg_t(5)).toBe('POSITIF');
  });
});

// -------------------------
// 6) fibo
// -------------------------
describe('fibo', () => {
  it('should return 0 if n <= 0', () => {
    expect(fibo(0)).toBe(0);
    expect(fibo(-5)).toBe(0);
  });

  it('should return 1 if n == 1 or n == 2', () => {
    expect(fibo(1)).toBe(1);
    expect(fibo(2)).toBe(1);
  });

  it('should return the correct fibonacci result for n > 2', () => {
    expect(fibo(3)).toBe(2); 
    expect(fibo(4)).toBe(3);  
    expect(fibo(5)).toBe(5);  
  });
});

// -------------------------
// 7) my_display_alpha_reverse_t
// -------------------------
describe('my_display_alpha_reverse_t', () => {
  it('should return the reversed alphabet', () => {
    expect(my_display_alpha_reverse_t()).toBe('zyxwvutsrqponmlkjihgfedcba');
  });
});

// -------------------------
// 8) my_length_array_t
// -------------------------
describe('my_length_array_t', () => {
  it('should return the length of the array', () => {
    expect(my_length_array_t([1,2,3])).toBe(3);
    expect(my_length_array_t([])).toBe(0);
  });
});

// -------------------------
// 9) my_display_unicode_t
// -------------------------
describe('my_display_unicode_t', () => {
  it('should convert ASCII codes to corresponding characters (letters, digits, space)', () => {

    const input = [72,101,108,108,111,32,49,50];
    expect(my_display_unicode_t(input)).toBe('Hello 12');
  });

  it('should ignore codes out of range (non letter, digit or space)', () => {

    const input = [64,72,999];
    expect(my_display_unicode_t(input)).toBe('H');
  });
});

// -------------------------
// 10) quickSort
// -------------------------
describe('quickSort', () => {
  it('should return a sorted array', () => {
    expect(quickSort([3,1,2])).toEqual([1,2,3]);
    expect(quickSort([5,3,8,1,2])).toEqual([1,2,3,5,8]);
  });

  it('should return an empty array if input is empty', () => {
    expect(quickSort([])).toEqual([]);
  });
});

// -------------------------
// 11) tspBrutForce
// -------------------------
describe('tspBrutForce', () => {

  it('should return an object with minDistance and meilleurePermutation', () => {
    const distances = {
      A: { A: 0,  B: 10, C: 15 },
      B: { A: 10, B: 0,  C: 20 },
      C: { A: 15, B: 20, C: 0  }
    };
    const { minDistance, meilleurePermutation } = tspBrutForce(distances);
    expect(minDistance).toBeGreaterThan(0);
    expect(meilleurePermutation.length).toBe(3);
  });
});

// -------------------------
// 12) resoudreSudoku
// -------------------------
describe('resoudreSudoku', () => {
  it('should solve a valid sudoku grid', () => {
    // Sudoku partiellement rempli
    let grille = [
      [5,3,0, 0,7,0, 0,0,0],
      [6,0,0, 1,9,5, 0,0,0],
      [0,9,8, 0,0,0, 0,6,0],

      [8,0,0, 0,6,0, 0,0,3],
      [4,0,0, 8,0,3, 0,0,1],
      [7,0,0, 0,2,0, 0,0,6],

      [0,6,0, 0,0,0, 2,8,0],
      [0,0,0, 4,1,9, 0,0,5],
      [0,0,0, 0,8,0, 0,7,9],
    ];
    const solved = resoudreSudoku(grille);
    expect(solved).toBe(true);

    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        expect(grille[row][col]).not.toBe(0);
      }
    }
  });
});

// -------------------------
// FIN TESTS
// -------------------------
