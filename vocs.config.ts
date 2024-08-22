import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'MetaLeX OS Docs',
  sidebar: [
    {
      text: 'MetaLeX OS',
      collapsed: false,
      items: [
        {
          text: 'Introduction',
          link: '/os/metalex-os-intro',
        },
        {
          text: 'DAO Landing Page',
          link: '/os/dao/dao-landing',
          items: []
        },
        {
          text: 'BORG Landing Page',
          link: '/os/borg/borg-landing',
          collapsed: false, 
          items: [
            {
              text: 'BORG Types',
              link: '/os/borg/borg-types',
              collapsed: true, 
              items: [
                {
                  text: 'grantsBORG',
                  link: '/os/borg/borg-types/grantsborg',
                },
                {
                  text: 'devBORG',
                  link: '/os/borg/borg-types/devborg',
                },
                {
                  text: 'securityBORG',
                  link: '/os/borg/borg-types/securityborg',
                }
              ]
            }
          ]
        }
      ],
    },
    {
      text: 'Intro to BORGs',
      link: '/intro-to-borgs',
      collapsed: false, 
      items: [ 
        {
          text: 'Onchain BORGs',
          link: '/onchain-borgs',
        },
        {
          text: 'BORG Types',
          link: '/borg-types',
        },
        {
          text: 'Implants',
          link: '/implants',
        },
        {
          text: 'Implants',
          link: '/conditions',
        }, 
      ], 
    },
  ],
})
