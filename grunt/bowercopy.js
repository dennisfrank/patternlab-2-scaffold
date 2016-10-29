module.exports = {
    options: {
        report: false,
    },
    libs: {
        src: [
            'jquery/dist/jquery.js'
        ],
        dest: '<%= globalConfig.source.js %>/vendor/libs'
    },

    // standalone: {
    //     src: [
    //         'html5shiv/dist/html5shiv.js',
    //         'html5shiv/dist/html5shiv-printshiv.js',
    //     ],
    //     dest: '<%= globalConfig.source.js %>/standalone'
    // },

    // Copy plugins
    // plugins: {
    //     src: [

    //     ],
    //     dest: '<%= globalConfig.source.js %>/vendor/plugins'
    // },

    // Copy development scripts
    // dev: {
    //     src: [
    //
    //     ],
    //     dest: '<%= globalConfig.source.js %>/dev'
    // },

    // Copy head plugins
    // head: {
    //     src: [
    //         'fontfaceobserver/fontfaceobserver.js',
    //     ],
    //     dest: '<%= globalConfig.source.js %>/head/vendor'
    // },

    // Copy vendor CSS files as SCSS files
    // css: {
    //     options: {
    //         destPrefix: '<%= globalConfig.source.css %>/vendor'
    //     },
    //     files: {
    //         'example.scss': 'example/dist/example.css'
    //     }
    // }
};
