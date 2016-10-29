module.exports = {
    options: {
        title: "There are always things to do…",
        file: "TODO.md",
        usePackage: true,
        githubBoxes: true
    },
    showOutput: {
        src: [
            '<%= globalConfig.source.source %>/**/*',
            '!<%= globalConfig.source.js %>/vendor/**/*',
            '!<%= globalConfig.source.css %>/vendor/**/*'
        ]
    },
    hideOutput: {
        options: {
            logOutput: false
        },
        src: [
            '<%= globalConfig.source.source %>/**/*',
            '!<%= globalConfig.source.js %>/vendor/**/*',
            '!<%= globalConfig.source.css %>/vendor/**/*'
        ]
    }

};
