import React from 'react'
import { render } from '__tests__/utils'

import Title from '..'

describe('<Title />', () => {
  it('should render properly', () => {
    const { getByText } = render(<Title>Sample Title</Title>)
    const titleNode = getByText('Sample Title')

    expect(titleNode).toMatchSnapshot()
  })
})

