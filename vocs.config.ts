import { defineConfig } from 'vocs'
import path from 'path';

export default defineConfig({
  title: 'MetaLeX OS Docs',
  sidebar: [
    {
      text: '🖖 MetaLeX OS',
      link: '/',
      collapsed: false,
      items: [
        {
          text: '👋 Introduction',
          link: '/os/metalex-os-intro',
        },
        {
          text: '🔑 Key Terms',
          link: '/os/key-terms',
        },
        {
          text: '🤖 BORGs',
          collapsed: false,
          items: [
            {
              text: '😎 What is a BORG?',
              link: '/os/dao/intro-to-borgs',
            },
            {
              text: 'borgCORE',
              link: '/os/borg/borg-core',
            },
            {
              text: 'BORG Modes',
              link: '/os/borg/borg-modes',
              collapsed: false,
              items: [
                {
                  text: 'Unrestricted',
                  link: '/os/borg/borg-modes/unrestricted',
                },
                {
                  text: 'Blacklist',
                  link: '/os/borg/borg-modes/blacklist',
                },
                {
                  text: 'Whitelist',
                  link: '/os/borg/borg-modes/whitelist',
                },
              ],
            },
            {
              text: 'Implants',
              link: '/os/borg/implants',
              collapsed: true,
              items: [
                {
                  text: 'FailSafe',
                  link: '/os/borg/implants/fail-safe',
                },
                {
                  text: 'Eject',
                  link: '/os/borg/implants/eject',
                },
                {
                  text: 'Optimistic Grant',
                  link: '/os/borg/implants/optimistic-grant',
                },
                {
                  text: 'DAO Veto Grant',
                  link: '/os/borg/implants/dao-veto-grant',
                },
                {
                  text: 'DAO Vote Grant',
                  link: '/os/borg/implants/dao-vote-grant',
                },
              ],
            },
            {
              text: 'Conditions',
              link: '/os/borg/conditions',
            },
            {
              text: '📋 BORG Types',
              collapsed: false,
              items: [
                {
                  text: 'Overview',
                  link: '/os/borg/borg-types',
                },
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
                },
                {
                  text: 'finBORG',
                  link: '/os/borg/borg-types/finborg',
                },
                {
                  text: 'genBORG',
                  link: '/os/borg/borg-types/genborg',
                },
                {
                  text: 'bizBORG (cyberCORP)',
                  link: '/os/borg/borg-types/bizborg',
                },
              ],
            },
            {
              text: '💻 BORG Command Center',
              collapsed: false,
              items: [
                {
                  text: '📝 "How-to" BORG',
                  link: '/os/borg/how-to',
                },
                {
                  text: '💼 BORG Members',
                  collapsed: false,
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
                  ],
                },
                {
                  text: '🗳️ DAO Token Holders',
                  items: [
                    {
                      text: 'Initiate a DAO Vote',
                      link: '/os/borg/borg-types/grantsborg',
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
                  ],
                },
              ],
            },
          ],
        },
        {
          text: '⏳ MetaVesT',
          link: '/metavest',
        },
        {
          text: '🤝 LeXscroW',
          link: '/lexscrow',
        },
        {
          text: '⚖️ Cybernetic Law',
          collapsed: false,
          items: [
            {
              text: 'Intro to Cybernetic Law',
              link: '/cybernetic-law/intro-to-cybernetic-law',
            },
          ],
        },
      ],
    },
  ],
  vite: {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./docs/components"),
      },
    },
  },
})
