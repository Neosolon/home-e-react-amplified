import {
  withAuthenticator,
  Authenticator,
  useAuthenticator,
  Heading,
} from '@aws-amplify/ui-react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { loginComponents } from '@/components/LoginComponents'
function LoginPage() {
  const router = useRouter()
  const { user } = useAuthenticator((context) => [context.user])

  const [appUser, setUser] = useState(user)

  useEffect(() => {
    console.log('LogIn FOrm: logged in?')
    console.log(user)
    if (user && user != appUser) {
      console.log('user exists redirecting to where they came from')
      router.back()
    } else {
      console.log('no user, allow login to proceed, no redirect')
      setUser(user)
    }
  }, [user])

  return (
    <div className="containerBackgroundImage" style={{ height: '100vh' }}>
      <Authenticator
        variation="modal"
        loginMechanisms={['email']}
        components={loginComponents}
      ></Authenticator>
    </div>
  )
}

export default LoginPage
