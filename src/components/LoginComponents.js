import {
  useTheme,
  View,
  Text,
  Heading,
  useAuthenticator,
  Button,
} from '@aws-amplify/ui-react'
import Image from 'next/image'
import Router from 'next/router'

const routeHome = () => {
  Router.push('/')
}
export const loginComponents = {
  //   Header() {
  //     const { tokens } = useTheme()

  //     return (
  //       <View textAlign="center" marginTop={'10vh'}>
  //         <Image
  //           alt="/next.svg"
  //           height={100}
  //           width={100}
  //           src="/home_e_logo_no_bg.png"
  //           objectFit="fill"
  //         />
  //       </View>
  //     )
  //   },

  Footer() {
    const { tokens } = useTheme()

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[20]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    )
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme()

      return (
        <View textAlign="center">
          <Image
            alt="/next.svg"
            height={100}
            width={100}
            src="/home_e_logo_no_bg.png"
            objectFit="fill"
          />
          <Heading
            // padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
            // padding={'0 0 20 0'}
          >
            Welcome to the Home-E.
          </Heading>
          <Heading
            // padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={4}
          >
            Please Log In
          </Heading>
          <Text
            // padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            variation="tertiary"
            fontSize={'small'}
          >
            Note, even with an account your experience might still be limited on
            the site.
          </Text>
        </View>
      )
    },
    Footer() {
      const { toResetPassword } = useAuthenticator()
      const { tokens } = useTheme()
      return (
        <View textAlign="center" padding={tokens.space.medium}>
          <Button
            fontWeight="normal"
            onClick={routeHome}
            size="small"
            variation="link"
          >
            Go Home
          </Button>
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      )
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme()

      return (
        <View textAlign="center">
          <Image
            alt="/next.svg"
            height={100}
            width={100}
            src="/home_e_logo_no_bg.png"
            objectFit="fill"
          />
          <Heading
            // padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            {'Welcome to the Home-E.'}
          </Heading>
          <Heading
            // padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={4}
          >
            {'Please create a new account'}
          </Heading>
          <Text
            // padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            variation="tertiary"
            fontSize={'small'}
          >
            Note, even with an account your experience might still be limited on
            the site.
          </Text>
        </View>
      )
    },
    Footer() {
      const { toSignIn } = useAuthenticator()

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      )
    },
  },
  //   ConfirmSignUp: {
  //     Header() {
  //       const { tokens } = useTheme()
  //       return (
  //         <Heading
  //           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
  //           level={3}
  //         >
  //           Enter Information:
  //         </Heading>
  //       )
  //     },
  //     Footer() {
  //       return <Text>Footer Information</Text>
  //     },
  //   },
  //   SetupTOTP: {
  //     Header() {
  //       const { tokens } = useTheme()
  //       return (
  //         <Heading
  //           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
  //           level={3}
  //         >
  //           Enter Information:
  //         </Heading>
  //       )
  //     },
  //     Footer() {
  //       return <Text>Footer Information</Text>
  //     },
  //   },
  //   ConfirmSignIn: {
  //     Header() {
  //       const { tokens } = useTheme()
  //       return (
  //         <Heading
  //           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
  //           level={3}
  //         >
  //           Enter Information:
  //         </Heading>
  //       )
  //     },
  //     Footer() {
  //       return <Text>Footer Information</Text>
  //     },
  //   },
  //   ResetPassword: {
  //     Header() {
  //       const { tokens } = useTheme()
  //       return (
  //         <Heading
  //           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
  //           level={3}
  //         >
  //           Enter Information:
  //         </Heading>
  //       )
  //     },
  //     Footer() {
  //       return <Text>Footer Information</Text>
  //     },
  //   },
  //   ConfirmResetPassword: {
  //     Header() {
  //       const { tokens } = useTheme()
  //       return (
  //         <Heading
  //           padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
  //           level={3}
  //         >
  //           Enter Information:
  //         </Heading>
  //       )
  //     },
  //     Footer() {
  //       return <Text>Footer Information</Text>
  //     },
  //   },
}

// const formFields = {
//   signIn: {
//     username: {
//       placeholder: 'Enter your email',
//     },
//   },
//   signUp: {
//     password: {
//       label: 'Password:',
//       placeholder: 'Enter your Password:',
//       isRequired: false,
//       order: 2,
//     },
//     confirm_password: {
//       label: 'Confirm Password:',
//       order: 1,
//     },
//   },
//   forceNewPassword: {
//     password: {
//       placeholder: 'Enter your Password:',
//     },
//   },
//   resetPassword: {
//     username: {
//       placeholder: 'Enter your email:',
//     },
//   },
//   confirmResetPassword: {
//     confirmation_code: {
//       placeholder: 'Enter your Confirmation Code:',
//       label: 'New Label',
//       isRequired: false,
//     },
//     confirm_password: {
//       placeholder: 'Enter your Password Please:',
//     },
//   },
//   setupTOTP: {
//     QR: {
//       totpIssuer: 'test issuer',
//       totpUsername: 'amplify_qr_test_user',
//     },
//     confirmation_code: {
//       label: 'New Label',
//       placeholder: 'Enter your Confirmation Code:',
//       isRequired: false,
//     },
//   },
//   confirmSignIn: {
//     confirmation_code: {
//       label: 'New Label',
//       placeholder: 'Enter your Confirmation Code:',
//       isRequired: false,
//     },
//   },
// }
