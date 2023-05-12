// import { Amplify, withSSRContext } from 'aws-amplify'
// // import config from '../../aws-exports.js'

// // Amplify SSR configuration needs to be enabled within each API route
// Amplify.configure({ ...config, ssr: true })

// export default async (req, res) => {
//   const { Auth } = withSSRContext({ req })
//   try {
//     const user = await Auth.currentAuthenticatedUser()
//     res.json({ user: user.username })
//   } catch (err) {
//     res.statusCode = 401
//     res.json({ user: null })
//   }
// }
import Amplify, { withSSRContext } from 'aws-amplify'
import config from '../../aws-exports.js'

// Amplify SSR configuration needs to be done within each API route
Amplify.configure({ ...config, ssr: true })
export default async (req, res) => {
  const { Auth } = withSSRContext({ req })

  let user
  try {
    user = await Auth.currentAuthenticatedUser()
    console.log('user is authenticated')
    // fetch some data and assign it to the data variable
  } catch (err) {
    console.log('error: no authenticated user')
    res.statusCode = 401
    res.json({ user: null })
    return res
  }

  res.statusCode = 200
  res.json({
    user: user ? user.username : null,
  })
}
