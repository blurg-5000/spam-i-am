// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeEach, beforeAll, describe, it, vi, expect } from 'vitest'
import { renderApp } from '../test-setup.tsx'
import { screen } from '@testing-library/react'

import nock from 'nock'

const ACCESS_TOKEN = 'mock-access-token'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../components/Nav/LoginButton.tsx'
vi.mock('@auth0/auth0-react')

beforeAll(() => {
  nock.disableNetConnect()
})

beforeEach(() => {
  vi.mocked(useAuth0).mockReturnValue({
    isAuthenticated: true,
    user: { sub: 'fake-user@example.org', nickname: 'fake-user' },
    getAccessTokenSilently: vi.fn().mockReturnValue(ACCESS_TOKEN),
    loginWithRedirect: vi.fn(),
    logout: vi.fn(),
  } as any)
})

describe('LoginButton.tsx', () => {
  it('should render the user nickname when logged in', async () => {
    // const scope = nock('http://localhost').get('/api/v1/spams').reply(200,)

    const screen = renderApp('/')
    const result = await screen.getByTestId('user nickname')

    expect(result.textContent).toMatch('Signed in as: fake-user')
  })
})
