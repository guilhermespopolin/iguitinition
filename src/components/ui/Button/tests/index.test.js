import React from 'react'
import { cleanup } from 'react-testing-library'
import renderComponent from '__tests__/utils'

import Button from '..'

afterEach(cleanup)

describe('<Button />', () => {
  it('should render properly', () => {
    const { getByText } = renderComponent(<Button>Click Me</Button>)
    const buttonNode = getByText('Click Me')

    expect(buttonNode).toMatchSnapshot()
  })
})

