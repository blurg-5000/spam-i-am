import { useAuth0 } from '@auth0/auth0-react'
import Button from '../UI/Button.tsx'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'

function LoginButton() {
  // TODO: call the useAuth0 hook and destructure user, logout, and loginWithRedirect
  const { user, logout, loginWithRedirect } = useAuth0()
  // TODO: replace placeholder user object with the one from auth0

  const handleSignOut = () => {
    console.log('sign out')
    logout()
  }

  const handleSignIn = () => {
    console.log('sign in')
    loginWithRedirect()
  }

  return (
    <>
      <IfAuthenticated>
        <Button onClick={handleSignOut}>Sign out</Button>
        {user && (
          <p data-testid="user nickname">Signed in as: {user?.nickname}</p>
        )}
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Button onClick={handleSignIn}>Sign in</Button>
      </IfNotAuthenticated>
    </>
  )
}

export default LoginButton
