export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6180595de33778176e0e6cb3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-i9u38a73',
                  apiId: '4b52b248-a548-4fc3-a270-875c18b59685'
                },
                {
                  buildHookId: '6180595de33778194c0e6eec',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-kynda5sn',
                  apiId: 'ee1ffe7d-e3e7-4800-b6c3-da084bc2e2a7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nonlogos/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-kynda5sn.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
