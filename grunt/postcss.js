module.exports = {
    options: {
        processors: [
            require('autoprefixer')({
                browsers: [
                    'last 3 version',
                    'ie 8',
                    'ie 9',
                    'ie 10',
                    'ie 11'
                ]
            }),
            require('postcss-svg')({
                paths: [
                    'public/assets/svg'
                ],
            }),
        ]
    },
    dev: {
        options: {
            map: true
        },
        expand: true,
        flatten: true,
        cwd: '<%= globalConfig.public.css %>/',
        src: '**/*.css',
        dest: '<%= globalConfig.public.css %>/',
    },
    dist: {
        options: {
            processors: [
                require('cssnano')({
                    safe: true
                })
            ]
        },
        expand: true,
        flatten: true,
        extDot: 'last',
        cwd: '<%= globalConfig.public.css %>/',
        src: [
            '**/*.css',
            '!styleguide.css'
        ],
        dest: '<%= globalConfig.dist.css %>/',
        ext: '.min.css'
    }
};
