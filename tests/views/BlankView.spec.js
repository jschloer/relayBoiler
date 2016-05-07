import React from 'react'

describe('(View) Blank', () => {
  let _component, _rendered, _props, _spies

  beforeEach(function () {
    _spies = {}
    _props = {
      counter: 0,
      ...bindActionCreators({
        doubleAsync: (_spies.doubleAsync = sinon.spy()),
        increment: (_spies.increment = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }

    _component = shallowRenderWithProps(_props)
    _rendered = renderWithProps(_props)
  });
  
  it('should exist', () => {

  })
})
