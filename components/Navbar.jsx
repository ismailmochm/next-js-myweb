import Link from 'next/link'
import {withRouter} from 'next/router'

function Navbar({router}) {

  const navMenu = [
    {text:'Home', href:'/'},
    {text:'About', href:'/about'},
    {text:'Portofolio', href:'/portofolio'},
    {text:'Contact', href:'/contact'}
  ] 

  return (
    <nav className="navBar">
    <div className="container">
      <Link href="/"><a className="myName">ISMAIL</a></Link>

      <ul className="nav-menu">
        {
          navMenu.map(nav => (
            <li key={nav.text}> 
              <Link href={nav.href}>
                <a className={`nav-item ${router.pathname == nav.href ? 'active' : ''}`}>{nav.text}</a>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  </nav>
  )
  
}

export default withRouter(Navbar);