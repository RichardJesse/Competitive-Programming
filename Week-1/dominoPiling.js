function dominoPiler(mDimension, nDimension) {
  const dominoDimension = 2 * 1;
  var avalilableArea = mDimension * nDimension;

  var pilableDominos = Math.trunc(avalilableArea / dominoDimension);

  print(pilableDominos);
}

var inputs = readline().split(' ');
dominoPiler(inputs[0], inputs[1]);


