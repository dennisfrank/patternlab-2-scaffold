module.exports = {
    scss: {
        files: ['<%= globalConfig.source.css %>/**/{.*,*,*/*}'],
        tasks: ['sass_globbing', 'sass', 'postcss:dev', 'todo:hideOutput']
    },
    js: {
        files: ['<%= globalConfig.source.js %>/**/{.*,*,*/*}'],
        tasks: ['sync:jsPublic', 'todo:hideOutput']
    },
    img: {
        files: ['<%= globalConfig.source.img %>/**/{.*,*,*/*}'],
        tasks: ['sync:imgPublic', 'imagemin:imgPublic']
    },
    contentimg: {
        files: ['<%= globalConfig.source.contentimg %>/**/{.*,*,*/*}'],
        tasks: ['sync:contentImgPublic', 'imagemin:contentImgPublic']
    },
    fonts: {
        files: ['<%= globalConfig.source.fonts %>/**/{.*,*,*/*}'],
        tasks: ['sync:fontsPublic']
    },
    icons: {
        files: ['<%= globalConfig.source.icons %>/**/{.*,*,*/*}'],
        tasks: ['sync:iconsPublic', 'imagemin:iconsPublic', 'svgstore:icons', 'svginjector']
    },
    svg: {
        files: ['<%= globalConfig.source.svg %>/**/{.*,*,*/*}'],
        tasks: ['sync:svgPublic', 'imagemin:svgPublic']
    },
    patternlab: {
        files: [
              '<%= globalConfig.source.patterns %>/**/{.*,*,*/*}',
              '<%= globalConfig.source.data %>/**/{.*,*,*/*}',
              '<%= globalConfig.source.meta %>/**/{.*,*,*/*}',
              '<%= globalConfig.source.annotations %>/**/{.*,*,*/*}'
        ],
        tasks: ['patternlab']
    },
    docs: {
        files: ['<%= globalConfig.docs.docs %>/**/{.*,*,*/*}'],
        tasks: ['todo:hideOutput']
    }
};
