// // middleware.ts
import { NextResponse } from 'next/server'
// import { Auth } from 'aws-amplify'
// import { withSSRContext } from 'aws-amplify'
// Amplify.configure({ ...config, ssr: true })

export async function middleware(request) {
  // let SSR = withSSRContext({request});
  // return NextResponse.next();
  console.log('MIDDLEWARE: current url')
  // console.log(request.url)
  console.log(request.nextUrl.pathname)
  if (request.nextUrl.pathname == '/') {
    console.log('MIDDLEWARE: home page continue')
    return NextResponse.next()
  }
  // return NextResponse.next();
  try {
    // Check if the user is authenticated using Amplify
    console.log('user the request object to get the url', request.nextUrl)
    let request_base = request.nextUrl.origin + '/'
    console.log('IS DEV? ', process.env.IS_DEV != 'true')
    if (request_base.includes('localhost') && process.env.IS_DEV != 'true') {
      console.log('Using site url')
      request_base = 'https://www.home-e.org/'
    }
    console.log('MIDDLEWARE: fetching from : ', request_base)
    const data = await (
      await fetch(request_base + 'api/check-user', {
        headers: new Headers(request.headers),
      })
    ).json()
    console.log('received data: ', data.user)
    // If the user is authenticated, allow the request to continue
    if (data.user != null) {
      console.log('middleware not redirecting')
      return NextResponse.next()
    } else {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  } catch (error) {
    // If an error occurs or the user is not authenticated, redirect to the login page
    console.log('middleware redirecting {}', error)
    return NextResponse.redirect(new URL('/', request.url))
  }
}
// export async function getServerSideProps(context) {
//   const { Auth } = withSSRContext(context)
//   try {
//     const user = await Auth.currentAuthenticatedUser()
//     console.log('user: ', user)
//     return {
//       props: {
//         user: user,
//       }
//     }
//   } catch (err) {
//     return {
//       props: {
//         user: null
//       }
//     }
//   }
// }

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - / (home page)
     */
    // '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/financial/:path*',
  ],
}

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   // return NextResponse.redirect(new URL('/', request.url));
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// };
