Package.describe({
  summary: "provide mixins to stylus"
});

Package.on_use(function (api, where) {
  api.add_files([
    'liga/websymbolsligaregular.eot'
    , 'liga/websymbolsligaregular.svg'
    , 'liga/websymbolsligaregular.ttf'
    , 'liga/websymbolsligaregular.woff'
    , 'import.styl'], 'client', {isAsset: true});
});

Package.on_test(function (api) {
  api.use('alpha-mixins');

  api.add_files('alpha-mixins_tests.js', ['client', 'server']);
});
