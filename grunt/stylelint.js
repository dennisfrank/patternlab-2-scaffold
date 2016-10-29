module.exports = {
    scss: {
        options: {
            configFile: '.stylelintrc',
            format: 'scss',
        },
        src: [
            '<%= globalConfig.source.css %>/**/*.{scss,sass}',
            '!<%= globalConfig.source.css %>/_IMPORTS/**/*.scss',
            '!<%= globalConfig.source.css %>/styleguide.scss',
            '!<%= globalConfig.source.css %>/vendor/**/*.{scss,sass}'
        ]
    }
};
