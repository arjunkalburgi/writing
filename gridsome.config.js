// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Arjun Kalburgi Blog',
  siteDescription: 'I write about my experiences and learnings. Sometimes I post my creative expressions, experiments and ideas, all in the name of sharing and expressing myself.',
  icon: './src/assets/pics/Black.png',
  siteUrl: 'https://www.arjunkalburgi.com/writing',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/posts/**/*.md',
        typeName: 'Post',
        route: ':title'
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        'gridsome-plugin-remark-prismjs-all',
      ]
    }
  }
}
