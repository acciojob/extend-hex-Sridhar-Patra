const extendHex = (shortHex) => {
  // write your code here
	  // Remove the '#' character if present
  if (shortHex[0] === '#') {
    shortHex = shortHex.slice(1);
  }

  // Extend each color component
  let fullHex = '';
  for (let i = 0; i < shortHex.length; i++) {
    fullHex += shortHex[i] + shortHex[i];
  }

  // Add the '#' character and return the full hex code
  return '#' + fullHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
