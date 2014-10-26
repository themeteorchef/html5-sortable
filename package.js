Package.describe({
  name: 'themeteorchef:html5-sortable',
  summary: 'HTML5 Sortable jQuery plugin by voidberg. Repackaged for Meteor.',
  version: '0.1.6',
  git: 'https://github.com/themeteorchef/html5-sortable.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.4');
  api.use('jquery');
  api.addFiles([
    'lib/html5-sortable/dist/html.sortable.min.js'
  ],'client');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'test-helpers'], ['client', 'server']);
  api.use('jquery', 'client');
  api.use('themeteorchef:html5-sortable');
  api.addFiles('themeteorchef:html5-sortable-tests.js');
});
