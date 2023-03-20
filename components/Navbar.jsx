const { default: Link } = require("next/link")



const Navbar = () => {
    return (
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/kittens'>Kittens</Link>
            <Link href='/resources'>Resources</Link>
            <Link href='/contact'>Contact us</Link>
        </nav>
    )
}
export default Navbar