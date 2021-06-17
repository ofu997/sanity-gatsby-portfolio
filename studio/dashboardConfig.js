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
                  buildHookId: '60cadb130a4eb87b11aa3aef',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-eajqm8yo',
                  apiId: '66b65c06-58dc-4a29-b548-26be6c370739'
                },
                {
                  buildHookId: '60cadb13e8c5de8355bfb490',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ka33s48a',
                  apiId: 'dadc9b71-bfea-4c62-b96c-6d0f980e30ed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ofu997/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ka33s48a.netlify.app',
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
