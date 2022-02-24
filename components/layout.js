import Navbar from './NavBar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div className="mx-auto max-w-screen-2xl  ">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
