module.exports = {
    options: {
      //prefix : 'icon-',
      svg: {
        xmlns: 'http://www.w3.org/2000/svg',
        style: 'position: absolute; width: 0; height: 0;',
        width: '0',
        height: '0'
      },
      includeTitleElement: false, // because Illustrator’s default title sucks
      //includedemo: true,
      convertNameToId: function(name) {
        return name.replace(/^/, 'icon-');
      }

    },
    icons: {
        files: {
          //'<%= globalConfig.public.icons %>/icons.svg': ['<%= globalConfig.public.icons %>/*.svg'],
          '<%= globalConfig.source.source %>/_patterns/10-atoms/00-icon-defs/_00-icon-defs.mustache': ['<%= globalConfig.public.icons %>/*.svg'],
        },
    },
};
