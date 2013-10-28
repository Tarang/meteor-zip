Package.describe({
  summary: "A zip package for meteor"
});

Npm.depends({"adm-zip": "0.4.3"});

Package.on_use(function (api) {

  api.export('AdmZip', 'server');

  api.add_files('lib.js', ['server']);
});
