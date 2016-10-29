module.exports = {
    dev: {
        files: {
            '<%= globalConfig.source.css %>/_IMPORTS/_settings.imports.scss': '<%= globalConfig.source.css %>/settings/**/*.scss',
            '<%= globalConfig.source.css %>/_IMPORTS/_tools.imports.scss': '<%= globalConfig.source.css %>/tools/**/*.scss',
            '<%= globalConfig.source.css %>/_IMPORTS/_generic.imports.scss': '<%= globalConfig.source.css %>/generic/**/*.scss',
            '<%= globalConfig.source.css %>/_IMPORTS/_elements.imports.scss': '<%= globalConfig.source.css %>/elements/**/*.scss',
            '<%= globalConfig.source.css %>/_IMPORTS/_objects.imports.scss': '<%= globalConfig.source.css %>/objects/**/*.scss',
            '<%= globalConfig.source.css %>/_IMPORTS/_vendor.imports.scss': '<%= globalConfig.source.css %>/vendor/**/*.scss',
            '<%= globalConfig.source.css %>/_IMPORTS/_components.imports.scss': '<%= globalConfig.source.css %>/components/**/*.scss',
            '<%= globalConfig.source.css %>/_IMPORTS/_plugins.imports.scss': '<%= globalConfig.source.css %>/plugins/**/*.scss',
            '<%= globalConfig.source.css %>/_IMPORTS/_utilities.imports.scss': '<%= globalConfig.source.css %>/utilities/**/*.scss'
        }
    }
};
