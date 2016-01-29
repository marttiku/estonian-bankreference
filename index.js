
module.exports = {
    checkDigit: function(number) {
        number = String(number);
        var weight = [7,3,1];
        var pos = 0;
        var total = 0;
        for (var x = number.length-1; x >=0; x--)
        {
            var c = number.charAt(x);
            total = total + c * weight[pos % 3];
            console.log(c,pos,total)
            pos++;
        }
        var checkdigit = (Math.ceil(total/10)*10)-total;
        return number + String(checkdigit);
    }
}