import React from 'react'
import App from './App'

const ReactTestRenderer = require('react-test-renderer')

it('renders without crashing', () => {
  const rendered = ReactTestRenderer.create(<App />).toJSON()
  expect(rendered).toBeTruthy()
})
