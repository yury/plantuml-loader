var spawnSync = require('child_process').spawnSync;
var url = require('url');

module.exports = function (source) {
  this.cacheable && this.cacheable();

  var params = url.parse(this.query, true);
  var format = params.query['format'] || 'svg';

  var noDocker = params.query['no-docker'] != null;
  var res = {};

  if (noDocker) {
    res = spawnSync('java', ['-Djava.awt.headless=true', '-jar', 'plantuml.jar', '-p', '-charset', 'utf8', '-t' + format], {input: source});
  } else {
    res = spawnSync('docker', ['run', '-i', '--rm', 'think/plantuml', '-charset', 'utf8', '-t' + format], {input: source});
  }

  return res.stdout.toString()
}
