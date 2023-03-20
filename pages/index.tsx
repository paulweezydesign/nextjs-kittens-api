

import Link from 'next/link'



export default function Index() {


  return (
    <div>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/kittens'>Kittens</Link>
      </nav>
      <h1>Home</h1>
    </div>
  )
}
