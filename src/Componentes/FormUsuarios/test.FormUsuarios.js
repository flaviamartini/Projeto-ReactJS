import React from 'react'
import { shallow } from 'enzyme'

import FormUsuarios from './FormUsuarios'

describe('FormUsuarios', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<FormUsuarios {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})