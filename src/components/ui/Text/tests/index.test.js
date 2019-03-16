import React from 'react'
import { cleanup } from 'react-testing-library'
import renderComponent from '__tests__/utils'

import Text from '..'

afterEach(cleanup)

describe('<Text />', () => {
  describe('Based on size modifier', () => {
    describe('When size modifier equals to `small`', () => {
      it('should render properly', () => {
        const { getByText } = renderComponent(<Text size="small">Sample Text</Text>)
        const textNode = getByText('Sample Text')

        expect(textNode).toMatchSnapshot()
      })
    })

    describe('When size modifier equals to `medium`', () => {
      it('should render properly', () => {
        const { getByText } = renderComponent(<Text size="medium">Sample Text</Text>)
        const textNode = getByText('Sample Text')

        expect(textNode).toMatchSnapshot()
      })
    })

    describe('When size modifier equals to `large`', () => {
      it('should render properly', () => {
        const { getByText } = renderComponent(<Text size="large">Sample Text</Text>)
        const textNode = getByText('Sample Text')

        expect(textNode).toMatchSnapshot()
      })
    })
  })

  describe('Based on alignment modifier', () => {
    describe('When alignment modifier equals `left`', () => {
      it('should render properly', () => {
        const { getByText } = renderComponent(<Text alignment="left">Sample Text</Text>)
        const textNode = getByText('Sample Text')

        expect(textNode).toMatchSnapshot()
      })
    })

    describe('When alignment modifier equals `center`', () => {
      it('should render properly', () => {
        const { getByText } = renderComponent(<Text alignment="center">Sample Text</Text>)
        const textNode = getByText('Sample Text')

        expect(textNode).toMatchSnapshot()
      })
    })

    describe('When alignment modifier equals `right`', () => {
      it('should render properly', () => {
        const { getByText } = renderComponent(<Text alignment="right">Sample Text</Text>)
        const textNode = getByText('Sample Text')

        expect(textNode).toMatchSnapshot()
      })
    })

    describe('When alignment modifier equals `justify`', () => {
      it('should render properly', () => {
        const { getByText } = renderComponent(<Text alignment="justify">Sample Text</Text>)
        const textNode = getByText('Sample Text')

        expect(textNode).toMatchSnapshot()
      })
    })
  })
})
