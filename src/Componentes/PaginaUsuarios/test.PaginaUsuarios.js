import React from 'react'
import { shallow } from 'enzyme'

import PaginaUsuarios from './PaginaUsuarios'

describe('PaginaUsuarios', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<PaginaUsuarios {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})