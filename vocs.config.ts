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
          text: 'Key Terms',
          link: '/os/key-terms',
        },
        {
          text: 'Intro to BORGs',
          link: '/os/dao/intro-to-borgs',
          items: []
        },
        {
          text: 'BORG Command Center',
          link: '/os/borg/borg-landing',
          collapsed: false, 
          items: [
            {
              text: '"How-to" BORG',
              link: '/os/borg/how-to',
              collapsed: false, 
              items: [
                {
                  text: 'BORG Members',
                  link: '/os/borg/borg-types/grantsborg',
                  collapsed: true,
                  items: [
                    {
                      text: 'Propose a transaction',
                    },
                    {
                      text: 'Manage members',
                    },
                    {
                      text: 'Manage Documents',
                    },
                    
                  ]
                },
                {
                  text: 'DAO Token Holders',
                  link: '/os/borg/borg-types/devborg',
                  items: [
                    {
                      text: 'Initiate a DAO Vote',
                    },
                    {
                      text: 'Eject a BORG member',
                    },
                    {
                      text: 'Update a BORG\'s policy',
                    },
                    {
                      text: 'Recover DAO funds',
                    },
                  ]
                },
              ]
            },
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
                  text: 'securityBORG (coming soon)',
                  link: '/os/borg/borg-types/securityborg',
                },
                {
                  text: 'finBORG (coming soon)',
                  link: '/os/borg/borg-types/finborg',
                },
                {
                  text: 'genBORG (coming soon)',
                  link: '/os/borg/borg-types/genborg',
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
          text: 'Intro to Onchain BORGs',
          link: '/borgs/intro-to-borgs',
        },
        {
          text: 'borgCORE',
          link: '/borgs/borg-core',
        },
        {
          text: 'BORG Modes',
          link: '/borgs/borg-modes',
          collapsed: false,
          items: [
            {
            text: 'Unrestricted',
            link: '/borgs/borg-modes/Unrestricted',
          },
          {
            text: 'Blacklist',
            link: '/borgs/borg-modes/blacklist',
          },
          {
            text: 'Whitelist',
            link: '/borgs/borg-modes/whitelist',
          },
          ]
        },
        {
          text: 'Implants',
          link: '/borgs/implants',
          collapsed: true,
          items: [
            {
              text: 'FailSafe',
              link: '/borgs/implants/fail-safe',
            },
            {
              text: 'Eject',
              link: '/borgs/implants/eject',
            },
            {
              text: 'Optimistic Grant',
              link: '/borgs/implants/optimistic-grant',
            },
            {
              text: 'DAO Veto Grant',
              link: '/borgs/implants/dao-veto-grant',
            },
            {
              text: 'DAO Vote Grant',
              link: '/borgs/implants/dao-vote-grant',
            },
          ]
        },
        {
          text: 'Conditions',
          link: '/borgs/conditions',
        }, 
      ], 
    },
    {
      text: 'MetaVesT (Coming Soon)',
    },
    {
      text: 'LexScrow (Coming Soon)',
    }
  ],
})
