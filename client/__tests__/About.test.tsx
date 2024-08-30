// @vitest-environment jsdom
import '../test-setup.tsx'
import {
  cleanup,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { beforeEach, describe, it, expect } from 'vitest'
import About from '../Pages/About.tsx'
import nock from 'nock'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'

beforeEach(cleanup)
expect.extend(matchers)

describe('About.tsx', () => {
  it('History text is rendered correctly', async () => {
    // ARRANGE
    // 'nock' an http network call
    nock('http://localhost:5173')
      .get('/about/text')
      .reply(200, [
        {
          id: 1,
          title: 'history test 001',
          body: 'the body of history test 001',
        },
        {
          id: 2,
          title: 'history test 002',
          body: 'the body of history test 002',
        },
        {
          id: 3,
          title: 'history test 003',
          body: 'the body of history test 003',
        },
      ])

    // ACT
    // render about
    render(<About />)
    await waitForElementToBeRemoved(() => screen.getByText(/Loading/))

    // ASSERT
    waitFor(() => screen.getByTestId('testid-about-text'))
      .then((result) => {
        expect(result).length.greaterThanOrEqual(3)
      })
      .catch((e) => console.error(e))
  })
})
