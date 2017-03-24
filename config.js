module.exports = {
    src: {
   /*      bootstrap: 'node_modules/bootstrap/dist/css/bootstrap.css',
         normalize: 'node_modules/normalize.css/normalize.css',
*/
        sass: [
            'node_modules/normalize.css/normalize.css',
            'src/style/main.scss'
        ],

        js: [
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'src/js/**/*.js'
        ],

        html: 'src/templates/*.html'
    },

    dest: {
        css: 'build/css',
        js: 'build/js'
    },

    maps: '../maps',

    sassConfig: {
        outputStyle: 'compressed'
    },

    browserSyncConfig: {
        server: {
            baseDir: "./",
            index: "index.html"
           /* index: "src/templates/form.html"*/
            /*index: "src/templates/products.html"*/
            /*index: "src/templates/about.html"*/
        }


    },

    watchSass: 'src/style/**/*.scss',

    autoprefixer: [
        'last 2 versions',
        '> 1%',
        'ie 9'
    ]


};
