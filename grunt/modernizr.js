module.exports = {
    dist: {
        'crawl': false,
        'dest': '<%= globalConfig.source.js %>/vendor/plugins/modernizr-custom.js',
        'customTests': [],
        'classPrefix': 'mz-',
        'tests': [
            //'objectfit'
        ],
        'options': [
            'setClasses'
        ],
        'uglify': false
    }
};
