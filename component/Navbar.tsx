import Link from "next/link"

function Navbar () {
return (
  <div>
<h1>My Navbar Component</h1><br/>
<Link href="/About">About</Link><br/><br/>
<Link href="/category/crypto">Crypto</Link>

</div>
  )
}

export default Navbar