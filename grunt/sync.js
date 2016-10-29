module.exports = {
    patternlab: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.styleguide %>',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.public.public %>'
            }
        ],
        updateAndDelete: true,
        compareUsing: "md5",
    },
    export: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.public.public %>',
                src: [
                    '**',
                    '!**/assets/**',
                    '**/assets/css/styleguide.css'
                ],
                dest: '<%= globalConfig.export.export %>'
            },
            {
                expand: true,
                cwd: '<%= globalConfig.dist.assets %>',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.export.assets %>'
            }
        ],
        updateAndDelete: true,
        compareUsing: "md5"
    },
    templates: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.export.export %>',
                src: [
                    '**',
                    '!**/assets/**'
                ],
                dest: '<%= globalConfig.export.export %>'
            },
            {
                expand: true,
                cwd: '<%= globalConfig.dist.assets %>',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.export.assets %>'
            }
        ],
        updateAndDelete: true,
        compareUsing: "md5"
    },
    jsPublic: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.js %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.public.js %>/'
            }
        ],
        updateAndDelete: true,
        compareUsing: "md5"
    },
    jsDist: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.js %>/standalone',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.dist.js %>/'
            }
        ],
        compareUsing: "md5"
    },
    imgPublic: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.img %>/',
                src: [
                    '**',
                    '!**/*.psd'
                ],
                dest: '<%= globalConfig.public.img %>/'
            }
        ],
        updateAndDelete: true,
        compareUsing: "md5"
    },
    imgDist: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.public.img %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.dist.img %>/'
            }
        ],
        updateAndDelete: true,
        compareUsing: "md5"
    },
    contentImgPublic: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.contentimg %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.public.contentimg %>/'
            }
        ],
        updateAndDelete: true,
        compareUsing: "md5"
    },
    iconsPublic: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.icons %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.public.icons %>/'
            }
        ],
        updateAndDelete: true,
        compareUsing: "md5"
    },
    iconsDist: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.public.icons %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.dist.icons %>/'
            }
        ],
        updateAndDelete: true,
        compareUsing: "md5"
    },
    svgPublic: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.svg %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.public.svg %>/'
            }
        ],
        updateAndDelete: true,
        compareUsing: "md5"
    },
    svgDist: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.public.svg %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.dist.svg %>/'
            }
        ],
        updateAndDelete: true,
        compareUsing: "md5"
    },
    fontsPublic: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.source.fonts %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.public.fonts %>/'
            }
        ],
        updateAndDelete: true,
        compareUsing: "md5"
    },
    fontsDist: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.public.fonts %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.dist.fonts %>/'
            }
        ],
        updateAndDelete: true,
        compareUsing: "md5"
    },
    cmsAssets: {
        files: [
            {
                expand: true,
                cwd: '<%= globalConfig.dist.assets %>/',
                src: ['./**/*.*'],
                dest: '<%= globalConfig.cms.assets %>/',
            }
        ],
        ignoreInDest: [
          './{<%= globalConfig.cms.ignoreAssetsPaths %>}',
          '{<%= globalConfig.cms.ignoreAssetsPaths %>}/**/*.*',
        ],
        updateAndDelete: true,
        compareUsing: "md5",
    }
};
