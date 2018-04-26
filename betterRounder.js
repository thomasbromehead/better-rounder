function betterRounder(value, precision){
  var scientificValue = Number(value + 'e' + precision);
  var roundedHigherValue = Math.round(scientificValue);
  var newRounded = Number(roundedHigherValue + 'e-' + precision);
  var newRoundedToString = Math
  return newRounded;
}