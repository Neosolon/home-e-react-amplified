import '@aws-amplify/ui-react/styles.css'
import { Amplify, Auth } from 'aws-amplify'
import config from '../aws-exports'
import '../styles/globals.css'
import {
  ThemeProvider,
  View,
  Authenticator,
  useAuthenticator,
} from '@aws-amplify/ui-react'
import { useEffect, useState } from 'react'
import NavBar from '@/ui-components/NavBar'
import ResponsiveAppBar from '@/components/ResponsiveAppBar'
Amplify.configure({ ...config, ssr: true })

function MyApp({ Component, pageProps }) {
  // const [user, setUser] = useState(null);
  // const { signOut } = useAuthenticator((context) => [context.user])
  //   useEffect(() => {
  //     const getUser = async () => {
  //         try{
  //           let u =  await Auth.currentAuthenticatedUser()
  //           setUser({name: u.username});

  //         }catch(err){
  //           setUser(null);
  //         }
  //       }
  //       console.log("logged in?")
  //       try{
  //         getUser();
  //         console.log("user is logged in")
  //       }catch(err){
  //         console.log(err);
  //       }

  //   }, []);

  return (
    <Authenticator.Provider>
      <ThemeProvider colorMode="dark">
        <View>
          <ResponsiveAppBar width={'100vw'} />
          <Component {...pageProps} />
        </View>
      </ThemeProvider>
    </Authenticator.Provider>
  )
}

export default MyApp
