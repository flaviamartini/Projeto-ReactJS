import React from 'react'
import { shallow } from 'enzyme'

import Menu from './Menu'

describe('Menu', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<Menu {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})