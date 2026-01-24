import { defineConfig } from 'vocs'
import path from 'path';

export default defineConfig({
  title: 'MetaLeX OS Docs',
  sidebar: [

        {
          text: '👋 Introduction',
          link: '/metalex-os-intro',
        },
        {
          text: '🔑 Key Terms',
          link: '/key-terms',
        },
        {
          text: '❓ FAQ',
          link: '/faq',
        },
        {
          text: '🤖 BORGs',
          collapsed: true,
          items: [
            {
              text: 'BORGs OS',
                link: '/borg/BORGs-OS',
            },
            {
              text: 'What is a BORG?',
                link: '/borg/what-is-a-BORG',
            },
            {
              text: 'Legal Approach',
                link: '/borg/legal-approach',
            },
            {
              text: 'borgCORE',
                link: '/borg/borg-core',
            },
            {
              text: 'Borg Auth',
              link: '/borg/borg-auth',
            },
            {
              text: 'BORG Modes',
                link: '/borg/borg-modes',
              collapsed: true,
              items: [
                {
                  text: 'Unrestricted',
                    link: '/borg/borg-modes/unrestricted',
                },
                {
                  text: 'Blacklist',
                    link: '/borg/borg-modes/blacklist',
                },
                {
                  text: 'Whitelist',
                    link: '/borg/borg-modes/whitelist',
                },
              ],
            },
            {
              text: 'Implants',
                link: '/borg/implants',
              collapsed: true,
              items: [
                {
                  text: 'FailSafe',
                  link: '/borg/implants/fail-safe',
                },
                {
                  text: 'Eject',
                  link: '/borg/implants/eject',
                },
                {
                  text: 'Optimistic Grant',
                  link: '/borg/implants/optimistic-grant',
                },
                {
                  text: 'DAO Veto Grant',
                  link: '/borg/implants/dao-veto-grant',
                },
                {
                  text: 'DAO Vote Grant',
                  link: '/borg/implants/dao-vote-grant',
                },
              ],
            },
            {
              text: 'Conditions',
              link: '/borg/conditions',
            },
            {
              text: 'Governance Adapters',
              link: '/borg/governance-adapters',
            },
            {
              text: 'Helpers',
              link: '/borg/helpers',
            },
            {
              text: 'Hooks',
              link: '/borg/hooks',
            },
            {
              text: '📋 BORG Types',
              collapsed: true,
              items: [
                {
                  text: 'Overview',
                  link: '/borg/borg-types',
                },
                {
                  text: 'grantsBORG',
                  link: '/borg/borg-types/grantsborg',
                },
                {
                  text: 'devBORG',
                  link: '/borg/borg-types/devborg',
                },
                {
                  text: 'securityBORG',
                  link: '/borg/borg-types/securityborg',
                },
                {
                  text: 'finBORG',
                  link: '/borg/borg-types/finborg',
                },
                {
                  text: 'genBORG',
                  link: '/borg/borg-types/genborg',
                },
                {
                  text: 'bizBORG (cyberCORP)',
                  link: '/borg/borg-types/bizborg',
                },
              ],
            },
            {
              text: '💻 BORG Command Center',
              collapsed: true,
              items: [
                {
                  text: '📝 "How-to" BORG',
                  link: '/borg/how-to',
                },
                {
                  text: '💼 BORG Members',
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
                  ],
                },
                {
                  text: '🗳️ DAO Token Holders',
                  collapsed: true,
                  items: [
                    {
                      text: 'Initiate a DAO Vote',
                        link: '/borg/borg-types/grantsborg',
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
          text: '🏢 cyberCORPs',
          collapsed: true,
          items: [
            {
              text: 'cyberCORPs OS',
              link: '/cybercorps/cybercorps-os',
            },
            {
              text: 'What is a cyberCORP?',
              link: '/cybercorps/what-is-a-cyberCORP',
            },
            {
              text: 'Onchain Capital Structure',
              link: '/cybercorps/onchain-capital-structure',
              collapsed: true,
              items: [
                {
                  text: 'Core Components',
                  link: '/cybercorps/onchain-capital-structure/core-components',
                },
                {
                  text: 'Tokenized Stock Certificates',
                  link: '/cybercorps/onchain-capital-structure/tokenized-stock-certificates',
                },
                {
                  text: 'Transfer Restrictions',
                  link: '/cybercorps/onchain-capital-structure/transfer-restrictions',
                },
                {
                  text: 'Corporate Actions',
                  link: '/cybercorps/onchain-capital-structure/corporate-actions',
                },
                {
                  text: 'Benefits',
                  link: '/cybercorps/onchain-capital-structure/benefits',
                },
              ],
            },
            {
              text: 'Governance and Officers',
              link: '/cybercorps/governance-and-officers',
            },
            {
              text: 'Launching a cyberCORP',
              link: '/cybercorps/launching-a-cybercorp',
            },
            {
              text: 'Future Integrations',
              link: '/cybercorps/future-integrations',
            },
            {
              text: 'Sources',
              link: '/cybercorps/sources',
            },
          ],
        },
        {
          text: '🤝 cyberDeals',
          collapsed: true,
          items: [
            {
              text: 'cyberRaise',
              link: '/cyberdeals/cyberraise',
            },
            {
              text: 'LeXcheX',
              link: '/cyberdeals/lexchex',
            },
            {
              text: 'MetaVesT',
              link: '/cyberdeals/metavest',
            },
            {
              text: 'LeXscroW',
              link: '/cyberdeals/lexscrow',
            },
          ],
        },
        {
          text: '⚖️ Cybernetic Law',
          collapsed: true,
          items: [
            {
              text: 'Intro to Cybernetic Law',
              link: '/cybernetic-law/intro-to-cybernetic-law',
            },
            {
              text: 'Legal Document Signing',
              link: '/protocol/legal-document-signing',
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
