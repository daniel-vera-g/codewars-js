// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
const comp = function(array1, array2){

  // Check form
  let same = (!Array.isArray(array1) || !array1.length || !Array.isArray(array2) || !array2.length) ? false : true;

  // Compare regular & quadratic value in both arrays
  array1.forEach(elem => {
   let quadratic = array2.find(e => (e === elem * elem));
   same = (quadratic != undefined && same) ? true : false;
  });
  
  return same;
}

const b1 = [16, 98, 27, 87, 58, 33, 79, 59];
const b2 = [256, 9604, 729, 7569, 3364, 1089, 6242, 3481];
comp(b1, b2);
module.exports = comp;