module.exports = function(grunt) {

    /******************************************************
     * PATTERN LAB CONFIGURATION
    ******************************************************/

    var path = require('path'),
        argv = require('minimist')(process.argv.slice(2));

    // read all paths from our namespaced config file
    var config = require('./patternlab-config.json'),
        pl = require('patternlab-node')(config);


    function paths() {
      return config.paths;
    }

    function getConfiguredCleanOption() {
      return config.cleanPublic;
    }

    grunt.registerTask('patternlab', 'create design systems with atomic design', function (arg) {

      if (arguments.length === 0) {
        pl.build(function(){}, getConfiguredCleanOption());
      }

      if (arg && arg === 'version') {
        pl.version();
      }

      if (arg && arg === "patternsonly") {
        pl.patternsonly(function(){},getConfiguredCleanOption());
      }

      if (arg && arg === "help") {
        pl.help();
      }

      if (arg && arg === "starterkit-list") {
        pl.liststarterkits();
      }

      if (arg && arg === "starterkit-load") {
        pl.loadstarterkit(argv.kit);
      }

      if (arg && (arg !== "version" && arg !== "patternsonly" && arg !== "help" && arg !== "starterkit-list" && arg !== "starterkit-load")) {
        pl.help();
      }
    });

    var globalConfig = {

        // Reference the source paths.
        source: {
            source: 'source',
            assets: '<%= globalConfig.source.source %>/assets',
            css: '<%= globalConfig.source.assets %>/scss',
            stylesheet: '<%= globalConfig.source.css %>/app.scss',
            js: '<%= globalConfig.source.assets %>/js',
            fonts: '<%= globalConfig.source.assets %>/fonts',
            img: '<%= globalConfig.source.assets %>/images',
            svg: '<%= globalConfig.source.assets %>/svg',
            icons: '<%= globalConfig.source.assets %>/icons',
            contentimg: '<%= globalConfig.source.source %>/images',
            patterns: '<%= globalConfig.source.source %>/_patterns',
            data: '<%= globalConfig.source.source %>/_data',
            data: '<%= globalConfig.source.source %>/_data',
            meta: '<%= globalConfig.source.source %>/_meta',
            annotations: '<%= globalConfig.source.source %>/_annotations',
            styleguide: 'node_modules/styleguidekit-assets-default/dist/',
        },
        // The Pattern Lab destination directory.
        public: {
            public: 'public',
            assets: '<%= globalConfig.public.public %>/assets',
            css: '<%= globalConfig.public.assets %>/css',
            stylesheet: '<%= globalConfig.public.css %>/app.css',
            js: '<%= globalConfig.public.assets %>/js',
            fonts: '<%= globalConfig.public.assets %>/fonts',
            img: '<%= globalConfig.public.assets %>/images',
            svg: '<%= globalConfig.public.assets %>/svg',
            icons: '<%= globalConfig.public.assets %>/icons',
            contentimg: '<%= globalConfig.public.public %>/images',
            styleguide: '<%= globalConfig.public.public %>/styleguide',
        },

        // Adjust these values to the assets destination paths of your dist folder
        dist: {
            dist: 'dist',
            assets: '<%= globalConfig.dist.dist %>/assets',
            css: '<%= globalConfig.dist.assets %>/css',
            stylesheet: '<%= globalConfig.dist.css %>/app.min.css',
            js: '<%= globalConfig.dist.assets %>/js',
            fonts: '<%= globalConfig.dist.assets %>/fonts',
            img: '<%= globalConfig.dist.assets %>/images',
            svg: '<%= globalConfig.dist.assets %>/svg',
            icons: '<%= globalConfig.dist.assets %>/icons',
        },

        export: {
            export: 'export',
            assets: '<%= globalConfig.export.export %>/assets',
            js: '<%= globalConfig.export.assets %>/js',
        },

        cms: {
            cms: '', // (relative) path to CMS public web root.
            assets: '<%= globalConfig.cms.cms %>/assets',
            ignoreAssetsPaths: '', // e. g. 'avatars,panel'
        },

        // Documentation.
        docs: {
            docs: 'docs',
        },

        // Staging server.
        stage: {
            host: '', // user@example.com
            dest: '',  // server path
        }

    };

    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        jitGrunt: {
            staticMappings: {
                sasslint: 'grunt-sass-lint',
            }
        },
        config: {
            globalConfig: globalConfig,
        }
    });


    // Default task.
    grunt.registerTask('default', [
        'clean:public',
        'clean:jsVendor',
        'sync:patternlab',
        'svgstore:icons',
        'patternlab',
        'bowerInject',
        'sync:contentImgPublic',
        'sync:imgPublic',
        'sync:iconsPublic',
        'sync:svgPublic',
        'sync:fontsPublic',
        'sync:jsPublic',
        'imagemin',
        'sass_globbing',
        'concurrent',
        'postcss:dev',
        'todo:showOutput',
    ]);

    // BrowserSync task.
    grunt.registerTask('serve', [
        'default',
        'browserSync',
        'watch'
    ]);

    // Linting task.
    grunt.registerTask('lint', [
        'stylelint',
    ]);

    // Bower components injection.
    grunt.registerTask('bowerInject', [
        'clean:jsVendor',
        //'modernizr',
        'bowercopy',
        'injector:js',
        'injector:jsHead',
        'injector:jsHeadStandalone',
    ]);

    // Uglify and concat js files.
    grunt.registerTask('scripts', [
        'concat',
        'cleanempty',
        'sync:jsDist',
        'uglify:jsDist',
        'clean:jsDist',
    ]);

    // Generate dist files.
    grunt.registerTask('dist', [
        'clean:dist',
        'default',
        'scripts',
        'sync:imgDist',
        //'sync:iconsDist',
        //'sync:svgDist',
        'sync:fontsDist',
        'postcss:dist',
    ]);

    // Generate export files.
    grunt.registerTask('export', [
        'dist',
        'clean:export',
        'injector:jsExport',
        'injector:jsHeadExport',
        'injector:jsHeadStandaloneExport',
        'patternlab',
        'sync:export',
        'replace:htmlMinCssLink',
        'replace:injectorStartComment',
        'replace:injectorEndComment',
        'dist' // reset source/dist changes made by this export task
    ]);

    // Sync dist assets to cms.
    grunt.registerTask('cms', [
        'dist',
        'sync:cmsAssets',
    ]);

    // Deploy public.
    grunt.registerTask('deploy', [
        'default',
        'rsync:stage',
    ]);

    // Deploy export.
    grunt.registerTask('deploy:export', [
        'export',
        'rsync:export',
    ]);

};
