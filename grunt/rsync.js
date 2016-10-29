module.exports = {
    options: {
        exclude: ['.git*','*.scss','node_modules'],
        recursive: true,
        dryRun: false
    },
    stage: {
        options: {
            args: ['--verbose --perms --compress'],
            src: '<%= globalConfig.public.public %>/',
            host: '<%= globalConfig.stage.host %>',
            dest: '<%= globalConfig.stage.dest %>',
            delete: true // Careful this option could cause data loss, read the docs!
        }
    },
    export: {
        options: {
            args: ['--verbose --perms --compress'],
            src: '<%= globalConfig.export.export %>/',
            host: '<%= globalConfig.stage.host %>',
            dest: '<%= globalConfig.stage.dest %>',
            delete: true // Careful this option could cause data loss, read the docs!
        }
    }
};
