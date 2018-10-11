Package.describe({
  name: 'jav:accounts-utt',
  version: '0.0.17',
  summary: 'OAuth2 for UTT',
  git: 'https://github.com/Javdu10/tunguska-accounts-imgur.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['underscore', 'random']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('jav:utt@0.0.14', ['client', 'server']);

  api.addFiles('accounts-utt_login_button.css', 'client');

  api.addFiles('accounts-utt.js');
});
