import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x0812EEBCd567a26b53B34900dC412Fe7Fc8e557c',
        
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x0812EEBCd567a26b53B34900dC412Fe7Fc8e557c',
        
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'IfoIcon',
    href: '/pools',
  },
  
  {
    label: 'SMURF Chart',
    icon:  'InfoIcon',
    href: 'https://dex.guru/token/0x0812EEBCd567a26b53B34900dC412Fe7Fc8e557c-bsc',
    
  },

  {
    label: 'Info',
    icon: 'LanguageIcon',
    items: [     
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x0812EEBCd567a26b53B34900dC412Fe7Fc8e557c',        
      },

      {
        label: 'Twitter',
        href: 'https://twitter.com/SmurfMoneyBSC',        
      },

      {
        label: 'Telegram',
        href: 'https://t.me/SmurfMoneyBSC',        
      },
     
    ],
  },

  {
    label: 'COUNTDOWN',
    icon:  'MoreIcon',
    href: 'https://bscscan.com/block/countdown/7622222',
    
  },

  {
    label: '"RugDoctor" Review',
    icon:  'AuditIcon',
    href: 'https://docs.google.com/spreadsheets/d/1POnoeD6A0_Z8IBonxp5g_gkzU7QWA3ypQX6KT8uNbRI',
    
  },

 
]

export default config
