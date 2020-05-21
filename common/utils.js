/**
 * Converts a number into binary and returns that in inverse order
 * and it also pads it to the specified length.
 * For example inverseBinaryFromNumber(24, 6) = '000110'
 *
 * @param integer num
 * @return string
 */
function inverseBinaryFromNumber(num, length) {
  let binary = num.toString(2);
  while(binary.length < length) {
    binary = '0' + binary;
  }
  return binary.split('').reverse().join('');
}

export default inverseBinaryFromNumber;