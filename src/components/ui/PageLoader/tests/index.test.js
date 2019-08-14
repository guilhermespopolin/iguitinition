import React from 'react'
import { render } from '__tests__/utils/rtlWrapper'

import PageLoader from '..'

describe('<PageLoader />', () => {
  describe('When some error occur during page loading', () => {
    it('should render properly', () => {
      const { container } = render(<PageLoader error={new Error('Something went wrong!')} />)

      expect(container.firstChild).toMatchSnapshot()
    })
  })

  describe('When timeout occur during page loading', () => {
    it('should render properly', () => {
      const { container } = render(<PageLoader timeout />)

      expect(container.firstChild).toMatchSnapshot()
    })
  })

  describe('When page takes considerable amount of time to be loaded', () => {
    it('should render properly', () => {
      const { container } = render(<PageLoader pastDelay />)

      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
