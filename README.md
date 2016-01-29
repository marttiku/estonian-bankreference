# estonian-bankreference
Estonian bank reference check digit calculation
Panga viitenumbri kontrollkoha arvutamine

# Install
npm install estonian-bankreference

# Usage

var bankreference = require('estonian-bankreference');

var reference = bankreference.checkDigit('12131295');

console.log(reference);                // 121312952
