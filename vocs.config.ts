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
      text: 'Onchain BORGs',
      collapsed: false, 
      items: [ 
        {
          text: 'Intro to BORGs',
          link: '/borgs/intro-to-borgs',
        },
        {
          text: 'BORG Modes',
          link: '/borg-modes',
          collapsed: false,
          items: [
            {
            text: 'Unrestricted // Open',
            link: '/borg-modes/Unrestricted',
          },
          {
            text: 'Blacklist // Light Control',
            link: '/borg-modes/blacklist',
          },
          {
            text: 'Whitelist // Maximal Control',
            link: '/borg-modes/whitelist',
          },
          ]
        },
        {
          text: 'Implants',
          link: 'borgs/implants',
        },
        {
          text: 'Implants',
          link: 'borgs/conditions',
        }, 
      ], 
    },
    {
      text: 'MetaVesT',
    },
    {
      text: 'LexScrow',
    }
  ],
})
