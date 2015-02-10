var glob = require('glob');
var nodejava = require('java');
var Bluebird = require('bluebird');
nodejava.asyncOptions = {
    promiseSuffix: 'Promise',
    promisify: Bluebird.promisify
};
var filenames = glob.sync('target/dependency/**/*.jar');
filenames.forEach(function (name) {
    nodejava.classpath.push(name);
});
// we do this only for its side-effect of forcing node-java to finalize its initialization.
// See note about initialization in https://github.com/joeferner/node-java#promises
nodejava.import('java.lang.Object');
var generatedSourceCode = nodejava.newInstancePromise.toString();
console.log(generatedSourceCode);
nodejava.newInstancePromise('java.util.ArrayList').then(function (newArray) {
    newArray.addSync('hello');
    newArray.addSync('world');
    console.log(newArray.toStringSync());
});
