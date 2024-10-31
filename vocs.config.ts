import { defineConfig } from 'vocs'
import path from 'path';
import { FaRegHandSpock } from "react-icons/fa6";

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
          text: '😎 What is a BORG?',
          link: '/os/dao/intro-to-borgs',
        },
        {
          text: '🔑 Key Terms',
          link: '/os/key-terms',
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
              text: 'bzBORG',
              link: '/os/borg/borg-types/genborg',
            }
          ]
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
                
              ]
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
              ]
            },
          ]
        },
      ],
    },
    {
      text: '⛓️ Onchain BORGs',
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
  vite: {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./docs/components"),
      },
    },
  },
})
