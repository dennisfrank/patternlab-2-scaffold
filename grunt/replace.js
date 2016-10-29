module.exports = {
    htmlMinCssLink: {
        options: {
            patterns: [{
                match: /(<link.+main)(\.css)/,
                replacement: '$1.min$2'
            }]
        },
        files: [
            {
                cwd: '<%= globalConfig.export.export %>/patterns/',
                expand: true,
                src: ['**/*.html'],
                dest: '<%= globalConfig.export.export %>/patterns/'
            },
            {
                cwd: '<%= globalConfig.export.export %>/styleguide/',
                expand: true,
                src: ['**/*.html'],
                dest: '<%= globalConfig.export.export %>/styleguide/'
            }
        ]
    },
    injectorStartComment: {
        options: {
            patterns: [{
                match: /.*<!-- injector.*-->.*/g,
                replacement: ''
            }]
        },
        files: [
            {
                cwd: '<%= globalConfig.export.export %>/patterns/',
                expand: true,
                src: ['**/*.html'],
                dest: '<%= globalConfig.export.export %>/patterns/'
            }
        ]
    },
    injectorEndComment: {
        options: {
            patterns: [{
                match: /.*<!-- endinjector -->.*/g,
                replacement: ''
            }]
        },
        files: [
            {
                cwd: '<%= globalConfig.export.export %>/patterns/',
                expand: true,
                src: ['**/*.html'],
                dest: '<%= globalConfig.export.export %>/patterns/'
            }
        ]
    }
};
