module.exports = {
    options: {
      force: true
    },
    jsDist: {
        src: [
            '<%= globalConfig.dist.js %>/**/*'
        ]
    }
};
