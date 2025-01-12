/* type of export -> 1) name export 2) default export
Note:- every module can only have single default export  only
*/

export const add = (a, b) => {
  return a + b;
};

export const difference = (a, b) => {
  return a - b;
};

export default function multiply(a, b) {
  return a * b;
}
