module.exports = {
    options: {
        optimizationLevel: 3,
        svgoPlugins: [{
            removeViewBox: false
        }, ]
    },
    imgPublic: {
        files: [{
            expand: true,
            cwd: '<%= globalConfig.public.img %>/',
            src: ['**/*.{png,jpg,jpeg,gif,svg}'],
            dest: '<%= globalConfig.public.img %>/'
        }]
    },
    contentImgPublic: {
        files: [{
            expand: true,
            cwd: '<%= globalConfig.public.contentimg %>/',
            src: ['**/*.{png,jpg,jpeg,gif,svg}'],
            dest: '<%= globalConfig.public.contentimg %>/'
        }]
    },
    svgPublic: {
        files: [{
            expand: true,
            cwd: '<%= globalConfig.public.svg %>/',
            src: ['**/*.svg'],
            dest: '<%= globalConfig.public.svg %>/'
        }]
    },
    iconsPublic: {
        files: [{
            expand: true,
            cwd: '<%= globalConfig.public.icons %>/',
            src: ['**/*.svg'],
            dest: '<%= globalConfig.public.icons %>/'
        }]
    }
};
