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
                  buildHookId: '5d27d36721ab946e4990372d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-rs7hioza',
                  apiId: '36cd7937-0430-4a28-bdcb-da2e453f2eb6'
                },
                {
                  buildHookId: '5d27d36759f897b22175d244',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hsvt44i6',
                  apiId: 'c793635d-a90d-40bf-ade8-23a85694d4a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/saravanks/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hsvt44i6.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
