import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <Header />
      <main id="main-content" style={{ marginTop: '80px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
