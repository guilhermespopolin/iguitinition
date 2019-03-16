import React from 'react'
import renderComponent from '__tests__/utils'

import Button from '..'

describe('<Button />', () => {
  it('should render properly', () => {
    const { getByText } = renderComponent(<Button>Click Me</Button>)
    const buttonNode = getByText('Click Me')

    expect(buttonNode).toMatchSnapshot()
  })
})

