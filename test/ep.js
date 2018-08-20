const ep = require('evepraisal')

ep.create(
    `50000MN Cold-Gas Enduring Microwarpdrive
5000MN Cold-Gas Enduring Microwarpdrive`, // The data you're getting an appraisal on
    'jita', // The market you're looking up data for.
    {} )// Optional options argument. Can be used to set persist="no", etc. This just gets passed to evepraisal.
.then((a) => {
  console.log(a)
})