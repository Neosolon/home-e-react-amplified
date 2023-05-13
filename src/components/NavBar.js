import {
  Flex,
  View,
  Button,
  useAuthenticator,
  Link,
} from '@aws-amplify/ui-react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function NavBar() {
  const router = useRouter()
  const { user, signOut } = useAuthenticator((context) => [context.user])

  const handleSignOn = () => {
    if (user) {
      signOut()
      router.push('/')
    } else {
      router.push('/login')
    }
  }

  return (
    <Flex
      as="nav"
      bg="white"
      color="gray.800"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding=".5rem"
      boxShadow="md"
    >
      <View>
        <Link to="/">
          <img src="/home_e_logo.jpg" alt="Logo" />
          <span>HomeE</span>
        </Link>
      </View>

      <View>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/finances/home">Finances</Link>
        {user && (
          <Button onClick={() => handleSignOn()}>
            {user ? 'Sign Out' : signIn}
          </Button>
        )}
      </View>
    </Flex>
  )
}
