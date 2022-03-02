import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='font-mono'>{children}</main>
      <Footer />
    </>
  )
}