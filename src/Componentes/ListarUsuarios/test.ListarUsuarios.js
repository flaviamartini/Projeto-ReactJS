import React from 'react'
import { shallow } from 'enzyme'

import ListarUsuarios from './ListarUsuarios'

describe('ListarUsuarios', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<ListarUsuarios {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})