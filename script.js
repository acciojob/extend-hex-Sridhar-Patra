const extendHex = (shortHex) => {
  // write your code here
	 if short_hex[0] == '#':
        short_hex = short_hex[1:]

    // # Extend each color component
    full_hex = ''.join([c * 2 for c in short_hex])

    // # Add the '#' character and return the full hex code
    return '#' + full_hex
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
