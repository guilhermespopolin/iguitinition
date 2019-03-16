import React from 'react'
import { cleanup } from 'react-testing-library'
import renderComponent from '__tests__/utils'

import Title from '..'

afterEach(cleanup)

describe('<Title />', () => {
  it('should render properly', () => {
    const { getByText } = renderComponent(<Title>Sample Title</Title>)
    const titleNode = getByText('Sample Title')

    expect(titleNode).toMatchSnapshot()
  })
})

