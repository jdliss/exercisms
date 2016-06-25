var Year = function(num) { this.year = num; }

Year.prototype.isLeap = function() {
   return ((this.year % 400 === 0) || (this.year % 100 !== 0 && this.year % 4 === 0))
};

module.exports = Year;
