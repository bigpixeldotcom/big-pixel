import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <main className='mt-12 max-w-7xl mx-6 md:mx-auto overflow-x-hidden'>
      <SignIn />
    </main>
  )
}