import { login, logout, loggedInUserDisplayName } from "../services/authservice"

export function SignIn() {
  return <button onClick={login}>Sign In</button>
}

export function SignOut() {
  return (
    <div>
      Hello, {loggedInUserDisplayName()}   
      <button className="sign-button" onClick={logout}>Sign Out</button>
    </div>
  )
}