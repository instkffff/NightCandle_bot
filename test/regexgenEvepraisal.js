var _ = require('regexgen.js')
var regex = _(
    _.startOfLine(),
    _.capture( '/price' ), '',
    _.endOfLine()
)

console.log(regex)