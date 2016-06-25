var DnaTranscriber = function() {};

var pairs = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
}

DnaTranscriber.prototype.toRna = function(input) {
    var output = "";

    for (var i = 0; i < input.length; i++) {
        output += pairs[input[i]];
    }

    return output;
};

module.exports = DnaTranscriber;
