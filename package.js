Package.describe({
  name: 'themeteorchef:html5-sortable',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('undefined');
  api.addFiles('themeteorchef:html5-sortable.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('themeteorchef:html5-sortable');
  api.addFiles('themeteorchef:html5-sortable-tests.js');
});
