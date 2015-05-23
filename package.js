Package.describe({
  name: 'bigdata:elasticsearch',
  summary: 'Meteor interface for Elastic Search, with easy methods to river Meteor collections',
  version: '1.0.0',
  git: 'https://github.com/meteorbigdata/elasticsearch.git',
  documentation: 'README.md'
});

Npm.depends({
  'elasticsearch': '2.1.2'
});

Package.onUse(function (api, where) {
  api.versionsFrom('METEOR@1.0');

  api.use([
    'coffeescript',
    'http',
    'bigdata:logs'
  ], ['server']);

  api.addFiles([
    'elasticsearch.js',
    'methods.js'
  ], ['server']);

  api.export('ES');
});
