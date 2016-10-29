module.exports = {
    options: {
        includePaths: [
            'bower_components/'
        ],
        sourceMap: true,
        outputStyle: 'nested',
        sourceComments: true,

    },
    dev: {
        files: [{
            expand: true,
            flatten: true,
            extDot: 'last',
            cwd: '<%= globalConfig.source.css %>/',
            src: [
                '**/main.scss',
                '**/*.main.scss'
            ],
            dest: '<%= globalConfig.public.css %>/',
            ext: '.css'
        }]
    },
    devStyleguide: {
        options: {
            sourceComments: false,
        },
        files: [{
            expand: true,
            flatten: true,
            extDot: 'last',
            cwd: '<%= globalConfig.source.css %>/',
            src: [
                'styleguide.scss',
            ],
            dest: '<%= globalConfig.public.css %>/',
            ext: '.css'
        }]
    },
};
