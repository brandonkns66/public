var Converter = require('api-spec-converter');
var fs = require('fs');

Converter.convert({
  from: 'openapi_3',
  to: 'swagger_2',
  source: 'https://raw.githubusercontent.com/brandonkns66/public/master/experts2.json',
}, function(err, converted) {
  // For yaml and/or OpenApi field order output replace above line
  // with an options object like below
  //   var  options = {syntax: 'yaml', order: 'openapi'}
  //   console.log(converted.stringify(options));
  fs.writeFileSync('swagger2.json', converted.stringify());
});