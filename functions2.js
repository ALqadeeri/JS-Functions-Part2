function isOdd(n) {
  if (n % 2 !== 0) return true;
  else return false;
}

console.log(isOdd(10));

function oddsSmallerThan(n) {
  if (isOdd(n)) {
    return (n - 1) / 2;
  } else {
    return n / 2;
  }
}

console.log(oddsSmallerThan(7));

function squareOrDouble(n) {
  if (n % 2 === 0) {
    return n * 2;
  } else {
    return n * n;
  }
}

console.log(squareOrDouble(2));
