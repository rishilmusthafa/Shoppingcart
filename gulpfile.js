var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.browserify(['main.js'], 'resources/assets/javascript/es6.js')
       .scriptsIn('resources/assets/javascript','public/js/all.min.js');
    mix.sass(['app.scss'], 'resources/assets/css/app.css')
       .stylesIn('resources/assets/css','public/css/all.min.css');
});
