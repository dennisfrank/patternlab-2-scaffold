module.exports = {
    options: {
        lineEnding: '\n',
        ignorePath: ['source', 'export', 'dist'],
        addRootSlash: false,
        transform: function(file, index, length) {
            return '<script src="../../' + file + '"></script>';
        }
    },
    js: {
        options: {
            destFile: '<%= globalConfig.source.meta %>/_01-foot.mustache',
        },
        expand: true,
        cwd: '<%= globalConfig.source.js %>',
        src: [
            'vendor/libs/**/*.js',
            'vendor/plugins/**/*.js',
            'scripts/**/*.js',
            '*.js'
        ]
    },
    jsExport: {
        options: {
            destFile: '<%= globalConfig.source.meta %>/_01-foot.mustache',
            starttag: '<!-- injector:js -->'
        },
        expand: true,
        cwd: '<%= globalConfig.dist.js %>',
        src: ['app.min.js']
    },
    jsHead: {
        options: {
            destFile: '<%= globalConfig.source.meta %>/_00-head.mustache',
            starttag: '<!-- injector:js:head -->'
        },
        expand: true,
        cwd: '<%= globalConfig.source.js %>/head',
        src: [
            'vendor/**/*.js',
            'scripts/**/*.js',
            '*.js'
        ]
    },
    jsHeadStandalone: {
        options: {
            min: true,
            destFile: '<%= globalConfig.source.meta %>/_00-head.mustache',
            starttag: '<!-- injector:js:head:standalone -->'
        },
        expand: true,
        cwd: '<%= globalConfig.source.js %>',
        src: [
            'standalone/**/*.js',
        ]
    },
    jsHeadExport: {
        options: {
            min: true,
            destFile: '<%= globalConfig.source.meta %>/_00-head.mustache',
            starttag: '<!-- injector:js:head -->'
        },
        expand: true,
        cwd: '<%= globalConfig.dist.js %>',
        src: ['head.min.js']
    },
    jsHeadStandaloneExport: {
        options: {
            min: true,
            destFile: '<%= globalConfig.source.meta %>/_00-head.mustache',
            starttag: '<!-- injector:js:head:standalone -->'
        },
        expand: true,
        cwd: '<%= globalConfig.export.js %>',
        src: [
            'html5shiv-printshiv.min.js',
            'html5shiv.min.js',
        ]
    }
};
