import { describe, it, expect, beforeEach } from 'vitest'
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { renderApp } from '../test-setup'
import nock from 'nock'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'

beforeEach(cleanup)
expect.extend(matchers)

describe('<Quiz>', async () => {
  //ARRANGE
  nock('http://localhost:3000/api/v1/').get('quiz').reply(200, [])
  //ACT
  renderApp('/')
  await waitForElementToBeRemoved(() => screen.getByText('loading'))
  //ASSERT
})
