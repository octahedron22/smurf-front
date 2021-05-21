import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Button, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  border: 1px solid rgba(15, 150, 242, 0.34);
`

const InfoCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          {TranslateString(999, 'Information')}
        </Heading>
        
        <>
          <Text fontSize="16px">{TranslateString(999, '- NO Migrator Code, NO withdraw Fee')}</Text>
          <Text fontSize="16px">{TranslateString(999, '- Locked Team Liquidity')}</Text>
          <Text fontSize="16px">{TranslateString(999, '- Capped Deposit Fee, max 4%')}</Text>

          <Text fontSize="16px">{TranslateString(999, '- BSCscan verified Contracts')}</Text>
          <Text fontSize="12px">{TranslateString(999, ' -> Smurf: 0x0812EEBCd567a26b53B34900dC412Fe7Fc8e557c')}</Text>
          <Text fontSize="12px">{TranslateString(999, ' -> Master: 0x37232F075BFEe4943c5b14c2e459dEa21C3ACdA4')}</Text> 

          <Text fontSize="16px">{TranslateString(999, '- 3% Transfer Tax (with 50% BURN)')}</Text>
          
          <Button 
              as="a"
              variant="tertiary"
              href="https://bscsmurfmoney.gitbook.io/smurfmoney/"
              target="_blank" >
              {TranslateString(0, 'Read more in SMURF Gitbook')}
            </Button>

        
          
          
          


        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default InfoCard
