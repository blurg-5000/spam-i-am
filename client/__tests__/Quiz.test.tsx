// @vitest-environment jsdom

//  --------------
// GOOD EXAMPLES OF A *USE-QUERY DEPENDANT* COMPONENT TEST - with NOCK
//  --------------

import { describe, it, expect, beforeAll } from 'vitest'
import { renderApp } from '../test-setup'
import nock from 'nock'

beforeAll(() => {
  nock.disableNetConnect()
})

describe.only('<Quiz>', async () => {
  // HAPPY PATH
  it('Quiz heading renders correctly', async () => {
    //ARRANGE
    const scope = nock('http://localhost')
      .get('/api/v1/quiz')
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
          ],
        },
      ])
    const { ...screen } = renderApp('/quiz')
    //ACT
    const heading = await screen.findByRole('heading', {
      level: 1,
    })

    //ASSERT
    expect(heading.textContent).toMatch('What flavour of spam are you????')
    expect(scope.isDone()).toBe(true)
  })
  it('should render the right quiz questions data', async () => {
    //ARRANGE
    const scope = nock('http://localhost')
      .get('/api/v1/quiz')
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
          ],
        },
      ])
    // ACT
    const { ...screen } = renderApp('/quiz')
    // TODO: access quiz question data and see if it matches the nocked data response
  })
  // SAD PATH
  it('should render an error message when things go wrong', async () => {
    //ARRANGE
    const errorScope = nock('http://localhost').get('/api/v1/quiz').reply(500)
    //ACT
    const { ...screen } = renderApp('/quiz')

    const errMsg = await screen.findByText(/Something went wrong/i)
    // ASSERT
    screen.debug()
    // expect(errMsg).toBeInTheDocument()
    expect(errorScope.isDone()).toBe(true)
  })
})
