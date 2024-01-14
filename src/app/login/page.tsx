import { AuthButtonServer } from '../components/auth-button-server'

export default function Login () {
  return (
        <section className='grid place-content-center min-h-screen'>
            <h1 className='text-4xl font-bold text-center mb-4'>Incia sesión de NinduX</h1>

            <AuthButtonServer />

        </section>
  )
}
