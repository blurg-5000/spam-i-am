// @vitest-environment jsdom
import '../test-setup.tsx'
import { cleanup, render, screen } from '@testing-library/react'
import { beforeEach, describe, it, expect } from 'vitest'
import LoginButton from '../components/Nav/LoginButton.tsx'

beforeEach(cleanup)

describe('LoginButton.tsx', () => {
  it('Correct name is rendered when user is logged in', () => {
    render(<LoginButton />)
    const result = screen.getByTestId('data-testid')
    expect(result.textContent).toMatch('Signed in as: fake-user')
  })
})
