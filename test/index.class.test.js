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
describe('sum (extended tests)', () => {
  it('should handle float numbers correctly', () => {
    expect(sum(1.5, 2.7)).toBeCloseTo(4.2);
  });

  it('should handle very large numbers', () => {
    expect(sum(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
  });

  it('should handle Infinity', () => {
    expect(sum(Infinity, 1)).toBe(0); 
  });

  it('should return 0 if called without arguments', () => {
    expect(sum()).toBe(0);
  });
});
// -------------------------
// 2) my_size_alpha_t
// -------------------------
describe('my_size_alpha_t (extended tests)', () => {
  it('should return 0 if called with undefined', () => {
    expect(my_size_alpha_t(undefined)).toBe(0);
  });

  it('should count spaces and punctuation', () => {
    expect(my_size_alpha_t('Hello, world!')).toBe(13);
  });

  it('should count Unicode characters correctly (e.g., emojis)', () => {
    expect(my_size_alpha_t('👋')).toBe(2); 

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
describe('my_array_alpha_t (extended tests)', () => {
  it('should return [] if undefined is passed', () => {
    expect(my_array_alpha_t(undefined)).toEqual([]);
  });

  it('should handle strings with whitespace', () => {
    expect(my_array_alpha_t('  ')).toEqual([' ', ' ']);
  });

  it('should handle special characters and punctuation', () => {
    expect(my_array_alpha_t('!@#')).toEqual(['!', '@', '#']);
  });
});


// -------------------------
// 5) my_is_posi_neg_t
// -------------------------
describe('my_is_posi_neg_t (extended tests)', () => {
  it('should return NEGATIVE if passing -1.5', () => {
    expect(my_is_posi_neg_t(-1.5)).toBe('NEGATIVE');
  });

  it('should return POSITIF if passing 0.0001', () => {
    expect(my_is_posi_neg_t(0.0001)).toBe('POSITIF');
  });

  it('should handle Infinity as positive', () => {
    expect(my_is_posi_neg_t(Infinity)).toBe('POSITIF');
  });

  it('should handle -Infinity as negative', () => {
    expect(my_is_posi_neg_t(-Infinity)).toBe('NEGATIVE');
  });
});


// -------------------------
// 6) fibo
// -------------------------
describe('fibo (extended tests)', () => {
  it('should return 0 if called with undefined', () => {
    expect(fibo(undefined)).toBe(0);
  });

  it('should return 0 if called with a non-number string', () => {

    expect(fibo('abc')).toBe(0);
  });


  it('should handle a moderately large number without stack overflow (e.g., 30)', () => {
    expect(fibo(30)).toBe(832040); 
  });

});


// -------------------------
// 7) my_display_alpha_reverse_t
// -------------------------
describe('my_display_alpha_reverse_t (extended tests)', () => {
  it('should return 26 characters reversed (z-a)', () => {
    const reversed = my_display_alpha_reverse_t();
    expect(reversed).toHaveLength(26);
    expect(reversed).toBe('zyxwvutsrqponmlkjihgfedcba');
  });
});


// -------------------------
// 8) my_length_array_t
// -------------------------
describe('my_length_array_t (extended tests)', () => {
  it('should return 0 for an empty array', () => {
    expect(my_length_array_t([])).toBe(0);
  });

  it('should handle arrays with different types of elements', () => {
    expect(my_length_array_t([1, 'abc', null, {}])).toBe(4);
  });

  it('should return 0 for undefined', () => {
    expect(my_length_array_t(undefined)).toBe(0);
  });
});


// -------------------------
// 9) my_display_unicode_t
// -------------------------
describe('my_display_unicode_t (extended tests)', () => {
  it('should return an empty string if the array is empty', () => {
    expect(my_display_unicode_t([])).toBe('');
  });

  it('should ignore codes out of range but still include valid codes', () => {

    expect(my_display_unicode_t([72,33,97])).toBe('Ha');
  });

  it('should handle multiple spaces (32)', () => {
    expect(my_display_unicode_t([72, 32, 72, 32, 72])).toBe('H H H');
  });
});

// -------------------------
// 10) quickSort
// -------------------------
describe('quickSort (extended tests)', () => {
  it('should return the same array if all elements are equal', () => {
    expect(quickSort([5,5,5])).toEqual([5,5,5]);
  });

  it('should handle negative numbers properly', () => {
    expect(quickSort([0, -1, 3, -2])).toEqual([-2, -1, 0, 3]);
  });

  it('should handle already sorted array', () => {
    expect(quickSort([1,2,3,4])).toEqual([1,2,3,4]);
  });

  it('should handle array with only one element', () => {
    expect(quickSort([42])).toEqual([42]);
  });
});

// -------------------------
// 11) tspBrutForce
// -------------------------
describe('tspBrutForce (extended tests)', () => {
  it('should handle a single-city distance matrix', () => {
    const distances = {
      A: { A: 0 }
    };
    const { minDistance, meilleurePermutation } = tspBrutForce(distances);
    expect(minDistance).toBe(0);
    expect(meilleurePermutation).toEqual(['A']);
  });

  it('should handle a 2-city distance matrix', () => {
    const distances = {
      A: { A: 0, B: 5 },
      B: { A: 5, B: 0 }
    };
    const { minDistance, meilleurePermutation } = tspBrutForce(distances);

    expect(minDistance).toBe(10);

    expect(meilleurePermutation).toHaveLength(2);
  });

  it('should handle an empty distance object (no cities)', () => {
    const distances = {};
    const { minDistance, meilleurePermutation } = tspBrutForce(distances);
    expect(minDistance).toBe(Infinity);

    expect(meilleurePermutation).toHaveLength(0);
  });
});


// -------------------------
// 12) resoudreSudoku
// -------------------------
describe('resoudreSudoku (extended tests)', () => {

  it('should return false for an invalid Sudoku grid', () => {

    const invalidGrid = [
      [1,1,1, 1,1,1, 1,1,1],
      [1,1,1, 1,1,1, 1,1,1],
      [1,1,1, 1,1,1, 1,1,1],

      [1,1,1, 1,1,1, 1,1,1],
      [1,1,1, 1,1,1, 1,1,1],
      [1,1,1, 1,1,1, 1,1,1],

      [1,1,1, 1,1,1, 1,1,1],
      [1,1,1, 1,1,1, 1,1,1],
      [1,1,1, 1,1,1, 1,1,1],
    ];
    const result = resoudreSudoku(invalidGrid);
    expect(result).toBe(false);
  });

  it('should handle an empty Sudoku grid (all zeros)', () => {
    const emptyGrid = Array.from({ length: 9 }, () => Array(9).fill(0));
    const result = resoudreSudoku(emptyGrid);
    expect(result).toBe(true); 

  });
});

// -------------------------
// FIN TESTS
// -------------------------
