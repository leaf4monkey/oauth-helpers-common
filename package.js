var packageName = 'leaf4monkey:oauth-helpers-common';
var mainModule = './lib/index.js';
var mainModuleEnv = mainModuleEnv;
var version = '0.0.5';

Package.describe({
  name: packageName,
  version: version,
  summary: 'Help you create oauth packages rapidly.',
  git: 'git@github.com:leaf4monkey/oauth-helpers-common.git',
  documentation: 'README.md'
});

var commonDependencies = function (api) {
  api.use('ecmascript');
  api.use('meteor', mainModuleEnv);
  api.use('service-configuration', mainModuleEnv);
};

Package.onUse(function(api) {
  api.versionsFrom('1.4.1');
  commonDependencies(api);

  api.mainModule(mainModule, mainModuleEnv);
});

//Package.onTest(function(api) {
//  commonDependencies(api);
//  api.use('tinytest');
//  api.addFiles(mainModule, mainModuleEnv);
//  api.mainModule('oauth-helpers-common-tests.js', mainModuleEnv);
//});
