import Image from 'next/image'
import Link from 'next/link'
import logo from './dojo-logo.png'
function Nav() {
  return (
   <nav className=''>
          <Image src={logo} alt="Dojo logo" width={70} quality={100} placeholder='blur' />
          <h1>Dojo Helpdesks</h1>
          <Link href='/'>Dashboard</Link>
          <Link href='/tickets' >Tickets</Link>
        </nav>
  )
}

export default Nav
