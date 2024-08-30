// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, beforeEach, beforeAll } from 'vitest'
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

beforeAll(() => {
  nock.disableNetConnect()
})

beforeEach(cleanup)
expect.extend(matchers)

describe('<Quiz>', async () => {
  //ARRANGE
  nock('http://localhost:80')
    .get('/api/v1/quiz/')
    .reply(200, [
      {
        id: 1,
        question: 'Pick your dream breakfast!',
        options: [
          {
            image: 'full_english.jpeg',
            text: 'Half English',
            category: 'a',
          },
          {
            image: 'handful_chillis.avif',
            text: 'A mouthful of chillis',
            category: 'b',
          },
          {
            image: 'pancakes.webp',
            text: 'Waffles',
            category: 'c',
          },
          {
            image: 'leftover_pizza.jpg',
            text: 'Fresh pizza',
            category: 'd',
          },
        ],
      },
    ])
  //ACT
  renderApp('/quiz')
  await waitForElementToBeRemoved(() => screen.getByAltText(/loading/i))

  const quiz = screen.getByTestId('quiz-heading')

  // waitFor(() => screen.getByText('breakfast!'))
  //   .then((res) => {
  //     quiz = res
  //     expect(quiz).toBeInTheDocument()
  //   })
  // .catch((e) => console.log(e))
  //ASSERT
  expect(quiz).toBeInTheDocument()
})

//SAD PATH
it('should render an error messgage when thingsgo wrong', async () => {
  //ARRANGE
  nock('http://localhost:3000/api/v1').get('/quiz/').reply(500)
  //ACT
  renderApp('/')
  await waitForElementToBeRemoved(() => screen.getByAltText('loading'))

  const errMsg = screen.getByText('ERROR')

  expect(errMsg).toBeInTheDocument()
})
