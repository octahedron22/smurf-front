import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import InfoCard from './components/InfoCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('https://raw.githubusercontent.com/octahedron22/smurf-frontend/master/public/images/smurf/3.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 150px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('https://raw.githubusercontent.com/octahedron22/smurf-frontend/master/public/images/smurf/3.png'),
      url('https://raw.githubusercontent.com/octahedron22/smurf-frontend/master/public/images/smurf/3b.png');
    background-size: 260px;
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        
        <Heading as="h1" size="xl" mb="5px" textTransform="uppercase" color="#127ee3">
          {TranslateString(0, 'SMURF MONEY')}
        </Heading>

        <Text mb="5px" style={{ color: '#127ee3', fontSize: '20px' }}>
          {TranslateString(578, 'Earn Smurf by Staking')}
        </Text>


            <Button 
              as="a"
              variant="tertiary"
              href="https://bscscan.com/block/countdown/7622222"
              target="_blank" >
              {TranslateString(0, 'Farming starts at Block: 7622222')}
            </Button>

        

      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />   
          <TotalValueLockedCard />       
          <CakeStats />          
          <InfoCard/>
        </Cards>
      </div>
    </Page>
  )
}

export default Home
