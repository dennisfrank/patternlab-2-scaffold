module.exports = {
    bsFiles: {
        src: [
            '<%= globalConfig.public.public %>/**/*',
            //'!<%= globalConfig.public.public %>/*',
            //'!<%= globalConfig.public.public %>/patterns/**/*',
            //'!<%= globalConfig.public.public %>/styleguide/**/*'
        ]
    },
    options: {
        watchTask: true,
        port: 8000,
        ui: {
            port: 8001
        },
        server: {
            baseDir: './<%= globalConfig.public.public %>/'
        },
        ghostMode: false,
        notify: false,
        open: false,
        injectChanges: true,

        plugins: [
          {
            module: 'bs-html-injector',
            options: {
              files: [
                '<%= globalConfig.public.public %>/index.html',
                '<%= globalConfig.public.styleguide %>/styleguide.html',
              ]
            }
          }
        ]

    }
};
