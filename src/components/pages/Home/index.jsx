import React from 'react'

import Text from 'components/ui/Text'
import Image from 'components/ui/Image'

import reactLogo from 'assets/imgs/react_logo.svg'

function Home() {
  return (
    <main css="height: 100vh;">
      <header
        css={`
          display: flex;
          align-items: center;
          justify-content: center;
          height: 40%;
          background-color: ${({ theme }) => theme.colors.black};
          color: ${({ theme }) => theme.colors.white};
        `}
      >
        <Image
          css={`
            & {
              transition: all 0.5s ease;
            }

            &:hover {
              transform: scale(1.1);
            }
          `}
          src={reactLogo}
          size="large"
        />
      </header>
      <Text css="padding: 0 0.5rem;" alignment="center">
        To get started, edit <code>src/components/pages/Home/index.jsx</code> and save to reload
      </Text>
    </main>
  )
}

export default Home
