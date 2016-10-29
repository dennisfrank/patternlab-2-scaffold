module.exports = {
    options: {
        separator: ' ',
        nonull: true
    },
    js: {
        src: [
            '<%= globalConfig.source.js %>/vendor/libs/**/*.js',
            '<%= globalConfig.source.js %>/vendor/plugins/**/*.js',
            '<%= globalConfig.source.js %>/scripts/**/*.js',
            '<%= globalConfig.source.js %>/*.js'
        ],
        dest: '<%= globalConfig.dist.js %>/app.js'
    },
    jsHead: {
        src: [
            '<%= globalConfig.source.js %>/head/vendor/**/*.js',
            '<%= globalConfig.source.js %>/head/scripts/**/*.js',
        ],
        dest: '<%= globalConfig.dist.js %>/head.js'
    }
};
