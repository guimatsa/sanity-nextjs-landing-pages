export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6141c88e0ddc52170484703d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sc8vrqbo',
                  apiId: '29c54456-7dae-43fe-a8ee-2563b1e0c801'
                },
                {
                  buildHookId: '6141c88e6a3deb16f1c0e25e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qyyg2fzx',
                  apiId: '3b2aa82b-20cf-4157-be8a-1930293ce320'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/guimatsa/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qyyg2fzx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
