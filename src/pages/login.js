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

  // const [user, setUser] = useState(appUser);

  useEffect(() => {
    console.log('logged in?')
    console.log(user)
    if (user) {
      console.log('uer exists redirecting to main page')
      router.push('/')
    }
    console.log('no user allow login')
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
