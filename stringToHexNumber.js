/**
 * @author Georgi Naumov
 * gonaumov@gmail.com for contacts
 * and suggestions
 **/

yourApp.service("stringToHexNumber", function () {
    return function (inputString) {
        var result = {};

        var stringHexNumber = (
        parseInt(
            parseInt(inputString, 36)
                .toExponential()
                .slice(2, -5), 10) & 0xFFFFFF
        ).toString(16).toUpperCase();

        result['backgroundColor'] = '#' + ('000000' + stringHexNumber).slice(-6);
        result['fontColor'] = (function (hexTripletColor) {
            var color = hexTripletColor;
            color = color.substring(1); // remove #
            color = parseInt(color, 16); // convert to integer
            color = 0xFFFFFF ^ color; // invert three bytes
            color = color.toString(16); // convert to hex
            color = ("000000" + color).slice(-6); // pad with leading zeros
            color = "#" + color; // prepend #
            return color;
        })(result['backgroundColor']);

        return result;
    };
});
