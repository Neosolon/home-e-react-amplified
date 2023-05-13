import { Button, useAuthenticator } from '@aws-amplify/ui-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

// import FileViewer from 'react-file-viewer';
export default function Home() {
  const { user, signOut } = useAuthenticator((context) => [context.user])
  const router = useRouter()

  const signOutUser = () => {
    signOut()
    router.push('/')
  }

  useEffect(() => {
    console.log('index refreshd: logged in?')
    console.log(user)
  }, [user])

  return (
    <main
      className={`containerBackgroundImage min-h-screen flex-col justify-between p-24`}
    >
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
      />
      {/* {user && <Button onClick={() => signOutUser()}>signOut</Button>} */}
      <Document file="/DH_Resume_2023.pdf">
        <Page pageNumber={1} renderTextLayer={false} />
      </Document>
    </main>
  )
}
