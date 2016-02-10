Package.describe({
  name: 'dnimon:outdated-browser',
  version: '0.1.3',
  summary: 'Detects outdated browsers and advises users to upgrade to a new version.',
  git: 'https://github.com/dnimon/Meteor-outdated-browser.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('jquery');
  api.use('templating');
  api.addFiles('lib/outdated-browser.html', 'client');
  api.addFiles('lib/outdated-browser.css', 'client');
  api.export('OutdatedBrowser', 'client');
  api.addFiles('lib/outdated-browser.js', 'client');
});
