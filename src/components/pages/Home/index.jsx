import React from 'react'
import styled from 'styled-components'

import reactLogo from 'assets/imgs/react_logo.svg'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40%;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`

const Image = styled.img`
  height: 256px;
  width: 256px;
`

const Text = styled.p`
  text-align: center;
`

function Home() {
  return (
    <main>
      <Header>
        <Image src={reactLogo} size="large" />
      </Header>
      <Text>
        To get started, edit <code>src/components/pages/Home/index.jsx</code> and save to reload
      </Text>
    </main>
  )
}

export default Home
