let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.browserSync({
    open: 'external',
    proxy: "http://rent.ek",
    host: "rent.ek",
    // port: 80,
    scrollRestoreTechnique: "cookie",
    files: [
        "public/**/*.css",
        "resources/**/*",
        "resources/**/*.blade.php"
    ]
});

// mix.styles([
// 	'resources/Admin/sass/style.bundle.css',
// ], 'public/theme/style.bundle.min.css');
// mix.js('resources/Admin/js/scripts/scripts.bundle.js', 'public/theme');

mix.js('resources/js/scripts/login.js', 'public/js');
mix.js('resources/js/scripts/custom.js', 'public/js/custom.js');
mix.js('resources/js/app.js', 'public/js');

mix.sass('resources/sass/app.scss', 'public/css');

mix.webpackConfig({
    output: {
        publicPath: '/'
    }
});
