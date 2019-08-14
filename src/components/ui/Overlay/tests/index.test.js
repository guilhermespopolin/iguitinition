import React from 'react'
import { render } from '__tests__/utils/rtlWrapper'

import Overlay from '..'

describe('<Overlay />', () => {
  it('should render properly', () => {
    const { container } = render(<Overlay />)

    expect(container.firstChild).toMatchSnapshot()
  })
})

