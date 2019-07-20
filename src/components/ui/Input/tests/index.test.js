import React from 'react'
import { render } from '__tests__/utils'

import Input from '..'

describe('<Input />', () => {
  it('should render properly', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter some text" />)
    const inputNode = getByPlaceholderText('Enter some text')

    expect(inputNode).toMatchSnapshot()
  })
})

