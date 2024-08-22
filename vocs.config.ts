import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'MetaLeX OS Docs',
  sidebar: [
    {
      text: 'MetaLeX OS',
      link: '/onchain-borgs',
    },
    {
      text: 'Intro to BORGs',
      link: '/intro-to-borgs',
      collapsed: true, 
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
