
/*
Image rotation:

Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
write a method to rotate the image by 90 degrees.


--------------------
| 1  | 2  | 3  | 4 |
--------------------
| 12 | 13 | 14 | 5 |
--------------------
| 11 | 16 | 15 | 6 |
--------------------
| 10 | 9  | 8  | 7 |
--------------------

--------------------
| 10 | 11 | 12 | 1 |
--------------------
| 9  | 16 | 13 | 2 |
--------------------
| 8  | 15 | 14 | 3 |
--------------------
| 7  | 6  | 5  | 4 |
--------------------
*/

const _ = require('lodash');

function sayHello() {
  console.log('Hello, World');
}

function rotateMatrixBy90(matrix) {
  // Input
  // [0] [0] = 1
  // [0] [1] = 2
  // [0] [2] = 3
  // [0] [3] = 4
  // [1] [0] = 12
  // [1] [1] = 13
  // [1] [2] = 14
  // [1] [3] = 5
  
  // output
  // [0] [3] = 1
  // [1] [3] = 2
  // [2] [3] = 3
  // [3] [3] = 4
  // [0] [2] = 12
  // [1] [2] = 13
  // [2] [2] = 14
  // [3] [2] = 5
  
  // El valor de la columna se volvio el opuesto al valor de la fila  0 - 3, 1 - 2
  // El valor de la fila se volvio igual al valor de la columna 0-0, 1-1, 2-2, 3-3
  
  let matrix90 = [[],[],[],[]];
  
  let columnas = [];
  let filas = [];
  
  for (let i = 0; i < 4; i++ ) {
    for (let j = 0; j < 4; j++) {
      let valor = 3 - i;
      matrix90[j][i] = matrix[valor][j];
    }
  }
  
  printMatrix(matrix90);
  return matrix90;
  
}

function printMatrix(matrix) {
  for (let i = 0; i < 4; i++ ) {
    for (let j = 0; j < 4; j++) {
      console.log(`Matrix[${i}][${j}] = ${matrix[i][j]}`);
    }
  }
}

function main() {
  let matrix = [[1,2,3,4], [12,13,14,5],[11,16,15,6], [10, 9 ,8,7]]; 
  
  let matrix90 = rotateMatrixBy90(matrix);
}

main();
