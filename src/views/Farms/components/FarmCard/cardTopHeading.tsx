import React from 'react'
import styled from 'styled-components'
import { Flex, Image, Text, Skeleton } from '@pancakeswap-libs/uikit'
import { Farm } from 'state/types'
import BigNumber from 'bignumber.js'

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  risk?: number
  depositFee?: number
  farmImage?: string
  tokenSymbol?: string
  totalValueFormated?: string
  totalValue?: string
  farmAPR?: string
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  } `

const CardTopHeading: React.FC<ExpandableSectionProps> = ({ farmImage, tokenSymbol, totalValueFormated }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Wrapper
        justifyContent="space-between"
        alignItems="center"
        mb="12px"
        style={{ width: '100%', justifyContent: 'space-between' }}
      >
        <Flex
          className="card-header-top"
          alignItems="flex-end"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            padding: '0.5rem 0.5rem',
            background: 'rgb(11 174 224 / 40%)',
            border: '5px solid rgb(1 174 224 / 50%)',
            borderRadius: '25px 25px 25px 25px',
          }}
        >

            <Flex justifyContent="space-between" flexDirection="column">
            <Text style={{ textAlign: 'left' }}>SMURF</Text>
                     
          </Flex>
         

          <Flex justifyContent="space-between" flexDirection="column">           
            <Text style={{ textAlign: 'left' }}>MONEY</Text>
                     
          </Flex>
        </Flex>
      </Wrapper>

      <Image
        src={`https://raw.githubusercontent.com/octahedron22/smurf-frontend/master/public/images/farms/${farmImage}.png`}
        alt={tokenSymbol}
        width={104}
        height={79}
        marginTop={-50}
        marginBottom={10}
      />
    </div>
  )
}

export default CardTopHeading
