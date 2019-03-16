import React from 'react'
import { cleanup } from 'react-testing-library'
import renderComponent from '__tests__/utils'

import Input from '..'

afterEach(cleanup)

describe('<Input />', () => {
  it('should render properly', () => {
    const { getByPlaceholderText } = renderComponent(<Input placeholder="Enter some text" />)
    const inputNode = getByPlaceholderText('Enter some text')

    expect(inputNode).toMatchSnapshot()
  })
})

