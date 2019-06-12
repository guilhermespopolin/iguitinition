import React from 'react'
import { cleanup } from 'react-testing-library'
import renderComponent from '__tests__/utils'

import Image from '..'

afterEach(cleanup)

describe('<Image />', () => {
  describe('When size modifier equals `small`', () => {
    it('should render properly', () => {
      const { getByAltText } = renderComponent(<Image size="small" alt="image sample" />)
      const imageNode = getByAltText('image sample')

      expect(imageNode).toMatchSnapshot()
    })
  })

  describe('When size modifier equals `medium`', () => {
    it('should render properly', () => {
      const { getByAltText } = renderComponent(<Image size="medium" alt="image sample" />)
      const imageNode = getByAltText('image sample')

      expect(imageNode).toMatchSnapshot()
    })
  })

  describe('When size modifier equals `large`', () => {
    it('should render properly', () => {
      const { getByAltText } = renderComponent(<Image size="large" alt="image sample" />)
      const imageNode = getByAltText('image sample')

      expect(imageNode).toMatchSnapshot()
    })
  })

  describe('When size modifier equals `responsive`', () => {
    it('should render properly', () => {
      const { getByAltText } = renderComponent(<Image size="responsive" alt="image sample" />)
      const imageNode = getByAltText('image sample')

      expect(imageNode).toMatchSnapshot()
    })
  })
})
