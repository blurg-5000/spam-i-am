import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
// import { NavGroup, NavButton } from './Styled.tsx'
import { useAuth0 } from '@auth0/auth0-react'

function LoginButton() {
  // TODO: call the useAuth0 hook and destructure user, logout, and loginWithRedirect
  const { user, logout, loginWithRedirect } = useAuth0()
  // TODO: replace placeholder user object with the one from auth0
  // const user = {
  //   nickname: 'john.doe',
  // }
  console.log(user)

  const handleSignOut = () => {
    console.log('sign out')
    return logout()
  }

  const handleSignIn = () => {
    console.log('sign in')
    return loginWithRedirect()
  }

  return (
    <>
      <IfAuthenticated>
        <button onClick={handleSignOut}>Sign out</button>
        {user && <p>Signed in as: {user?.nickname}</p>}
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button onClick={handleSignIn}>Sign in</button>
      </IfNotAuthenticated>
    </>
  )
}

export default LoginButton
