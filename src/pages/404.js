import Link from 'next/link'
import { Heading, Text } from '@aws-amplify/ui-react'
export default function FourOhFour() {
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
        404 - Page Not Found
      </Heading>
      <Text
        style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '2rem' }}
      >
        ... Or maybe it's in development ...
      </Text>
      <Link href="/">
        <a style={{ fontSize: '2rem', textDecoration: 'underline' }}>
          Go back home
        </a>
      </Link>
    </div>
  )
}
