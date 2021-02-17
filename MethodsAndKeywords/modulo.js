let one = 1;
let two = 2;
let three = 3;
let four = 4;
let twoPointFive = 2.5;
let minusFour = -4;
let minusFiveHundred = -500;

console.log(`One modulo two: ${one % two}`); // 1 Using circle method: 0,1
console.log(`Four modulo three: ${four % three}`); // 1 Using circle method: 0, 1, 2, 0, 1
console.log(`Three modulo four: ${three % four}`); // 3 Using circle method: 0, 1, 2, 3
console.log(`Two point five modulo one: ${twoPointFive % one}`); // 0.5 Using circle method: 0, 0, 0.5 (half turn)
console.log(`Two point five modulo four: ${twoPointFive % four}`); // 2.5 Using circle method: 0, 1, 2, 2.5 (half turn)
console.log(`Minus five hundred modulo four: ${minusFiveHundred % four}`); // 0
console.log(`Two modulo minus five hundred: ${two % minusFiveHundred}`); // 2
console.log(`- Four modulo three : ${-four % three}`); // -1
console.log(`Minus four modulo three : ${minusFour % three}`);

// where x%y deals with postive int operands
const circleMethodProof = (x, y) => {
  var passes = x; //passes equals turns on the circle
  var points = [];
  while (passes > 0) {
    for (let i = 0; i < y; i++) {
      points.push(i);
      --passes;
      if (passes < 0) {
        break;
      }
    }
  }
  return points[points.length - 1];
};

console.log(circleMethodProof(6, 4)); // 1.5

// where x%y deals with negative and decimal x opperand 
const negativeModulo = (x, y) => {
  try {
    if (Math.sign(x) != -1) {
      throw " first parameter is not a negative number";
    }
  } catch (err) {
    console.log(err);
  } finally {
    var passes = -x - 1; // needs one less pass as we are not starting from zero in this method
    var points = [];
    while (passes >= 0) {
      for (let i = y - 1; i >= 0; i--) {
        points.push(i);
        --passes;
        if (passes >= 0 && passes < 1) {
          var decimal = passes;
        }
        if (passes < 0) {
          break;
        }
      }
    }
    return points[points.length - 1] + decimal;
  }
};

console.log(negativeModulo(-5.5, 3)); // 1.5
