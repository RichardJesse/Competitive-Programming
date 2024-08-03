function dominoPiler(mDimension, nDimension) {
  const dominoDimension = 2 * 1;
  var avalilableArea = mDimension * nDimension;

  var pilableDominos = Math.trunc(avalilableArea / dominoDimension);

  return pilableDominos;
}


