import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'SMURF-BUSD LP v2',
    lpAddresses: {
      97: '',
      56: '0xB7C3e378226a88A6e0E79b41Dc7633fE65976D82',
    },
    tokenSymbol: 'SMURF',
    tokenAddresses: {
      97: '',     
      56: '0x0812EEBCd567a26b53B34900dC412Fe7Fc8e557c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 22,
    risk: 5,
    lpSymbol: 'SMURF-BNB LP v2',
    lpAddresses: {
      97: '',
      56: '0xE79355db9944cd9610BBD4975efe7e4B21f54794',      
    },
    tokenSymbol: 'SMURF',
    tokenAddresses: {
      97: '',
      56: '0x0812EEBCd567a26b53B34900dC412Fe7Fc8e557c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'SMURF',
    lpAddresses: {
      97: '',
      56: '0xB7C3e378226a88A6e0E79b41Dc7633fE65976D82', // SMURF-BUSD
    },
    tokenSymbol: 'SMURF',
    tokenAddresses: {
      97: '',
      56: '0x0812EEBCd567a26b53B34900dC412Fe7Fc8e557c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
  pid: 3,
  risk: 5,
  lpSymbol: 'BNB-BUSD LP v2',
  lpAddresses: {
    97: '',
    56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
  },
  tokenSymbol: 'BNB',
  tokenAddresses: {
    97: '',
    56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},

{
  pid: 4,
  risk: 5,
  lpSymbol: 'BNB-USDT LP v2',
  lpAddresses: {
    97: '',
    56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
  },
  tokenSymbol: 'USDT',
  tokenAddresses: {
    97: '',
    56: '0x55d398326f99059fF775485246999027B3197955',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
},

{
  pid: 5,
  risk: 5,
  lpSymbol: 'BTCB-BNB LP v2',
  lpAddresses: {
    97: '',
    56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
  },
  tokenSymbol: 'BTCB',
  tokenAddresses: {
    97: '',
    56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
},
{
  pid: 6,
  risk: 5,
  lpSymbol: 'BNB-ETH LP v2',
  lpAddresses: {
    97: '',
    56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
  },
  tokenSymbol: 'ETH',
  tokenAddresses: {
    97: '',
    56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
},


{
  pid: 7,
  risk: 5,
   lpSymbol: 'DAI-BUSD LP v2',
   lpAddresses: {
    97: '',
   56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489', // DAI-BUSD LP
  },
   tokenSymbol: 'DAI',
  tokenAddresses: {
    97: '',
  56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
 },
 quoteTokenSymbol: QuoteToken.BUSD,
quoteTokenAdresses: contracts.busd,
},

{
  pid: 8,
  risk: 5,
  lpSymbol: 'USDC-BUSD LP v2',
  lpAddresses: {
    97: '',
    56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1', // USDC-BUSD LP
  },
  tokenSymbol: 'USDC',
  tokenAddresses: {
    97: '',
    56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},

{
  pid: 9,
  risk: 5,
  lpSymbol: 'USDT-BUSD LP v2',
  lpAddresses: {
    97: '',
    56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
  },
  tokenSymbol: 'USDT',
  tokenAddresses: {
    97: '',
    56: '0x55d398326f99059ff775485246999027b3197955',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},



{
  pid: 10,
  risk: 5,
  lpSymbol: 'DOT-BNB LP v2',
  lpAddresses: {
    97: '',
    56: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF',
  },
  tokenSymbol: 'DOT',
  tokenAddresses: {
    97: '',
    56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
},

{
  pid: 11,
  risk: 5,
  lpSymbol: 'ADA-BNB LP v2',
  lpAddresses: {
    97: '',
    56: '0x28415ff2C35b65B9E5c7de82126b4015ab9d031F',
  },
  tokenSymbol: 'ADA',
  tokenAddresses: {
    97: '',
    56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
},

{
  pid: 12,
  risk: 5,
  lpSymbol: 'CAKE-BNB LP v2',
  lpAddresses: {
    97: '',
    56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
  },
  tokenSymbol: 'CAKE',
  tokenAddresses: {
    97: '',
    56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
},


{
  pid: 13,
  risk: 5,
  lpSymbol: 'UNI-BNB LP v2',
  lpAddresses: {
    97: '',
    56: '0x014608E87AF97a054C9a49f81E1473076D51d9a3',
  },
  tokenSymbol: 'UNI',
  tokenAddresses: {
    97: '',
    56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
},


{
  pid: 14,
  risk: 5,
  lpSymbol: 'LINK-BNB LP v2',
  lpAddresses: {
    97: '',
    56: '0x824eb9faDFb377394430d2744fa7C42916DE3eCe',
  },
  tokenSymbol: 'LINK',
  tokenAddresses: {
    97: '',
    56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
  },
  quoteTokenSymbol: QuoteToken.BNB,
  quoteTokenAdresses: contracts.wbnb,
},

{
  pid: 21,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'BUSD',
  lpAddresses: {
    97: '',
    56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // solo BUSD
  },
  tokenSymbol: 'BUSD',
  tokenAddresses: {
    97: '',
    56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', 
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},
{
  pid: 15,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'BNB',
  lpAddresses: {
    97: '',
    56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD LP
  },
  tokenSymbol: 'BNB',
  tokenAddresses: {
    97: '',
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},

{
  pid: 16,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'USDT',
  lpAddresses: {
    97: '',
    56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00', // BUSD-USDT LP
  },
  tokenSymbol: 'USDT',
  tokenAddresses: {
    97: '',
    56: '0x55d398326f99059ff775485246999027b3197955', 
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},


{
  pid: 17,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'DAI',
  lpAddresses: {
    97: '',
    56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489', // BUSD-DAI LP
  },
  tokenSymbol: 'DAI',
  tokenAddresses: {
    97: '',
    56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', 
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},



{
  pid: 18,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'BTCB',
  lpAddresses: {
    97: '',
    56: '0xF45cd219aEF8618A92BAa7aD848364a158a24F33', // BTCB-BUSD LP
  },
  tokenSymbol: 'BTCB',
  tokenAddresses: {
    97: '',
    56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},

{
  pid: 19,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'ETH',
  lpAddresses: {
    97: '',
    56: '0xd9A0d1F5e02dE2403f68Bb71a15F8847A854b494', // ETH-BUSD LP
  },
  tokenSymbol: 'ETH',
  tokenAddresses: {
    97: '',
    56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},

{
  pid: 20,
  risk: 5,
  isTokenOnly: true,
  lpSymbol: 'CAKE',
  lpAddresses: {
   97: '',
   56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
 },
 tokenSymbol: 'CAKE',
  tokenAddresses: {
    97: '',
    56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  },
  quoteTokenSymbol: QuoteToken.BUSD,
  quoteTokenAdresses: contracts.busd,
},

]
export default farms
