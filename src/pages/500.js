import Link from 'next/link'
import { Heading } from '@aws-amplify/ui-react'
export default function Custom500() {
  return (
    <div
      className="containerBackgroundImageAlt"
      style={{
        height: '100vh',
      }}
    >
      <Heading
        style={{ fontSize: '5rem', fontWeight: 'bold', marginBottom: '2rem' }}
        level={1}
      >
        500 - Server-side Error Occurred
      </Heading>
      <Link href="/">
        <a style={{ fontSize: '2rem', textDecoration: 'underline' }}>
          Go back home
        </a>
      </Link>
    </div>
  )
}
