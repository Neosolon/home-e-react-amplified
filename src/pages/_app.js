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
import Nprogress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'
import Loader from '@/components/loader'
Amplify.configure({ ...config, ssr: true })

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false)
  // Nprogress.configure({ showSpinner: false })
  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      // Nprogress.start()
      setIsLoading(true)
    })

    Router.events.on('routeChangeComplete', (url) => {
      // Nprogress.done(false)
      setIsLoading(false)
    })

    Router.events.on('routeChangeError', (url) => {
      setIsLoading(false)
    })
    //todo: might need to call .done at somepoint
  }, [Router])
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
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Authenticator.Provider>
        <ThemeProvider colorMode="dark">
          <View>
            <ResponsiveAppBar width={'100vw'} />
            {isLoading && <Loader />}
            <Component {...pageProps} />
          </View>
        </ThemeProvider>
      </Authenticator.Provider>
    </>
  )
}

export default MyApp
