import React from 'react'
import styled from 'styled-components'

import Text from 'components/ui/Text'
import Image from 'components/ui/Image'

import reactLogo from 'assets/imgs/react_logo.svg'

const StyledHome = styled.main`
  height: 100vh;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40%;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`

function Home() {
  return (
    <StyledHome>
      <Header>
        <Image src={reactLogo} size="large" />
      </Header>
      <Text alignment="center">
        To get started, edit <code>src/components/pages/Home/index.jsx</code> and save to reload
      </Text>
    </StyledHome>
  )
}

export default Home
