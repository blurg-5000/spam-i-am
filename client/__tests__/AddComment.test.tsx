// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeAll, describe, it, vi, expect } from 'vitest'
import { renderApp } from '../test-setup.tsx'
import nock from 'nock'

import { useAuth0 } from '@auth0/auth0-react'
import { shouldProcessLinkClick } from 'react-router-dom/dist/dom'
vi.mock('@auth0/auth0-react')

beforeAll(() => {
  nock.disableNetConnect()
})

const ACCESS_TOKEN =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImxrMFcyTzFkWGNrVldvYllVZXlRWiJ9.eyJpc3MiOiJodHRwczovL3NwYW0tbWF0YWktMjAyNC5hdS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjZjYmM4ODRlN2MwYmRiMzVhOGI5NzZhIiwiYXVkIjoiaHR0cHM6Ly9zcGFtL2FwaSIsImlhdCI6MTcyNDk4MzIwNywiZXhwIjoxNzI1MDY5NjA3LCJndHkiOiJwYXNzd29yZCIsImF6cCI6IldxNE5NOWViYkhWUEdUNktIZDNucTVFVmVXd1dIVDVjIn0.Q2HRpuO_W0a643CqLBpxUMqBbwKVC255fbTkkiYyB7fFCbpKe8kNbahPimRQ4dBim4t6hlJ-gRyxf9LcNsbhEOEMTAIQJTfhg0hbEqkElHI2lvjOrjsS8VeMGc9_robi062yj7BS_kNB8JZvrwUv4mpPO2vngAMC49voS-AqJt0HG7BtAMAFDch3xJs7y-WEVwqvLKzCNhtMe8Ul_OSndvzqln8upye9gnDXgKN3jEi6mrSJIdjrxhKeoSlIsUA4FAH9FSoT20YCyB4wAp5cL6ik83LX67kaNUfl14aS3ceDsY4rPDAG5spJhhkH98WiqsxKBRqd8DkC-iEUVSDcyw'

describe('Adding a comment while logged in', () => {
  it('Renders the comment', async () => {
    vi.mocked(useAuth0).mockReturnValue({
      isAuthenticated: true,
      user: { sub: 'fake-user@example.org', nickname: 'fake-user' },
      getAccessTokenSilently: vi.fn(async () => ACCESS_TOKEN),
    } as any)

    nock('http://localhost').get('/api/v1/comments/2')

    const { user, ...screen } = renderApp('/ratespam')

    //Select comment text box

    const commentBox = await screen.findByTestId('commentbox')
    await user.click(commentBox)

    //Add a comment
    await user.type(commentBox, 'This is super tasty!')

    //Nock scope
    const scope = nock('http://localhost', {
      reqheaders: {
        authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
      .post('/api/v1/comments/2')
      .send() //data
      .reply(201)

    //Nock scope done after submit
    await user.pointer({ keys: '[Enter]' })
    console.log(scope.isDone())
    expect(scope.isDone()).toBe(true)
  })
})
